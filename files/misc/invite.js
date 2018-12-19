const Discord = require('discord.js');
const fs = require("fs");
let botconfig = require("../botconfig.json");
let misc = require("../misc.json");
const i18n = require('i18n');
const client = new Discord.Client({disableEveryone: true});

var prefix = (botconfig.prefix)
let SamDM = misc.SamDM



module.exports.run = async (bot, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;
    let orange = botconfig.orange
    let blue = botconfig.discordblue

    const InviteEmbed = new Discord.RichEmbed()
    .setTitle("Invite SamBot")
    .setColor(blue)
    .addField("Click on the link below", `[SamBot](${botconfig.invitelink})`)
  message.channel.send(InviteEmbed)
}

module.exports.help = {
    name: "invite"
}
