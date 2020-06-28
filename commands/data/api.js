const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');
module.exports = class ApiCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'api',
            group: 'data',
            memberName: 'api',
            description: 'Send a  `GET` request to an api',
            throttling: {
                usages: 2,
                duration: 40,
            },
            args: [
                {
                    key: 'link',
                    prompt: 'Bruh, are you going to enter a link',
                    type: 'string',
                },
            ],
        });
    }

    run(message, { link }) {
        const linkRegexp = /(https?:\/\/.+\..+[\/\/]?.?)/i;
        if (!linkRegexp.test(link)) {
            return message.say('You dum dum, are you going to enter an actual link?')
        }
        fetch(link)
            .then(response => response.json())
            .then(data => { if (JSON.stringify(data, null, "\t").length < 2000) { message.say('```json\n' + JSON.stringify(data, null, "\t") + '\n``` \napi request by ' + message.author.tag) } else { message.say('Response.json is over 2000 characters') } });
    }
};