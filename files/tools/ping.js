const Discord = require('discord.js');
const fs = require("fs");
let botconfig = require("../botconfig.json");
let misc = require("../misc.json");
const i18n = require('i18n');
const client = new Discord.Client({disableEveryone: true});

var prefix = (botconfig.prefix)




module.exports.run = async (bot, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;

    message.channel.send(`:ping_pong: Pong !\nPing : **${message.createdTimestamp - Date.now()}ms**`)
}

module.exports.help = {
    name: "ping"
}
