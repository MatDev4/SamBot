const Discord = require('discord.js');
const figlet = require('figlet');
const fs = require("fs");
const client = new Discord.Client({disableEveryone: true});
const Config = require('../../Utilities/Config.json');
const Misc = require('../../Utilities/Misc.json');

var prefix = (Config.Prefix)


module.exports.run = async (bot, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;

      if(args.join(' ').length > 12) return message.channel.send("Please do not enter more than 12 characters.")
      if (!args.join(' ')) return message.channel.send("Please indicate what you want to transform into ASCII format.")
        figlet(args.join(' '), (err, data) => {
          message.channel.send('```' + data + '```')
        })

}

module.exports.help = {
    name: "ascii"
}
