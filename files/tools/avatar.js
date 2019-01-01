const Discord = require('discord.js');
const fs = require("fs");
let botconfig = require("../botconfig.json");
let misc = require("../misc.json");
const i18n = require('i18n');
const client = new Discord.Client({disableEveryone: true});
//const superagent = require("superagent");

var prefix = (botconfig.prefix)


module.exports.run = async (bot, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;

    let blue = botconfig.discordblue
    let muser = message.mentions.users.first() || message.author;
    const AvatarEmbed = new Discord.RichEmbed()
    .setColor(blue)
    .setTitle(`${muser.username} avatar`)
    .setDescription(`Download: [> LINK](${muser.avatarURL})`)
    .setImage(muser.avatarURL)
    message.channel.send(AvatarEmbed)
}

module.exports.help = {
    name: "avatar"
}
