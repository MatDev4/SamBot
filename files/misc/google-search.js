const Discord = require('discord.js');
const fs = require("fs");
let botconfig = require("../botconfig.json");
let misc = require("../misc.json");
const client = new Discord.Client({disableEveryone: true});
const i18n = require('i18n');
const google = require('google')
//const superagent = require("superagent");

var prefix = (botconfig.prefix)

let SamSearch = misc.SamSearch


module.exports.run = async (bot, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;

    //Parameters = Google
    google.resultsPerPage = 1
    google.protocol = 'https'
    var nextCounter = 0

    google(args, function (err, res) {
      if (err) console.log(err);

      for (var i = 0; i < res.links.length; ++i) {
        var link = res.links[i];
        if (link.title == null) {
        return void(0)
      }
        if (link.href == null)    {
        return void(0)
      }
        const GoogleEmbed = new Discord.RichEmbed()
          .setTitle(link.title)
          .setDescription(link.description)
          .setURL(link.href)
          .setColor(botconfig.discordblack)
          .setFooter("Click on the blue text to access the site")

          message.channel.send(GoogleEmbed);
      }

      if (nextCounter < 1) {
        nextCounter += 1
        if (res.next) res.next()
      }

    });
}


module.exports.help = {
    name: "google-search"
}
