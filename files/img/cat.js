const Discord = require('discord.js');
const fs = require("fs");
let botconfig = require("../botconfig.json");
const client = new Discord.Client({disableEveryone: true});
superagent = require("superagent");
const lang = require('i18n');

var prefix = (botconfig.prefix)

module.exports.run = async (bot, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;

    let {body} = await superagent
        .get(`http://aws.random.cat/meow`);

    message.channel.send(body.file);
}

module.exports.help = {
    name: "cat"
}
