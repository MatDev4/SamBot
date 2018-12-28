const Discord = require('discord.js');
const fs = require("fs");
let botconfig = require("../botconfig.json");
let misc = require("../misc.json");
const i18n = require('i18n');
const client = new Discord.Client({disableEveryone: true});
//const superagent = require("superagent");

var prefix = (botconfig.prefix)
let f = misc.fleche


module.exports.run = async (bot, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;
    //if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send("**Hum... I'm sorry, but I can't ban if I don't have the required permission! *(Ban members)***");

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You are not allowed to ban! *(BAN_MEMBERS)*");

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Please indicate the user to be banned! *(You don't have to mention it). *");
    let bReason = args.join(" ").slice(22);
    if(!bReason) bReason = `${bUser.user.tag} has been banned by ${message.author.tag} without giving a reason.`
    if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("I'm sorry but I can't ban a moderator!");

    const SanctionEmbedBan = new Discord.RichEmbed()
    .setTitle('- BAN -')
    .setDescription("A member has been banned!")
    .setColor(botconfig.bancolor)
    .setTimestamp()
    .addField("🔤 Username", bUser.user.tag, true)
    .addField("🆔 ID", bUser.id, true)
    .addField("📣 Channel", message.channel.name, true)
    .addBlankField(false)
    .addField("🛑 Moderator", message.author.tag)
    .addField("🙀 Reason", bReason)

/*if(bUser){
  message.delete()
  message.guild.member(bUser).ban(bReason).then(async notused => {
    let banChannel = message.guild.channels.find(ch => ch.name === 'sam-logs');
    if(!banChannel) { message.channel.send("Having not found a salon named `sam-logs`, I send you the proof here. Feel free to create a lounge called `sam-logs`!").then(async msg => {
        await msg.react('498522777523847168')
        await message.channel.send(SanctionEmbedBan)
    })
    } else {
        banChannel.send(SanctionEmbedBan)
        }
  })
}.catch(err => {
  message.channel.send("**Hum... I'm sorry, but I can't ban if I don't have the required permission! *(Ban members)***")
})*/
if (member) {
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
