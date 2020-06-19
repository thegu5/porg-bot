const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
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
		const embed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Server Info')
			.setThumbnail(message.guild.iconURL({ format: 'png' }))
			.addFields(
				{ name: 'Created at:', value: message.guild.createdTimestamp, inline: true },
				{ name: 'Members:', value: message.guild.memberCount, inline: true },
			)
			.addFields(
				{ name: 'Guild id:', value: message.guild.id, inline: true },
				{ name: 'Shard id', value: message.guild.shardID, inline: true },
			)
			.addFields(
				{ name: 'Partnered?', value: message.guild.partnered, inline: true },
				{ name: 'Verified?', value: message.guild.verified, inline: true },
			)
			.addFields(
				{ name: 'Verification Level:', value: message.guild.verificationLevel, inline: true },
				{ name: 'Nitro boost level:', value: message.guild.premiumTier, inline: true },
			)
			.setTimestamp()
		if (message.guild.description) {
			embed.addFields({ name: 'Description', value: message.guild.description })
		}
		message.channel.send(embed);
	}
};