const { Command } = require('discord.js-commando');

module.exports = class AboutCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'about',
			group: 'information',
			memberName: 'about',
			description: 'Displays the bot owner and github.',
			throttling: {
				usages: 2,
				duration: 10,
			},
		});
	}

	run(message) {
		return message.say('A <:Porg:671023295964905482> bot being created by !thegu5#4829.\nCheck out the Github Repo here: https://github.com/thegu5/porg-bot');
	}
};