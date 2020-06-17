const { Command } = require('discord.js-commando');

module.exports = class PorgSong extends Command {
	constructor(client) {
		super(client, {
			name: 'porg-song',
			group: 'misc',
			memberName: 'porg-song',
			description: 'Plays a song (derilect)',
			throttling: {
				usages: 1,
				duration: 15,
			},
		});
	}

	async run(message) {
		if (message.member.voice.channel) {
			const connection = await message.member.voice.channel.join();
			const dispatcher = connection.play('porg-wars-theme.mp3');
			dispatcher.on('start', () => {
				message.say('porg-wars-theme.mp3 is now playing!\nSong Created by Volpe.');
			});

			dispatcher.on('finish', () => {
				message.say('porg-wars-theme.mp3 has finished playing!');
				connection.disconnect();
			});

			// Always remember to handle errors appropriately!
			dispatcher.on('error', console.error);
		} else {
			return message.say('Join a voice channel, you dum dum')
		}
	}
};