const { Command } = require('discord.js-commando');
module.exports = class PorgImg extends Command {
	constructor(client) {
		super(client, {
			name: 'porgimg',
			group: 'misc',
			memberName: 'porgimg',
			description: 'Randomly generated porg image',
			throttling: {
				usages: 2,
				duration: 10,
			},
		});
	}

	async run(message) {
        const Canvas = require('canvas');
        const Discord = require('discord.js');
        const canvas = Canvas.createCanvas(500, 500);
        const ctx = canvas.getContext('2d');
        const background = await Canvas.loadImage('../../santaPorg.png');
        const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'png' }))
        function randomInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        for (let i = 0; i < 10; i++) {
            let currentImgSize = randomInteger(1, 500)
            if (i === 5) {
                ctx.drawImage(avatar, randomInteger(1, 500), randomInteger(1, 500), currentImgSize, currentImgSize)

            } else {
                ctx.drawImage(background, randomInteger(1, 500), randomInteger(1, 500), currentImgSize, currentImgSize)
            }
        }
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'rand-porg-img.png');
        return message.say(attachment)	}
};