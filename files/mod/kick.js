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
    if(!client.hasPermission("KICK_MEMBER")) return message.channel.send("**Hum.... I'm sorry, but I can't kick if I don't have the required permission! *(Kick members)***");

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You are not allowed to kick! *(KICK_MEMBERS)*");

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Please indicate the user to be kicked! *(You don't have to mention it).*");
    let kReason = args.join(" ").slice(22);
    if(!kReason) kReason = `${kUser.user.tag} has been kicked by ${message.author.tag} without giving a reason.`
    if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("I'm sorry but I can't kick a moderator!");

    const SanctionEmbedKick = new Discord.RichEmbed()
    .setTitle('- KICK -')
    .setDescription("A member has been kicked!")
    .setColor(botconfig.kickcolor)
    .setTimestamp()
    .addField("🔤 Username", kUser.user.tag, true)
    .addField("🆔 ID", kUser.id, true)
    .addField("📣 Channel", message.channel.name, true)
    .addBlankField(false)
    .addField("🛑 Moderateur", message.author.tag)
    .addField("🙀 Reason", kReason)

    let kickChannel = message.guild.channels.find(ch => ch.name === 'sam-logs');
    if(!kickChannel) { message.channel.send("Having not found a salon named `sam-logs`, I send you the proof here. Feel free to create a lounge called `sam-logs`!").then(async msg => {
        await msg.react('498522777523847168')
        await message.channel.send(SanctionEmbedKick)
    })
    } else {
        kickChannel.send(SanctionEmbedKick)
        }
    message.delete()
    message.guild.member(kUser).kick(kReason);
};

module.exports.help = {
    name: "kick"
}
