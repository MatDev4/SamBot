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
  if(message.author.bot) return;
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("..")

  let f = misc.fleche
  let ON = misc.DiscordOnline
  let OFF = misc.DiscordOffline

  const SeeConfigEmbed = new Discord.RichEmbed()
  .setTitle(`.. ${message.guild.name}`)
  .setColor(botconfig.discordblue)
  .addField("#⃣ ..", `.. ${f} ..\n.. ${f} ..\n.. ${f} ..\n.. ${f} ..\n.. ${f} ..`, true)
  .addField("⚜ ..", `.. ${f} ..\n.. ${f} ..\n.. ${f} ..\n.. ${f} ..\n.. ${f} ..`, true)
  .addField("🚘 ..", `.. ${f} ..\n.. ${f} ..\n.. ${f} ..\n.. ${f} ..\n.. ${f} ..`, true)
  message.channel.send(SeeConfigEmbed);
}

module.exports.help = {
  name: "see-config"
}
