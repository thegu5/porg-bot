const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const config = require('../config.json');
const apiKey = config.rbKey;
const fetch = require('node-fetch');
module.exports = {
    name: 'shortenlink',
    cooldown: '30',
    description: 'Shorten a url!',
    usage: '<link>',
    execute(message, args) {
        console.log('shorten command')
        // Information to reach API
const url = 'https://api.rebrandly.com/v1/links';

const renderResponse = (res) => {
  // Displays either message depending on results
  if(res.errors){
    message.channel.send('Something went wrong. Please try again.')
  } else {  
    message.channel.send(`Your epic short url: ${res.shortUrl}`);
  }
}

const shortenUrl = () => {
  const urlToShorten = args[0];
  const data = JSON.stringify({destination: urlToShorten});
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
      message.channel.send(`Your short url: ${jsonResponse.shortUrl}`);
    })
}
    shortenUrl();
    }
}