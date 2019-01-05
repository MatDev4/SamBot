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

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You are not allowed to kick! *(KICK_MEMBERS)*");

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Please indicate the user to be kicked! *(You don't have to mention it).*");
    let kReason;
    let kReason2 = args.join(" ").slice(22);
    if(!kReason2) kReason = `${kUser.user.tag} has been kicked by ${message.author.tag} without giving a reason.`
    if(kReason2) kReason = `${kUser.user.tag} has been kicked by ${message.author.tag} with the reason "${kReason2}".`
    if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("I'm sorry but I can't kick a moderator!");

    const SanctionEmbedKick = new Discord.RichEmbed()
    .setTitle('- KICK -')
    .setDescription("A member has been kicked!")
    .setColor(Config.Colors.Orange)
    .addField("🔤 Username", kUser.user.tag, true)
    .addField("🆔 ID", kUser.id, true)
    .addField("📣 Channel", message.channel.name, true)
    .addBlankField(false)
    .addField("🛑 Moderator", message.author.tag)
    .addField("🙀 Reason", kReason)
    .setTimestamp()
    .setFooter(Config.EmbedFooter)

    if (kUser) {
      message.guild.member(kUser).kick(kReason).then(async notused => {
        let kickChannel = message.guild.channels.find(ch => ch.name === 'sam-logs');
        if(!kickChannel) {
         message.channel.send("Having not found a salon named `sam-logs`, I send you the proof here. Feel free to create a lounge called `sam-logs`!").then(async msg => {
          await msg.react('498522777523847168')
          await message.channel.send(SanctionEmbedKick)
         })
        } else {
          kickChannel.send(SanctionEmbedKick)
            }
            }).catch(err => {
              message.reply("**Hum... I'm sorry, but I can't kick if I don't have the required permission! *(Kick members)***");
            });
          }

};

module.exports.help = {
    name: "kick"
}
