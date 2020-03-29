module.exports = {
	cooldown: '20',
	name: 'porg-song',
	description: 'Makes the bot join the voice channel you are in, and plays a special song.',
	execute(message, args) {
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
		*/
	}
};
