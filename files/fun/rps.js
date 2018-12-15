const Discord = require('discord.js');
const fs = require("fs");
let botconfig = require("../botconfig.json");
let misc = require("../misc.json");
let cmdh = require("../cmdh.json");
const i18n = require('i18n');
const client = new Discord.Client({disableEveryone: true});

var prefix = (botconfig.prefix)

module.exports.run = async (client, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if (message.author.bot) return;

    let dark = botconfig.discordblack

    let rockr = [i18n.t('rps.rockr1'), i18n.t('rps.rockr2')]
    let rockc = Math.floor(Math.random() * rockr.length);

    let paperr = [i18n.t('rps.paperr1'), i18n.t('rps.paperr2')]
    let paperc = Math.floor(Math.random() * paperr.length);

    let scissorsr = [i18n.t('rps.scissorsr1'), i18n.t('rps.scissorsr2')]
    let scissorsc = Math.floor(Math.random() * scissorsr.length);

    let RockEmbed = new Discord.RichEmbed()
        .setAuthor(i18n.t('rps.RPSTitle'))
        .setColor(dark)
        .addField(i18n.t('rps.RPSUserInput'), i18n.t('rps.Rock'), true)
        .addField(i18n.t('rps.RPSBotInput'), rockr[rockc], true)

    let PaperEmbed = new Discord.RichEmbed()
        .setAuthor(i18n.t('rps.RPSTitle'))
        .setColor(dark)
        .addField(i18n.t('rps.RPSUserInput'), i18n.t('rps.Paper'), true)
        .addField(i18n.t('rps.RPSBotInput'), paperr[paperc], true)

    let ScissorsEmbed = new Discord.RichEmbed()
        .setAuthor(i18n.t('rps.RPSTitle'))
        .setColor(dark)
        .addField(i18n.t('rps.RPSUserInput'), i18n.t('rps.Scissors'), true)
        .addField(i18n.t('rps.RPSBotInput'), scissorsr[scissorsc], true)

    message.channel.send(i18n.t('rps.RPSTextChoose')).then(async msg => {
        await msg.react('✊')
        await msg.react('✋')
        await msg.react('✌')

        const PFCCollector = msg.createReactionCollector((reaction, user) => user.id === message.author.id);
        PFCCollector.on('collect', async (reaction) => {
            if (reaction.emoji.name === "✊") {
                msg.delete()
                message.channel.send(RockEmbed)
            }
            if (reaction.emoji.name === "✋") {
                msg.delete()
                message.channel.send(PaperEmbed)
            }
            if (reaction.emoji.name === "✌") {
                msg.delete()
                message.channel.send(ScissorsEmbed)
            }
        })
    })
}

module.exports.help = {
    "name": "rps"
}
