const Discord = require('discord.js');
const fs = require("fs");
const botconfig = require("../botconfig.json");
let misc = require("../misc.json");
const client = new Discord.Client({disableEveryone: true});
const lang = require('i18n')
//const superagent = require("superagent");

var prefix = (botconfig.prefix)


module.exports.run = async (bot, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;
    let blue = botconfig.discordblue

    if (!args[2]) return message.channel.send("Merci d'indiquer la question à poser.");
    let answer = ["Non !", "Oui !", "Possible...", "Chut ! Je ne peux pas me concentrer...", "JAMAIS !", "Ouiii", "Nooooooooon !"]
    let result = Math.floor((Math.random() * answer.length));

    let question = args.slice().join(" ");

    let BallEmbed = new Discord.RichEmbed()
    .setColor(blue)
    .setTitle(`🎱 ${message.author.username} a demandé`)
    .setDescription(`\`${question}\``)
    .addField("Ma boule de cristal m'indique que...", `\`${answer[result]}\``)
    message.channel.send(BallEmbed)
}

module.exports.help = {
    name: "8ball"
}
