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

    let muser = message.mentions.users.first() || message.author;
    const AvatarEmbed = new Discord.RichEmbed()
    .setColor(Config.Colors.Blue)
    .setTitle(`${muser.username} avatar`)
    .setDescription(`Download: [> LINK](${muser.avatarURL})`)
    .setImage(muser.avatarURL)
    .setTimestamp()
    .setFooter(Config.EmbedFooter)
    message.channel.send(AvatarEmbed)
}

module.exports.help = {
    name: "avatar"
}
