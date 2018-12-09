const Discord = require('discord.js');
const snekfetch = require("snekfetch");
const fs = require("fs");
let botconfig = require("../botconfig.json");
let misc = require("../misc.json");
const lang = require('i18n');
const client = new Discord.Client({disableEveryone: true});
//const superagent = require("superagent");

var prefix = (botconfig.prefix)


module.exports.run = async (bot, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;

    if (args.join(' ').length > 30) {
        message.channel.send("Merci de ne pas dépasser 30 caractères.")
    } else {
    snekfetch.get("http://cowsay.morecode.org/say?message=" + encodeURIComponent(args.join(" ")) + "&format=json").then((body) => {
        message.channel.send(` \`\`\`\n${body.body.cow}\`\`\``)
        });
    }
}

module.exports.help = {
    name: "cowsay"
}
