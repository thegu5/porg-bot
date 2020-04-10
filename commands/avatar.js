module.exports = {
	name: 'avatar',
    cooldown: '5',
    aliases: ['icon', 'pfp'],
    description: 'Lists user avatar links',
	execute(message, args) {
        function getUserFromMention(mention) {
            const matches = mention.match(/^<@!?(\d+)>$/);
            if (!matches) return;
            const id = matches[1];
            return client.users.cache.get(id);
        }
        
        
        if (args[0]) {
            const user = getUserFromMention(args[0]);
            if (!user) {
                return message.reply('Please use a proper mention if you want to see someone else\'s avatar.');
            }
    
            return message.channel.send(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
        }
    
        return message.channel.send(`${message.author.username}, your avatar: ${message.author.displayAvatarURL({ dynamic: true })}`);
	}
};