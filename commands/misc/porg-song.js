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
		message.say('Abuse of this command can lead to a complete ban from using Porg Bot. Do not use this command if you think members of the voice channel wouldn\'t like it.')
		if (message.member.voice.channel) {
			const songnum = Math.floor(Math.random() * 3) + 1
			if (songnum === 1) {
				const connection = await message.member.voice.channel.join();
				const dispatcher = connection.play('porg-wars-theme.mp3');
				dispatcher.on('start', () => {
					message.say('porg-wars-theme.mp3 is now playing!\nSong Created by Volpe.');
				});

				dispatcher.on('finish', () => {
					message.say('porg-wars-theme.mp3 has finished playing!');
					connection.disconnect();
				});
				dispatcher.on('error', console.error);
			} else if (songnum === 2) {
				const connection = await message.member.voice.channel.join();
				const dispatcher = connection.play('imperial-porg.mp3');
				dispatcher.on('start', () => {
					message.say('imperial-porg.mp3 is now playing!\nSong Created by Lewis Walker.');
				});

				dispatcher.on('finish', () => {
					message.say('imperial-porg.mp3 has finished playing!');
					connection.disconnect();
				});
				dispatcher.on('error', console.error);
			} else if (songnum === 3) {
				const connection = await message.member.voice.channel.join();
				const dispatcher = connection.play('duel-of-the-porgs.mp3');
				dispatcher.on('start', () => {
					message.say('duel-of-the-porgs.mp3 is now playing!\nSong Created by Volpe.');
				});

				dispatcher.on('finish', () => {
					message.say('duel-of-the-porgs.mp3 has finished playing!');
					connection.disconnect();
				});
				dispatcher.on('error', console.error);
			}
		} else {
			return message.say('Join a voice channel, you dum dum')
		}
	}
};