module.exports = {
    name: 'score',
	cooldown: '5',
	description: "Gets your score",
	execute(message, args, client) {
		const score = require('../porgscore.json')
		function getUserFromMention(mention) {
            const matches = mention.match(/^<@!?(\d+)>$/);
            if (!matches) return;
            const id = matches[1];
            return client.users.cache.get(id);
        }
        
		if (args[0]) {
            const user = getUserFromMention(args[0]);
            if (!user) {
                return message.reply('Please use a proper mention if you want to see someone else\'s score.');
            }
    
            return message.channel.send(`${user.username}'s score: ${score[user.id].money}`);
        }
    
        return message.channel.send(`${message.author.username}, your score: ${score[message.author.id].money}`);
		
		
	},
};