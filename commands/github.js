module.exports = {
    name: 'github',
	cooldown: '20',
	description: "Links you to the porg bot github repo",
	execute(message) {
		return message.channel.send('Check out the epic <:Porg:671023295964905482> repo: https://github.com/thegu5/porg-bot')
	},
};