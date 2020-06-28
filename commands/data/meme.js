const { Command } = require('discord.js-commando');
const fetch = require('node-fetch')
module.exports = class MemeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'meme',
			group: 'data',
			memberName: 'meme',
			description: 'MEMES',
			throttling: {
				usages: 2,
				duration: 10,
			},
		});
	}

	 run(message) {
        fetch('https://meme-api.herokuapp.com/gimme')
            .then(res => res.json())
            .then(json => message.say(json.url));

    }
};