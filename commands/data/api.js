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
        if (message.author.id !== 639966783213928448) {
            return message.say('This command works, but still currently making it more stable.')
        }
        const linkRegexp = /(https?:\/\/.+\..+[\/\/]?.?)/i;
        if (!linkRegexp.test(link)) {
            return message.say('You dum dum, are you going to enter an actual link?')
        }
        fetch(link)
            .then(response => response.json())
            .then(data => { if (JSON.stringify(data).length < 2000) { message.say(JSON.stringify(data)) } else { message.say('Response.json is over 2000 characters') } });
    }
};