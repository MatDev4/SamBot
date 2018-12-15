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
    let orange = botconfig.orange
    let blue = botconfig.discordblue

    const PingEmbed = new Discord.RichEmbed()
    .setTitle(`:ping_pong: Pong !`)
    .setColor(blue)
    .addField("Ping", `\`${message.createdTimestamp - Date.now()}ms\``)
    .setThumbnail('https://media.tenor.com/images/c48e9d12bf98cfa16e920c6321a1a01a/tenor.gif')
    message.channel.send(PingEmbed)
}

module.exports.help = {
    name: "ping"
}
