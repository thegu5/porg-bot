const fs = require('fs');
const canvas = require('canvas');
const path = require('path')
const scores = require("./porgscore.json");
const config = require("./config.json")
const { CommandoClient } = require('discord.js-commando');
const client = new CommandoClient({
    commandPrefix: 'p!',
    owner: '639966783213928448',
    invite: '',
});
client.registry
	.registerDefaultTypes()
	.registerGroups([
		['data', 'Get data about lots of things'],
        ['information', 'Bot information'],
        ['misc', 'Miscellaneous']
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
    if(message.author.bot) return;
if(!scores[message.author.id]){ 
	scores[message.author.id] = { 
		money: 0 
	};
}
scores[message.author.id].money += 1;
fs.writeFileSync("./porgscore.json", JSON.stringify(scores));
})
client.on('error', console.error);
client.login(config.token)