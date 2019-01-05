const Discord = require('discord.js');
const fs = require("fs");
const client = new Discord.Client({disableEveryone: true});
const Config = require('../../Utilities/Config.json');
const Misc = require('../../Utilities/Misc.json');

var prefix = (Config.Prefix)


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
let GTS = Misc.Characters.GTS
let DOnline = Misc.Emotes.Online
let DIdle = Misc.Emotes.Idle
let DDnD = Misc.Emotes.DnD
let DOffline = Mosc.Emotes.Offline
let DStreaming = Misc.Emotes.Streaming
let server = message.guild;

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
    "1": "January",
    "2": "February",
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
const ECL = [
  "**1**/3",
  "**2**/3",
  "**3**/3"
]
const VL = [
  "None",
  "Low",
  "Medium",
  "(╯°□°）╯︵ ┻━┻",
  "┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻"
]
let e;
let emotesd;
let i = 0;
server.emojis.map((e) => {
    if(!(i > 12)) emotesd += e.toString().join(" ¦ ");
    i++;
});
if(server.emojis.size > 12) {r = emotesd += " and more..."} else {e = emotesd}


let r;
let rolesd;
let z = 0;
server.roles.map((a) => {
    if(!(z > 9)) rolesd += a.toString().join(" ¦ ");
    z++;
});
if(server.roles.size > 9) { r = rolesd += " and more..." } else { r= rolesd}

let CreateD = message.guild.createdAt.toString().split(' ');
let JoinD = message.member.joinedAt.toString().split(' ');

  const ServerInfoEmbed = new Discord.RichEmbed()
  .setTitle(server.name)
  .setColor(Config.Colors.Blue)
  .setThumbnail(server.iconURL)
  .setFooter(Config.EmbedFooter)
  .addField("👑 - Owner", server.owner, true)
  .addField("🆔 - ID", server.id, true)
  .addField("🌐 - Region", region[server.region])
  .addField("😴 - AFK Parameters", `AFK channel ${fleche} ${AFKchan}\nAFK Timeout ${fleche} ${AFKtimeout}`, true)
  .addField("🔐 - Verification level", VL[server.verificationLevel])
  .addField("🛡 - Explicit Content filter", ECL[server.explicitContentFilter], true)
  .addField("📂 - Created on",`${CreateD[2]} ${month[server.createdAt.getMonth()]} ${CreateD[3]} at ${CreateD[4]}`)
  .addField("🚪 - You have joined at", `${JoinD[2]} ${month[server.joinedAt.getMonth()]} ${JoinD[3]} at ${JoinD[4]}`, true)
  .addField(`📣 - (${server.channels.size}) Channels`, `Textual lounges ${GTS} __${textc}__\nVoice lounges ${GTS} __${voicec}__\nCategories ${GTS} __${categoryc}__`)
  .addField(`👨 - (${mcount}) Members`, `__${mhuman}__ Humans, __${mbot}__ Bots\n${DOnline} Online ${GTS} __${monline}__\n${DIdle} Idle ${GTS} __${midle}__\n${DDnD} DnD ${GTS} __${mdnd}__\n${DOffline} Offline ${GTS} __${moffline}__\n ${DStreaming} Streaming ${GTS} __${mstreaming}__`, true)
  .addField(`🎢 - (${message.guild.roles.size}) Roles`, e, true)
  .addField(`😜 - (${message.guild.emojis.size}) Emojis`, r, true)
  message.channel.send(ServerInfoEmbed);
}

module.exports.help = {
    name: "server-info"
}
