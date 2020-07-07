const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const scores = require('../../porgscore.json')
module.exports = class AboutCommand extends Command {
	constructor(client) {
		super(client, {
            name: 'inventory',
            aliases: ['inv', 'i'],
			group: 'data',
			memberName: 'inventory',
			description: 'Displays your inventory',
			throttling: {
				usages: 2,
				duration: 10,
			},
		});
	}

	run(message) {
        const embed = new Discord.MessageEmbed()
            .setTitle(message.author.tag + '\'s Inventory')
            .addFields(
                { name: 'Gold <:Porg:671023295964905482> coins: ', value: scores[message.author.id].gold}
			)
			.setColor('#ff8800')
			.setTimestamp()
		message.say(embed)
	}
};