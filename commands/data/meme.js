const { Command } = require('discord.js-commando');
const fetch = require('node-fetch')
const Discord = require('discord.js');
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

	async run(message) {
		(async () => {
			const response = await fetch('https://meme-api.herokuapp.com/gimme');
			const json = await response.json();
			const color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
			const embed = new Discord.MessageEmbed()
				.setTitle('r/' + json.subreddit + ' - ' + json.title)
				.setColor(color)
				.setImage(json.url)
			if (json.title === 'Me_irl' || json.title === 'me_irl' || json.title === 'Me_Irl' || json.title === 'Me irl' || json.title === 'Me Irl' || json.title === 'me irl') {
				embed.setTitle('r/' + json.subreddit)
			}
			return message.say(embed)
		})();
	}
};