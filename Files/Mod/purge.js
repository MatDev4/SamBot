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
    let logsChannel = message.guild.channels.find(ch => ch.name === 'sam-logs');


    const PurgeFinishEmbed = new Discord.RichEmbed()
    .setTitle('- PURGE -')
    .setColor(Config.Colors.Purple)
    .addField("📣 Channel", message.channel.name, true)
    .addField("🛑 Moderator", message.author.tag, true)
    .setTimestamp()
    .setFooter(Config.EmbedFooter)

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You are not allowed to use these command! *(MANAGE_MESSAGE)*");

    if (args[0]) {
      if(isNaN(args[0])) return message.channel.send("Please indicate a number only.");
      if (!args[0]) return message.channel.send("Please indicate a number between 2 and 100.");
      if (args[0] < 2) return message.channel.send("Please indicate a number between 2 and 100.");
      if (args[0] > 100) return message.channel.send("Please indicate a number between 2 and 100.");
      message.delete()
      message.channel.bulkDelete(args[0]).then (async notused => {
        if(!logsChannel) { message.channel.send("Having not found a salon named `sam-logs`, I send you the proof here. Feel free to create a lounge called `sam-logs`!").then(async msg => {
            await msg.react('498522777523847168')
            await message.channel.send(PurgeFinishEmbed).then (notused => {
              message.channel.send('Messages that are 14 days old cannot be deleted, Discord told me so!')
            })
        })
        } else {
            logsChannel.send(PurgeFinishEmbed).then (notused => {
              logsChannel.send('Messages that are 14 days old cannot be deleted, Discord told me so!')
            })
        }
      }).catch(err => {
        message.reply("**Hum... I'm sorry, but I can't delete messages without permission! *(Manage messages)***")
        message.channel.send("**PROTIP:** Messages that are 14 days old cannot be deleted, Discord told me so!")
      })
    }
};

module.exports.help = {
    name: "purge"
}
