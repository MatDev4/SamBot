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

let monline = message.guild.members.filter(member => member.user.presence.status == 'online').size
let midle = message.guild.members.filter(member => member.user.presence.status == 'idle').size
let mdnd = message.guild.members.filter(member => member.user.presence.status == 'dnd').size
let moffline = message.guild.members.filter(member => member.user.presence.status == 'offline').size
let mstreaming = message.guild.members.filter(member => member.user.presence.status == 'streaming').size
let mbot = message.guild.members.filter(member => member.user.bot).size
let mhuman = message.guild.members.filter(member => !member.user.bot).size
let mcount = message.guild.memberCount
let textc = message.guild.channels.filter(chan => chan.type === 'text').size
let voicec = message.guild.channels.filter(chan => chan.type === 'voice').size
let categoryc = message.guild.channels.filter(chan => chan.type === 'category').size
let fleche = misc.fleche //${fleche}
let DiscordOnline = misc.DiscordOnline //${DiscordOnline}
let DiscordIdle = misc.DiscordIdle //${DiscordIdle}
let DiscordDnD = misc.DiscordDnD //${DiscordDnD}
let DiscordOffline = misc.DiscordOffline //${DiscordOffline}
let DiscordBot = misc.DiscordBot //${DiscordBot}
let DiscordHuman = misc.DiscordHuman
let DiscordStream = misc.DiscordStream
let server = message.guild;
let f = fleche;
let region = {
  "brazil": `Brazil :flag_br:`,
  "eu-central": `Central Europe :flag_eu:`,
  "singapore": `Singapor :flag_sg:`,
  "us-central": `Central United States :flag_us:`,
  "sydney": `Sydney :flag_au:`,
  "us-east": `Eastern United States :flag_us:`,
  "us-south": `Southern United States :flag_us:`,
  "us-west": `Western United States :flag_us:`,
  "eu-west": `Western Europe :flag_eu:`,
  "vip-us-east": `🌟 VIP Region 🌟`,
  "london": `London :flag_gb:`,
  "amsterdam": `Amsterdam :flag_nl:`,
  "hongkong": `Hong Kong :flag_hk:`,
  "russia": `Russia :flag_ru:`,
  "southafrica": `Southern Africa :flag_za:`
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
let AFKchan;
let AFKtimeout;
if(message.guild.afkChannelID !== null) {
    AFKchan = `#${bot.channels.get(message.guild.afkChannelID).name}`
    AFKtimeout = `${message.guild.afkTimeout / 60} minutes`
} else {
    AFKchan = "The AFK lounge is not defined"
    AFKtimeout = "AFK is not activated on the server."
}
const explicitcontentLevels = [
  `**Don't scan any messages.** ${f} Ain't no party like my grandma's tea party.`,
  `**Scan messages from members without role.** ${f} Recommended option for servers that use roles for trusted membership.`,
  `**Scan messages sent by all members.** ${f} Recommended option for when you want that squeakly clean shine.`
]
const verificationLevels = [
  `**None** ${f} Unrestricted.`,
  `**Low** ${f} Must have a verified email on their Discord account.`,
  `**Medium** ${f} Must also be registered on Discord for longer than 5 minutes.`,
  `**(╯°□°）╯︵ ┻━┻** ${f} Must also be a member of this server for longer than 10 minutes.`,
  `**┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻** ${f} Must have a verified phone on their Discord account.`
]

let blue = botconfig.discordblue
/*let roleslist = message.guild.roles.map(e=>e.toString()).join(" ; ")
if(message.guild.roles.size > 7) roleslist = "Il y a trop de rôles, je ne peux pas les afficher."
let emojilist = message.guild.emojis.map(e=>e.toString()).join(" ; ") || "Aucun émoji sur le serveur.";*/
let CreateD = message.guild.createdAt.toString().split(' ');
let JoinD = message.member.joinedAt.toString().split(' ');
  const ServerInfoEmbed = new Discord.RichEmbed()

  .setTitle(server.name)
  .setColor(blue)
  .setThumbnail(server.iconURL)
  .addField("🐦 Guild name", server.name, true)
  .addField("🆔 ID", server.id, true)
  .addField("🌐 Region", region[server.region], true)
  .addField("👑 Owner", server.owner, true)
  .addField("📂 Created on",`${CreateD[2]} ${month[server.createdAt.getMonth()]} ${CreateD[3]} at ${CreateD[4]}`, true)
  .addField("🚪 You have joined at", `${JoinD[2]} ${month[server.joinedAt.getMonth()]} ${JoinD[3]} at ${JoinD[4]}`, true)
  .addField(`📣 (${server.channels.size}) Channels and categories`, `Textual lounges ${fleche} ${textc}\nVoice lounges ${fleche} ${voicec}\nCategories ${fleche} ${categoryc}`, true)
  .addField(`🎢 (${message.guild.roles.size}) Roles`, "Sorry, I can't display roles.", true)
  .addField(`😜 (${message.guild.emojis.size}) Emojis`, "Sorry, I can't display emotes.", true)
  .addField(`👨 ${mcount} Members`, `${DiscordHuman} Humans ${fleche} ${mhuman}\n${DiscordBot} Bots ${fleche} ${mbot}\n${DiscordOnline} Onlines ${fleche} ${monline}\n${DiscordIdle} Idle ${fleche} ${midle}\n${DiscordDnD} Do not Disturb (DnD) ${fleche} ${mdnd}\n${DiscordOffline}  ${fleche} ${moffline} Invisible or offline\n ${DiscordStream} Streamers ${fleche} ${mstreaming}`, true)
  .addBlankField(false)
  .addField("😴 AFK Parameters", `AFK channel ${fleche} ${AFKchan}\nAFK Timeout ${fleche} ${AFKtimeout}`, true)
  .addField("🔐 Modération parameters", `Verification level ${verificationLevels[message.guild.verificationLevel]}\nExplicit content level ${explicitcontentLevels[message.guild.explicitContentFilter]}`, true)
  message.channel.send(ServerInfoEmbed);
}

module.exports.help = {
    name: "server-info"
}
