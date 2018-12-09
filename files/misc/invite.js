const Discord = require('discord.js');
const fs = require("fs");
let botconfig = require("../botconfig.json");
let misc = require("../misc.json");
const lang = require('i18n');
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
    .setTitle("Inviter SamBot")
    .setColor(blue)
    .addField("Cliquez sur les liens ci-dessous", `[SamBot](${botconfig.invitelink})\n[SamBot, sans permission](${botconfig.noperminvitelink})`)
  message.channel.send(InviteEmbed)
}

module.exports.help = {
    name: "invite"
}
