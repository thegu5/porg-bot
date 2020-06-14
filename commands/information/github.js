const { Command } = require('discord.js-commando');
module.exports = class GithubCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'github',
			group: 'information',
			memberName: 'github',
			description: 'Displays github repo',
			throttling: {
				usages: 2,
				duration: 10,
			},
		});
	}

	run(message) {
		return message.say('Check out the epic <:Porg:671023295964905482> repo: https://github.com/thegu5/porg-bot \nIf you have any ideas and know how to do them, feel free to send a pull request.')
	}
};