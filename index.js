const fs = require('fs');
const canvas = require('canvas');
const path = require('path')
const scores = require("./porgscore.json");
const config = require("./config.json")
const { CommandoClient } = require('discord.js-commando');
const owner = '639966783213928448'
const client = new CommandoClient({
    commandPrefix: 'p!',
    owner: owner,
    invite: '',
});
client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['data', 'Get data about lots of things'],
        ['information', 'Bot information'],
        ['utility', 'Commands that do something meaningful'],
        ['misc', 'Miscellaneous'],
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
    client.user.setActivity('with fire || p!help');
    function callback() {
        client.user.setActivity('with fire || p!help');
    };
    setInterval(callback, (1000 * 60 * 5));
});
client.on('message', message => {
    if (message.author.bot) return;
    if (!scores[message.author.id]) {
        scores[message.author.id] = {
            money: 0
        }
    };
    const porgmessage = /((.+)?porg(.+)?)/gsi
    if (porgmessage.test(message.content)) {
        message.react('671023295964905482');
    }
    scores[message.author.id].money += 1;
    fs.writeFileSync("./porgscore.json", JSON.stringify(scores));
})
client.on('error', console.error);
client.login(config.token)