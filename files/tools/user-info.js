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
        "true": `BIP. BOUP ! It's a Bot.`,
        "false": `BIP. BOUP... It's not a Bot.`
    }

    let RichStatus = {
        "online": `${DiO} Online`,
        "idle": `${DiI} Idle`,
        "dnd": `${DiD} Do not Disturb (DnD)`,
        "offline": `${DiOf} Invisible or offline`,
        "streaming": `${DiS} Streaming`
    }

    let month = {
        "1": "Januar",
        "2": "Februar",
        "3": "March",
        "4": "April",
        "5": "May",
        "6": "June",
        "7": "July",
        "8": "August",
        "9": "September",
        "10": "October",
        "11": "November",
        "12": "December"
      }

    const UserInfoEmbed = new Discord.RichEmbed()
    .setTitle(muser.tag)
    .setColor(botconfig.discordblack)
    .setThumbnail(muser.avatarURL)
    .addField("🃏 Username", muser.tag, true)
    .addField("🆔 ID", muser.id, true)
    .addField("👻 Status", RichStatus[muser.presence.status], true)
    .addField("🎮 Activity", muser.presence.game ? muser.presence.game.name : 'Noting...', true)
    .addField(`${DiB} Bot`, UpBot[muser.bot], true)
    .addField("💿 Account created on", muser.createdAt.toString().split(' ')[2] + ' ' + month[muser.createdAt.toString().split(' ')[1]] + ' ' + muser.createdAt.toString().split(' ')[3] + 'at' + muser.createdAt.toString().split(' ')[4], true)

    message.channel.send(UserInfoEmbed)

}

module.exports.help = {
  name: "user-info"
}
