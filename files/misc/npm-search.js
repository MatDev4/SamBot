const Discord = require('discord.js');
const fs = require("fs");
let botconfig = require("../botconfig.json");
let misc = require("../misc.json");
const client = new Discord.Client({disableEveryone: true});
const i18n = require('i18n');
const snekfetch = require('snekfetch');
const humanizeduration = require('humanize-duration')
//const superagent = require("superagent");

var prefix = (botconfig.prefix)

let SamSearch = misc.SamSearch


module.exports.run = async (bot, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;
    if (args.length > 0) {
        snekfetch.get("https://skimdb.npmjs.com/registry/" + args[0].toLowerCase()).then((body) => {
          const NPMEmbed = new Discord.RichEmbed()
          .setColor(botconfig.discordblack)
          //.setThumbmail('http://blog.oxiane.com/wp-content/uploads/2017/02/npm-logo-300x163.png')
          .setTitle(body.body.name)
          .setDescription(body.body.description)
          .addField("Author", body.body.author.name, true)
          .addField("Latest", body.body["dist-tags"].latest, true)
          .addField("Git repository", ((body.body.repository) ? body.body.repository.url.replace("git+", "").replace(".git", "").replace("git://", "https://").replace("git@github.com:", "https://github.com/") : "Aucun Git"))
          .addField("Maintainers", body.body.maintainers.map((m) => m.name).join(", "), true)
          .addField("Update", humanizeduration(Date.now() - new Date(body.body.time[body.body["dist-tags"].latest]).getTime(), {
            round: true,
            largest: 2
          }), true)

            message.channel.send(NPMEmbed)
        })
    }
}


module.exports.help = {
    name: "npm-search"
}
