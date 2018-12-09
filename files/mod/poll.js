const Discord = require('discord.js');
const fs = require("fs");
let botconfig = require("../botconfig.json");
let misc = require("../misc.json");
const client = new Discord.Client({disableEveryone: true});
const lang = require('i18n');
//const superagent = require("superagent");

var prefix = (botconfig.prefix)

let SamSearch = misc.SamSearch
let orange = botconfig.orange
let blue = botconfig.discordblue


module.exports.run = async (bot, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission `MANAGE_MESSAGE` pour utiliser cette commande.");;
  	

    message.delete()

      if (!args[0]) return message.channel.send("Quelle est votre question ?");

      const PollEmbed = new Discord.RichEmbed()
          .setColor(blue)
          .setAuthor(message.author.username, message.author.avatarURL)
          .setDescription(args.join(' '))
      message.channel.send(PollEmbed).then(async msg => {
        await msg.react('491970628681728000'),
        await msg.react('🤷'),
        await msg.react('491970628627202049')
  })
  }




module.exports.help = {
    name: "poll"
}
