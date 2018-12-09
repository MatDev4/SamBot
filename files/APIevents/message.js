const client = require("discord.js");
const botconfig = require('../botconfig.json')
const prefix = botconfig.prefix;

module.exports = (bot, message) => {

    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;
}