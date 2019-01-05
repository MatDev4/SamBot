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

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You are not allowed to ban! *(BAN_MEMBERS)*");

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Please indicate the user to be banned! *(You don't have to mention it).*");
    let bReason;
    let bReason2 = args.join(" ").slice(22);
    if(!bReason2) bReason = `${bUser.user.tag} has been banned by ${message.author.tag} without giving a reason.`
    if(bReason2) bReason = `${bUser.user.tag} has been banned by ${message.author.tag} with the reason "${bReason2}".`
    if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("I'm sorry but I can't ban a moderator!");

    const SanctionEmbedBan = new Discord.RichEmbed()
    .setTitle('- BAN -')
    .setDescription("A member has been banned!")
    .setColor(Config.Colors.Red)
    .addField("🔤 Username", bUser.user.tag, true)
    .addField("🆔 ID", bUser.id, true)
    .addField("📣 Channel", message.channel.name, true)
    .addBlankField(false)
    .addField("🛑 Moderator", message.author.tag)
    .addField("🙀 Reason", bReason)
    .setTimestamp()
    .setFooter(Config.EmbedFooter)

if (bUser) {
  message.guild.member(bUser).ban(bReason).then(async notused => {
    let banChannel = message.guild.channels.find(ch => ch.name === 'sam-logs');
    if(!banChannel) {
     message.channel.send("Having not found a salon named `sam-logs`, I send you the proof here. Feel free to create a lounge called `sam-logs`!").then(async msg => {
      await msg.react('498522777523847168')
      await message.channel.send(SanctionEmbedBan)
     })
    } else {
      banChannel.send(SanctionEmbedBan)
        }
        }).catch(err => {
          message.reply("**Hum... I'm sorry, but I can't ban if I don't have the required permission! *(Ban members)***");
        });
      }
};

module.exports.help = {
    name: "ban"
}
