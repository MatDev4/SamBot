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
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You are not allowed to use these command! *(MANAGE_MESSAGE)*");;


      if (!args[0]) return message.channel.send("Please indicate a question to ask!");

      const PollEmbed = new Discord.RichEmbed()
      .setTimestamp()
      .setFooter(Config.EmbedFooter)
      .setColor(Config.Colors.Blue)
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
