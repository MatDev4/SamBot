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

    let monline = message.guild.members.filter(member => member.user.presence.status == 'online').size
    let midle = message.guild.members.filter(member => member.user.presence.status == 'idle').size
    let mdnd = message.guild.members.filter(member => member.user.presence.status == 'dnd').size
    let moffline = message.guild.members.filter(member => member.user.presence.status == 'offline').size
    let mstreaming = message.guild.members.filter(member => member.user.presence.status == 'streaming').size
    let mbot = message.guild.members.filter(member => member.user.bot).size
    let mhuman = message.guild.members.filter(member => !member.user.bot).size
    let mcount = message.guild.memberCount
    let fleche = misc.fleche
    let DiscordOnline = misc.DiscordOnline //${DiscordOnline}
    let DiscordIdle = misc.DiscordIdle //${DiscordIdle}
    let DiscordDnD = misc.DiscordDnD //${DiscordDnD}
    let DiscordOffline = misc.DiscordOffline //${DiscordOffline}
    let DiscordBot = misc.DiscordBot //${DiscordBot}
    let SamReload = misc.SamReload
    let DiscordHuman = misc.DiscordHuman
    let DiscordStream = misc.DiscordStream
    let orange = botconfig.orange
    let blue = botconfig.discordblue


    const MembersinfoEmbed = new Discord.RichEmbed()
    .setTitle(`Members of ${message.guild.name}`)
    .setThumbnail(message.guild.iconURL)
    .setColor(blue)
    .addField("Propriétaire du serveur :", message.guild.owner)
    .addField(`${SamReload} ${mcount} membres`, `${DiscordHuman} Humains ${fleche} \`${mhuman}\`\n${DiscordBot} Bots ${fleche} \`${mbot}\`\n${DiscordOnline} Connectés ${fleche} \`${monline}\`\n${DiscordIdle} AFK ${fleche} \`${midle}\`\n${DiscordDnD} Ne pas déranger ${fleche} \`${mdnd}\`\n${DiscordOffline} Invisibles ou déconnectés ${fleche} \`${moffline}\`\n ${DiscordStream} Streamers ${fleche} \`${mstreaming}\``, true)

    message.channel.send(MembersinfoEmbed)
}

module.exports.help = {
    name: "members-info"
}
