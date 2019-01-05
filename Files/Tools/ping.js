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

    message.channel.send(`:ping_pong: Pong !\nPing : **${message.createdTimestamp - Date.now()}ms**`)
}

module.exports.help = {
    name: "ping"
}
