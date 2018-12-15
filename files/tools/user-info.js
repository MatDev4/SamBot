const Discord = require('discord.js');
const fs = require("fs");
let botconfig = require("../botconfig.json");
let misc = require("../misc.json");
const client = new Discord.Client({disableEveryone: true});
const i18n = require('i18n');
//const superagent = require("superagent");

var prefix = (botconfig.prefix)
let f = misc.fleche




module.exports.run = async (bot, message, args) => {
  let guildname = message.guild.name
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;
    let muser = message.mentions.users.first() || message.author;


    let DiO = misc.DiscordOnline
    let DiI = misc.DiscordIdle
    let DiD = misc.DiscordDnD
    let DiOf = misc.DiscordOffline
    let DiS = misc.DiscordStream
    let DiB = misc.DiscordBot

    let UpBot = {
        "true": `BIP. BOUP. Un Bot.`,
        "false": `Non, c'est un humain.`
    }

    let RichStatus = {
        "online": `${DiO} Connecté(e)`,
        "idle": `${DiI} Occupé(e)`,
        "dnd": `${DiD} Ne pas déranger`,
        "offline": `${DiOf} Déconnecté(e) ou invisible`,
        "streaming": `${DiS} Streaming`
    }

    let month = {
        "Jan": "janvier",
        "Feb": "février",
        "Mar": "mars",
        "Apr": "avril",
        "May": "mai",
        "Jun": "juin",
        "Jul": "juillet",
        "Aug": "août",
        "Sep": "septembre",
        "Oct": "octobre",
        "Nov": "novembre",
        "Dec": "décembre"
    }

    const UserInfoEmbed = new Discord.RichEmbed()
    .setTitle(muser.tag)
    .setColor(botconfig.discordblack)
    .setThumbnail(muser.avatarURL)
    .addField("🃏 Pseudonyme", muser.tag, true)
    .addField("🆔 ID", muser.id, true)
    .addField("👻 Statut", RichStatus[muser.presence.status], true)
    .addField("🎮 Activité", muser.presence.game ? muser.presence.game.name : 'Ne fais rien...', true)
    .addField(`${DiB} Bot`, UpBot[muser.bot], true)
    .addField("💿 Compte créé le", muser.createdAt.toString().split(' ')[2] + ' ' + month[muser.createdAt.toString().split(' ')[1]] + ' ' + muser.createdAt.toString().split(' ')[3] + ' ' + muser.createdAt.toString().split(' ')[4], true)

    message.channel.send(UserInfoEmbed)

}

module.exports.help = {
  name: "user-info"
}
