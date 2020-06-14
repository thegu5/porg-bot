const { Command } = require('discord.js-commando');
module.exports = class UserInfo extends Command {
	constructor(client) {
		super(client, {
			name: 'user-info',
			group: 'data',
			memberName: 'user-info',
			description: 'Displays your username and ID.',
			throttling: {
				usages: 2,
				duration: 10,
			},
		});
	}

	run(message) {
		message.say(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	}
};