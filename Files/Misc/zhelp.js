const Discord = require('discord.js');
const fs = require("fs");
const client = new Discord.Client({disableEveryone: true});
const Config = require('../../Utilities/Config.json');
const Misc = require('../../Utilities/Misc.json');
const List = require('../../Utilities/List.json');

var prefix = (Config.Prefix)

module.exports.run = async (client, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;

    let ON = Misc.Emotes.Online
    let OFF = Misc.Emotes.Offline
    let WIP = Misc.Emotes.Idle
    let f = Misc.Characters.GTS

    const HelpEmbed = new Discord.RichEmbed()
    .setColor(Config.Colors.Blue)
    .setFooter(Config.EmbedFooter)
    .setTimestamp()
    .setTitle(Config.Client.Tag)
    .setDescription(`Welcome on the SamBot's documention\n My prefix is actually __**${botconfig.prefix}**__\n${ON} ${f} Functional unit ${WIP} ${f} Unit under development, risk of bugs${OFF} ${f} Unusable unit`)
    .addField(`${ON} - 🍪 Fun`, List.Fun)
    .addField(`${ON} - 🔨 Tools`, List.Tools)
    .addField(`${ON} - 🎭 Miscellaneous`, List.Misc)
    .addField(`${OFF} - 📸 Images`, List.Img)
    .addField(`${WIP} - 🛑 Moderation`, List.Mod)
    .addField(`${ON} - 🔐 Reserved commands`, List.botAdmin)
    .addField("🎫 Links", `${Misc.Links.Invite.Normal} | ${Misc.Links.Discord} | ${Misc.Links.DBL}`)

  message.channel.send(HelpEmbed)
}

module.exports.help = {
    name: "help"
}
