module.exports = {
	name: 'reload',
	description: 'You can\'t use this command',
	execute(message, args) {
        if (message.author.id === '639966783213928448') {
		if (!args.length) return message.channel.send(`You didn't pass any command to reload, ${message.author}!`);
        const commandName = args[0].toLowerCase();
        const command = message.client.commands.get(commandName)
	        || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if (!command) return message.channel.send(`There is no command with name or alias \`${commandName}\`, ${message.author}!`);
        delete require.cache[require.resolve(`./${commandName}.js`)];
        try {
            const newCommand = require(`./${commandName}.js`);
            message.client.commands.set(newCommand.name, newCommand);
        } catch (error) {
            console.log(error);
            message.channel.send(`There was an error while reloading a command \`${commandName}\`:\n\`${error.message}\``);
        }
        message.channel.send(`Command \`${commandName}\` was reloaded!`);
    } else {
        message.channel.send(`You aren't the owner of the bot!`)
    }
            },
};