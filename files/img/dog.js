const Discord = require('discord.js');
const fs = require("fs");
let botconfig = require("../botconfig.json");
const client = new Discord.Client({disableEveryone: true});
const superagent = require("superagent");
const lang = require('i18n');

var prefix = (botconfig.prefix)

module.exports.run = async (bot, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;

    let {body} = await superagent
        .get(`https://random.dog/woof.json`);
    message.channel.send(body.url);
}

module.exports.help = {
    name: "dog"
}
