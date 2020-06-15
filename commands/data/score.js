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
			args: [
				{
					key: 'targetuser',
					type: 'string',
					default: false,
					prompt: 'huh.',
				},
			],
		});
	}

	run(message, { targetuser }) {
		const score = require('../../porgscore.json');
		function getUserFromMention(mention) {
			const matches = mention.match(/^<@!?(\d+)>$/);
			if (!matches) return;
			const id = matches[1];
			return message.client.users.cache.get(id);
		}
		const userFromMention = getUserFromMention(targetuser)
		if (userFromMention === null) {
			return message.say('You dum dum, mention a valid user')
		}
		if (targetuser === false) {
			return message.say(`${message.author.username}, your score: ${score[message.author.id].money}`);
		} else {
			const userFromMention = getUserFromMention(targetuser)
			if (userFromMention === null) {
				return message.say('You dum dum, mention a valid user')
			} else {
				return message.say(`${userFromMention.username}, your score: ${score[userFromMention.id].money}`);
			}
		}
	}
};