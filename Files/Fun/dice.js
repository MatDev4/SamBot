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

    let replies = ["1", "2", "3", "4", "5", "6"]
    let result = Math.floor((Math.random() * replies.length));
    message.channel.send(`🎲 The dice fell on ${replies[result]}`)
}

module.exports.help = {
    name: "dice"
}
