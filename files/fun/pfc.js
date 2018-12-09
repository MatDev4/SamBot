const Discord = require('discord.js');
const fs = require("fs");
let botconfig = require("../botconfig.json");
let misc = require("../misc.json");
let cmdh = require("../cmdh.json");
const client = new Discord.Client({disableEveryone: true});

var prefix = (botconfig.prefix)

module.exports.run = async (client, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if (message.author.bot) return;

    let dark = botconfig.discordblack

    let rockr = ["Feuille, j'ai gagné !", "Ciseaux, tu as gagné ..."]
    let rockc = Math.floor(Math.random() * rockr.length);

    let paperr = ["Pierre, tu as gagné ...", "Ciseaux, j'ai gagné !"]
    let paperc = Math.floor(Math.random() * paperr.length);

    let scissorsr = ["Pierre, j'ai gagné !", "Papier, tu as gagné ..."]
    let scissorsc = Math.floor(Math.random() * scissorsr.length);

    let RockEmbed = new Discord.RichEmbed()
        .setAuthor("Pierre, feuille, ciseaux")
        .setColor(dark)
        .addField("Tu as choisi", `Pierre ✊`, true)
        .addField("J'ai choisi", rockr[rockc], true)

    let PaperEmbed = new Discord.RichEmbed()
        .setAuthor("Pierre, feuille, ciseaux")
        .setColor(dark)
        .addField("Tu as choisi", `Feuille ✋`, true)
        .addField("J'ai choisi", paperr[paperc], true)

    let ScissorsEmbed = new Discord.RichEmbed()
        .setAuthor("Pierre, feuille, ciseaux")
        .setColor(dark)
        .addField("Tu as choisi", `Ciseaux ✌`, true)
        .addField("J'ai choisi", scissorsr[scissorsc], true)

    message.channel.send("Vas-y, choisis une réaction *(pierre | feuille | ciseaux)* ! Ne t'inquiète pas, je ne regarde pas.").then(async msg => {
        await msg.react('✊')
        await msg.react('✋')
        await msg.react('✌')

        const PFCCollector = msg.createReactionCollector((reaction, user) => user.id === message.author.id);
        PFCCollector.on('collect', async (reaction) => {
            if (reaction.emoji.name === "✊") {
                msg.delete()
                message.channel.send(RockEmbed)
            }
            if (reaction.emoji.name === "✋") {
                msg.delete()
                message.channel.send(PaperEmbed)
            }
            if (reaction.emoji.name === "✌") {
                msg.delete()
                message.channel.send(ScissorsEmbed)
            }
        })
    })
}

module.exports.help = {
    "name": "pfc"
}