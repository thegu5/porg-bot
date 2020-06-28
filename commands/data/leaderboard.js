const { Command } = require('discord.js-commando');
const scores = require('../../porgscore.json');
const { MessageAttachment } = require('discord.js');
const Discord = require('discord.js');
const client = require('../../index.js')
module.exports = class LeaderboardCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'leaderboard',
            group: 'data',
            memberName: 'leaderboard',
            description: 'Displays the people with the most <:Porg:671023295964905482> points',
            throttling: {
                usages: 2,
                duration: 10,
            },
        });
    }

    async run(message) {
       var topscore = 0
       var topid = 0
       var secondscore = 0
       var secondid = 0
       var thirdscore = 0
       var thirdid = 0
       for (var key in scores) {
        if (scores.hasOwnProperty(key)) {
            if (scores[key].money > topscore) {
                topscore = scores[key].money
                topid = key
            } else if (scores[key].money > secondscore) {
                secondscore = scores[key].money
                secondid = key
            } else if (scores[key].money > thirdscore) {
                thirdscore = scores[key].money
                thirdid = key
            }
        }
    }
    topid = await this.client.users.fetch(String(topid))
    secondid = await this.client.users.fetch(String(secondid))
    thirdid = await this.client.users.fetch(String(thirdid))
    topid = topid.tag
    secondid = secondid.tag
    thirdid = thirdid.tag
    console.log(topid)
    const embed = new Discord.MessageEmbed()
        .setColor('#FFD700')
        .setTitle('Leaderboard')
        .addFields(
            { name: `🥇 ${topid}`, value: `${topscore}`},
            { name: `🥈 ${secondid}`, value: `${secondscore}`},
            { name: `🥉 ${thirdid}`, value: `${thirdscore}`},
        )
        .setTimestamp()
    message.say(`#1: ${topid} with ${topscore}\n#2: ${secondid} with ${secondscore}\n#3: ${thirdid} with ${thirdscore}`)
    message.say(embed)
    }
};