const client = require("discord.js");
const botconfig = require('../botconfig.json')
const prefix = botconfig.prefix;

module.exports = (client, message) => {

    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;
    //if(!client.hasPermission("EMBED_LINKS")) return message.channel.send("**Hum... I'm sorry, but I can't do anything without the required permissions! *(Embed links, Attach files...)***");
    //if(!client.hasPermission("ATTACH_FILES")) return message.channel.send("**Hum... I'm sorry, but I can't do anything without the required permissions! *(Embed links, Attach files...)***");
}
