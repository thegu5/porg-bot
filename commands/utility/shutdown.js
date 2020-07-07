const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
module.exports = class ShutDown extends Command {
	constructor(client) {
		super(client, {
			name: 'shutdown',
			group: 'utility',
			memberName: 'shutdown',
			description: 'Shuts down the bot.',
			throttling: {
				usages: 2,
				duration: 10,
			},
		});
	}

	async run(message) {
		const owner = this.client.isOwner(message.author)
		if (owner) {
            const embed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('Shutting Down...')
                .setTimestamp()
			await message.say(embed)
			process.exit();
        } else {
            message.say('Nice try lol')
        }
	}
};