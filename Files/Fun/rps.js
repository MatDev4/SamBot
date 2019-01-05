const Discord = require('discord.js');
const fs = require("fs");
const client = new Discord.Client({disableEveryone: true});

const Config = require('../../Utilities/Config.json');
const Misc = require('../../Utilities/Misc.json');

var prefix = (Config.Prefix)

module.exports.run = async (client, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if (message.author.bot) return;

    let rockr = ["Paper, I won!", "Scissors, you won..."]
    let rockc = Math.floor(Math.random() * rockr.length);
    let paperr = ["Rock, you won...", "Scissors, I won!"]
    let paperc = Math.floor(Math.random() * paperr.length);
    let scissorsr = ["Rock, I won!", "Paper, you won..."]
    let scissorsc = Math.floor(Math.random() * scissorsr.length);
    let RockEmbed = new Discord.RichEmbed()
        .setAuthor("Rock, paper, Scissors")
        .setColor(Config.Colors.Blue)
        .addField("You choosed...", "Rock ✊", true)
        .addField("I choosed...", rockr[rockc], true)
    let PaperEmbed = new Discord.RichEmbed()
        .setAuthor("Rock, paper, Scissors")
        .setColor(Config.Colors.Blue)
        .addField("You choosed...", "Paper ✋", true)
        .addField("I choosed...", paperr[paperc], true)
    let ScissorsEmbed = new Discord.RichEmbed()
        .setAuthor("Rock, paper, Scissors")
        .setColor(Config.Colors.Blue)
        .addField("You choosed...", "Scissors ✌", true)
        .addField("I choosed...", scissorsr[scissorsc], true)
    message.channel.send("Go ahead, choose a reaction! *(If there are none, make sure I have permission to add reactions)*.").then(async msg => {
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
    "name": "rps"
}
