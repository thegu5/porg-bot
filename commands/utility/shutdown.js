const { Command } = require('discord.js-commando');
const owner = require('../../index.js')
const Discord = require('discord.js');
module.exports = class ShutDown extends Command {
	constructor(client) {
		super(client, {
			name: 'shutdown',
			group: 'utility',
			memberName: 'about',
			description: 'Shuts down the bot.',
			throttling: {
				usages: 2,
				duration: 10,
			},
		});
	}

	run(message) {
		if (message.author.id == owner) {
            const embed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('Shutting Down...')
                .setTimestamp()
            message.say(embed)
            process.exit();
        } else {
            message.send('Nice try lol')
        }
	}
};