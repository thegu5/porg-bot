const { Command } = require('discord.js-commando');
module.exports = class ServerCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'server',
			group: 'data',
			memberName: 'server',
			description: 'Displays server info',
			throttling: {
				usages: 2,
				duration: 10,
			},
			guildOnly: true,
		});
	}

	run(message) {
        message.say(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	}
};