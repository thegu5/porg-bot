const { Command } = require('discord.js-commando');
const config = require('../../config.json');
const apiKey = config.rbKey;
const fetch = require('node-fetch');
const linkRegexp = /(https?:\/\/.+\..+[\/\/]?.?)/i;
module.exports = class ShortenLink extends Command {
  constructor(client) {
    super(client, {
      name: 'shortenlink',
      group: 'misc',
      memberName: 'shortenlink',
      description: 'Shorten a long url with the Rebrandly API.',
      throttling: {
        usages: 4,
        duration: 120,
      },
      args: [
        {
          key: 'link',
          prompt: 'Bruh, are you going to enter a link to shorten or what',
          type: 'string',
        },
      ],
    });
  }

  run(message, { link }) {
    // Information to reach API
    const url = 'https://api.rebrandly.com/v1/links';
    if (!linkRegexp.test(link)) {
      return message.say('You dum dum, are you going to enter an actual link?')
    }
    const renderResponse = (res) => {
      // Displays either message depending on results
      if (res.errors) {
        message.say('Something went wrong. Please try again.')
      } else {
        message.say(`Your epic short url: ${res.shortUrl}`);
      }
    }

    const shortenUrl = () => {
      const urlToShorten = link;
      const data = JSON.stringify({ destination: urlToShorten });
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'apikey': apiKey
        },
        body: data
      }).then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Request failed!');
      }, networkError => {
        console.log(networkError.message);
      }).then(jsonResponse => {
        return message.say(`Your short url: https://${jsonResponse.shortUrl}`);
      })
    }
    shortenUrl();
  }
};