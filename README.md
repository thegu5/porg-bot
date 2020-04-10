# Porg-bot

This is the public github repository for Porg Bot. Porg Bot is a good bot.

## Setup

This code is ready to go, except that you need to create a config.json file.

Example:

```

{
    "prefix":"BOT PREFIX HERE",
    "token":"BOT TOKEN HERE"
}

```
You may also need to get the dependencies and libraries required. These include:
ytdl-core
discord.js
opusscript
ffmpeg-static
fs

get them with npm:

`npm install ytdl-core discord.js opusscript ffmpeg-static`

NOTE: opusscript, ytdl-core and ffmpeg-static are needed only for the incomplete `porg-song` command. They are not needed currently.

### That's it!

Your simple discord bot can be run using `node .` with the command line while in the correct repository. (use cd [the file's path] to get there).

