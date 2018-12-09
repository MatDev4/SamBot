const Discord = require('discord.js');
const fs = require("fs");
let botconfig = require("../botconfig.json");
let misc = require("../misc.json");
const lang = require('i18n');
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
  "brazil": `\`Brésil\` :flag_br:`,
  "eu-central": `\`Europe Centrale\` :flag_eu:`,
  "singapore": `\`Singapour\` :flag_sg:`,
  "us-central": `\`Centre des Etats-Unis\` :flag_us:`,
  "sydney": `\`Sydney\` :flag_au:`,
  "us-east": `\`Est des Etats-Unis\` :flag_us:`,
  "us-south": `\`Sud des Etats-Unis\` :flag_us:`,
  "us-west": `\`Ouest des Etats-Unis\` :flag_us:`,
  "eu-west": `\`Europe occidentale (Ouest)\` :flag_eu:`,
  "vip-us-east": `🌟 \`Localisation VIP\` 🌟`,
  "london": `\`Londres\` :flag_gb:`,
  "amsterdam": `\`Amsterdam\` :flag_nl:`,
  "hongkong": `\`Hong Kong\` :flag_hk:`,
  "russia": `\`Russie\` :flag_ru:`,
  "southafrica": `\`Afrique du Sud\` :flag_za:`
}
let month = {
  "1": "janvier",
  "2": "février",
  "3": "mars",
  "4": "avril",
  "5": "mai",
  "6": "juin",
  "7": "juillet",
  "8": "août",
  "9": "septembre",
  "10": "octobre",
  "11": "novembre",
  "12": "décembre"
}
let AFKchan;
let AFKtimeout;
if(message.guild.afkChannelID !== null) {
    AFKchan = `#${bot.channels.get(message.guild.afkChannelID).name}`
    AFKtimeout = `${message.guild.afkTimeout / 60} minutes`
} else {
    AFKchan = "Le salon d'AFK n'a pas été défini."
    AFKtimeout = "L'AFK n'est pas activé sur le serveur."
}
const explicitcontentLevels = [
  `**Ne pas analyser de messages.** ${f} Aucune fête n'égale les goûters de ma mamie.`,
  `**Analyse les messages des membres sans rôle.** ${f} Option recommandée pour les serveurs utilisant des rôles pour les membres de confiance.`,
  `**Analyse les messages envoyés par tous les membres.** ${f} Option recommandée lorsque vous voulez un nettoyage brillant.`
]
const verificationLevels = [
  `**Aucun** ${f} Aucune restriction`,
  `**Faible** ${f} Doit avoir un Email vérifié sur son compte Discord.`,
  `**Moyen** ${f} Doit aussi être inscrit sur Discord depuis plus de 5 minutes.`,
  `**(╯°□°）╯︵ ┻━┻** ${f} Doit aussi être un membre de ce serveur depuis plus de 10 minutes.`,
  `**┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻** ${f} Doit avoir un téléphone vérifié sur son compte Discord.`
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
  .addField("🐦 Nom du serveur", server.name, true)
  .addField("🆔 ID", server.id, true)
  .addField("🌐 Localisation", region[server.region], true)
  .addField("👑 Propriétaire", server.owner, true)
  .addField("📂 Créé le",`${CreateD[2]} ${month[server.createdAt.getMonth()]} ${CreateD[3]} à ${CreateD[4]}`, true)
  .addField("🚪 Vous avez rejoint le", `${JoinD[2]} ${month[server.joinedAt.getMonth()]} ${JoinD[3]} à ${JoinD[4]}`, true)
  .addField(`📣 (${server.channels.size}) Salons et catégories`, `Salons textuels ${fleche} ${textc}\nSalons vocaux ${fleche} ${voicec}\nCatégories ${fleche} ${categoryc}`, true)
  .addField(`🎢 (${message.guild.roles.size}) Rôles`, "Désolé, je ne peux pas afficher les rôles.", true)
  .addField(`😜 (${message.guild.emojis.size}) Emojis`, "Désolé, je ne peux pas afficher les émojis.", true)
  .addField(`👨 ${mcount} Membres`, `${DiscordHuman} Humains ${fleche} ${mhuman}\n${DiscordBot} Bots ${fleche} ${mbot}\n${DiscordOnline} Connectés ${fleche} ${monline}\n${DiscordIdle} Inactifs ${fleche} ${midle}\n${DiscordDnD} Ne pas déranger ${fleche} ${mdnd}\n${DiscordOffline} Invisibles ou déconnectés ${fleche} ${moffline}\n ${DiscordStream} Streamers ${fleche} ${mstreaming}`)
  .addBlankField(false)
  .addField("😴 AFK", `Salon d'AFK ${fleche} ${AFKchan}\nDélai d'AFK ${fleche} ${AFKtimeout}`, true)
  .addField("🔐 Modération", `Niveau de vérification ${verificationLevels[message.guild.verificationLevel]}\nAnalyse des messages ${explicitcontentLevels[message.guild.explicitContentFilter]}`, true)
  message.channel.send(ServerInfoEmbed);
}

module.exports.help = {
    name: "server-info"
}
