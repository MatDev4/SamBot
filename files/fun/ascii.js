const Discord = require('discord.js');
const figlet = require('figlet');
const fs = require("fs");
let botconfig = require("../botconfig.json");
let misc = require("../misc.json");
const i18n = require('i18n');
const client = new Discord.Client({disableEveryone: true});

//const superagent = require("superagent");

var prefix = (botconfig.prefix)


module.exports.run = async (bot, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;
    let orange = botconfig.orange
    let blue = botconfig.discordblue

      if(args.join(' ').length > 12) return message.channel.send(i18n.t('ASCII.TooManyCharacters'))
      if (!args.join(' ')) return message.channel.send(i18n.t('ASCII.NoArgs'))
        figlet(args.join(' '), (err, data) => {
          message.channel.send('```' + data + '```')
        })

}

module.exports.help = {
    name: "ascii"
}
