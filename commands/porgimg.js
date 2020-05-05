
module.exports = {
    name: 'porgimg',
    cooldown: '15',
    description: 'Generates a random image with porgs',
    async execute(message, args) {
        const Canvas = require('canvas');
    const Discord = require('discord.js');
        const canvas = Canvas.createCanvas(500, 500);
        const ctx = canvas.getContext('2d');
        const background = await Canvas.loadImage('./santaPorg.png');
        function randomInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        for (let i = 0; i < 10; i++) {
            let currentImgSize = randomInteger(1, 500)
            ctx.drawImage(background, randomInteger(1, 500), randomInteger(1, 500), currentImgSize, currentImgSize)
        }
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'rand-porg-img.png');
        return message.channel.send(attachment)
    }
}