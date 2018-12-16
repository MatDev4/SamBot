const Discord = require('discord.js');
const fs = require("fs");
const botconfig = require("../botconfig.json");
let misc = require("../misc.json");
const client = new Discord.Client({disableEveryone: true});
const i18n = require('i18n');
//const superagent = require("superagent");

var prefix = (botconfig.prefix)


module.exports.run = async (bot, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;
    let blue = botconfig.discordblue

    if (!args[2]) return message.channel.send(i18n.t('8ball.no-args2'));
    let answer = [i18n.t('8ball.A1'), i18n.t('8ball.A2'), i18n.t('8ball.A3'), i18n.t('8ball.A4'), i18n.t('8ball.A5'), i18n.t('8ball.A6'), i18n.t('8ball.A7')]
    let result = Math.floor((Math.random() * answer.length));

    let question = args.slice().join(" ");

    let BallEmbed = new Discord.RichEmbed()
    .setColor(blue)
    .setTitle("🎱 8ball")
    .addField(`${i18n.t('8ball.Ask')}`, `\`${question}\``, true)
    .addField(i18n.t('8ball.Answer'), `\`${answer[result]}\``, true)
    message.channel.send(BallEmbed)
}

module.exports.help = {
    name: "8ball"
}
