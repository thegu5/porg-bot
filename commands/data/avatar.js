const { Command } = require('discord.js-commando');

module.exports = class AvatarCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'avatar',
			group: 'data',
			memberName: 'avatar',
			description: "Displays a user's avatar.",
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
			return message.say(`${message.author.username}'s avatar: ${message.author.displayAvatarURL({ dynamic: true })}`);
		} else {
			const userFromMention = getUserFromMention(targetuser)
			if (userFromMention === null) {
				return message.say('You dum dum, mention a valid user')
			} else {
				return message.say(`${userFromMention.username}'s avatar: ${userFromMention.displayAvatarURL({ dynamic: true })}`);
			}
		}
	}
};