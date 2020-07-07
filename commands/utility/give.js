const { Command } = require('discord.js-commando');
const items = ['money', 'gold'];
const scores = require('../../porgscore.json');
const Discord = require('discord.js');
module.exports = class giveCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'give',
            group: 'utility',
            memberName: 'give',
            usage: '<@user> <item> <amount>',
            description: 'Give someone some items',
            throttling: {
                usages: 2,
                duration: 10,
            },
            args: [
                {
                    key: 'user',
                    prompt: 'Who are you gonna shower with stuff?',
                    type: 'user',
                    default: null
                },
                {
                    key: 'item',
                    prompt: 'what are you creating out of thin air',
                    type: 'string',
                    oneOf: items
                },
                {
                    key: 'amount',
                    prompt: 'How much stuff are you creating out of thin air',
                    type: 'integer'
                }
            ],
        });
    }

    run(message, { user, item, amount }) {
        if (user === null) {
            user = message.author
        }
        if (!scores[user.id]) {
            scores[user.id] = {
                money: 0,
                gold: 0
            }
        };
        scores[user.id][item] += amount;
        const embed = new Discord.MessageEmbed()
            .setTitle('Give')
            .setColor('#ff8800')
            .addFields(
                {name: user.tag, value:`+${amount} ${item}`}
            )
        message.say(embed)
    }
};