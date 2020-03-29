module.exports = {
	name: 'server',
	cooldown: '5',
	guildOnly: 'true',
	description: 'Server info',
	execute(message, args) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};