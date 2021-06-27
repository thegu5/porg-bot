<div align="center">
    <p>
        <img src="https://guswatkins.net/favicon.png" width="300" alt="porg">
    </p>
    <p>
        <a href="https://discord.gg/bRCvFy9"><img src="https://discord.com/api/guilds/725859716454023228/embed.png" alt="Discord server" /></a>
    </p>
</div>
## Getting Started

Install [Node.js](https://nodejs.org). While it's installing, continue reading.
Download this repository with the clone button, and extract the zip. When it's extracted, open the location in your file browser (finder or file explorer).
Create a file called `config.json` with 

```

{
    "token":"BOT TOKEN HERE",
    "rbKey":"REBRANDLY API KEY HERE"
}

```
For the shortenlink command, you need to sign up for a [rebrandly account](https://rebrandly.com). Create an api key and paste it into the rbKey value in config.json.
You can change the p!about command to say that you are self hosting the bot if you want.

To be considered as the bot owner and add a custom prefix, go to lines 7 - 11 in `index.js` and put in your user id (if you don't understand, see [here](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-).

## Dependencies

Open the command prompt (or terminal). Get into the directory you installed with [this wikihow guide](http://www.wikihow.com/Change-Directories-in-Command-Prompt) to open a command prompt in that location. Run:

`npm i discord.js discordjs/Commando ffmpeg-static @discordjs/opus node-fetch canvas` (Note: if you're screaming "hey gu5, i didn't install npm!" then you're wrong because you just did with nodejs :D )

### That's it!

Your simple discord bot can be run using `node .`. You have to be in the directory of the code (which you should be right now if you followed instructions).
