const Discord = require('discord.js');
const fs = require("fs");
const client = new Discord.Client({disableEveryone: true});
const Config = require('../../Utilities/Config.json');
const Misc = require('../../Utilities/Misc.json');

var prefix = (Config.Prefix)


module.exports.run = async (bot, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;

    if (!args[0]) return message.channel.send("What do you want to ask?");
    let answer = ["No.", "Yes.", "Possible...", "Shh! Shh! I can't concentrate.", "NEVER!", "Yessss!", "Nooooooooo!"]
    let result = Math.floor((Math.random() * answer.length));
    message.reply(answer[result])
}

module.exports.help = {
    name: "8ball"
}
