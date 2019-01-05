const Discord = require('discord.js');
const fs = require("fs");
const client = new Discord.Client({disableEveryone: true});
const google = require('google');
const Config = require('../../Utilities/Config.json');
const Misc = require('../../Utilities/Misc.json');

var prefix = (Config.Prefix)

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
          .setColor(Config.Colors.Blue)
          .setTimestamp()
          .setFooter(Config.EmbedFooter)

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
