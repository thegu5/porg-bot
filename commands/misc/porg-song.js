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

	run(message) {
		message.say(`Sorry ${message.author}, this command is currently in the works.`);
		/*
		 console.log(message);
		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.reply('please join a voice channel first!');
		}

		voiceChannel.join().then(connection => {
			try {
			const stream = ytdl('https://www.youtube.com/watch?v=QfINpLDE_s4', { filter: 'audioonly' });
			const dispatcher = connection.play(stream);
			dispatcher.setVolume(1);
			dispatcher.on('end', () => voiceChannel.leave());
			}
			catch {
				console.log(Error);
			}
			
		}
		
		);
		*/	}
};