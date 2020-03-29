module.exports = {
	name: 'user-info',
	cooldown: '5',
	description: "Gives a user's name+ID",
	execute(message, args) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};