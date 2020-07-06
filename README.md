<div align="center">
    <img src="https://guswatkins.net/favicon.png" width="300" alt="porg">
    <a href="https://discord.gg/bRCvFy9"><img src="https://discord.com/api/guilds/725859716454023228/embed.png" alt="Discord server" /></a>
</div>
## Setting up the code

Create a file called `config.json` with 

Example:

```

{
    "token":"BOT TOKEN HERE",
    "rbKey":"REBRANDLY API KEY HERE"
}

```

To be considered as the bot owner and add a custom prefix, go to lines 7 - 11 in `index.js` and put in your user id (if you don't understand, see [here](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-).

## Dependencies

[Node.js](https://nodejs.org) is how we install the rest of the dependencies and run the code.

`npm i discord.js discordjs/Commando ffmpeg-static @discordjs/opus node-fetch canvas` (Note: if you're screaming "hey gu5, i didn't install npm!" then you're wrong because you just did with nodejs)

## Command Specific Notes

For the shortenlink command, you need to sign up for a [rebrandly account](https://rebrandly.com). Create an api key and paste it into the rbKey value in config.json.
You can change the p!about command to say that you are self hosting the bot if you want.

### That's it!

Your simple discord bot can be run using `node .` with the command line while in the correct directory. You can figure out how to find the correct directory with [this  wikihow guide](http://www.wikihow.com/Change-Directories-in-Command-Prompt).
