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

	run(message, {targetuser}) {
		function getUserFromMention(mention) {
			// The id is the first and only match found by the RegEx.
			const matches = mention.match(/^<@!?(\d+)>$/);

			// If supplied variable was not a mention, matches will be null instead of an array.
			if (!matches) return;

			// However the first element in the matches array will be the entire mention, not just the ID,
			// so use index 1.
			const id = matches[1];

			return client.users.cache.get(id);
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