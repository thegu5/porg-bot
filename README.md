# Porg-bot

This is the public github repository for Porg Bot. Porg Bot is a good bot.

## Setting up the code

This code is ready to go, except that you need to create a config.json file.

Example:

```

{
    "prefix":"BOT PREFIX HERE",
    "token":"BOT TOKEN HERE"
}

```
## Dependencies
You may also need to get the dependencies and libraries required. These include:
ytdl-core
discord.js
opusscript
ffmpeg-static
fs

get them with [npm](https://npm.org):

`npm i ytdl-core discord.js opusscript ffmpeg-static`

NOTE: opusscript, ytdl-core and ffmpeg-static are needed only for the incomplete `porg-song` command. They are not needed currently.

## Actually Running the Code

You've got the code and everything, but how do you actually excecute it? Our solution is [Nodejs](https://nodejs.org).

### That's it!

Your simple discord bot can be run using `node .` with the command line while in the correct directory. You can figure out how to find the correct directory with [this  wikihow guide](http://www.wikihow.com/Change-Directories-in-Command-Prompt)
