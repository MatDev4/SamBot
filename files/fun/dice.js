const Discord = require('discord.js');
const fs = require("fs");
let botconfig = require("../botconfig.json");
let misc = require("../misc.json");
const client = new Discord.Client({disableEveryone: true});
const lang = require('i18n');
//const superagent = require("superagent");

var prefix = (botconfig.prefix)


module.exports.run = async (bot, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;

    let blue = botconfig.discordblue

    let replies = ["1", "2", "3", "4", "5", "6"]
    let result = Math.floor((Math.random() * replies.length));

    let DiceEmbed = new Discord.RichEmbed()
        .setColor(blue)
        .addField(i18n.t('dice'), `\`${replies[result]}\``)

    message.channel.send(DiceEmbed)
}

module.exports.help = {
    name: "dice"
}
