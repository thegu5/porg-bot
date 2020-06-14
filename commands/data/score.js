const { Command } = require('discord.js-commando');
module.exports = class ScoreCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'score',
			group: 'data',
			memberName: 'score',
			description: 'Displays the number of messages you have sent in servers with Porg Bot',
			throttling: {
				usages: 2,
				duration: 10,
			},
		});
	}

	run(message) {
		const score = require('../../porgscore.json');
		return message.say(`${message.author.username}, your score: ${score[message.author.id].money}`);
	}
};