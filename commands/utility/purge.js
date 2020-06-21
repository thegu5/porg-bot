const { Command } = require('discord.js-commando');

module.exports = class purgeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'purge',
            group: 'utility',
            memberName: 'purge',
            description: 'Purges messages',
            throttling: {
                usages: 2,
                duration: 10,
            },
            args: [
                {
                    key: 'number',
                    prompt: 'Give a number of messages to purge',
                    type: 'integer',
                },
            ],
        });
    }

    run(message, { number }) {
        if (number <= 0) {
            return message.say('BRUH. Actually delete messages.')
        }
        message.delete().then(
        message.channel.bulkDelete(number)
            .then(messages => message.say(`I just ate ${messages.size} messages`))
            .catch(console.error)
        )
    }
};