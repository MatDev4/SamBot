const Discord = require('discord.js');
const fs = require("fs");
let botconfig = require("../botconfig.json");
let misc = require("../misc.json");
const client = new Discord.Client({disableEveryone: true});
const lang = require('i18n');
//const superagent = require("superagent");

var prefix = (botconfig.prefix)


module.exports.run = async (bot, message, args) => {
	if (message.content.indexOf(prefix) !== 0) return;
	if (message.channel.type === "dm") return;
	if(message.author.bot) return;
	let uhlol = misc.uhlol
	let purple = botconfig.purple
	let blue = botconfig.discordblue

	    var resultats1 = [
	        "🎷  🎷  🎷 ",
	        "💸  💸  💸 ",
	        ":seven:  :seven:  :seven: ",
	        "🚀  🚀  🚀",
	        "🍔  🍔  🍔 ",
	        "💰  💰  💰 ",
	        "🎷  💰  :seven: ",
	        "💰  🚀  🚀",
	        "💰  💰  🍔 ",
	        "🎷  🎷  🍔",
	        "🎷  :seven:  :seven: ",
	        "💰  🚀  💸 ",
	        "💰  💰  🍔 ",
	        ":seven:  💰  💰 ",
	        "💰  💰  :seven: ",
	        "🎷  🎷  :seven: "
	    ];
	    let reponse1 = (resultats1[Math.floor(Math.random() * resultats1.length)])

	    var resultats2 = [
	        "🎷  🎷  🎷 ",
	        "💸  💸  💸 ",
	        ":seven:  :seven:  :seven: ",
	        "🚀  🚀  🚀 ",
	        "🍔  🍔  🍔 ",
	        "🎷  💰  :seven: ",
	        "💰  🚀  🚀",
	        "💰  💰  🍔 ",
	        "💰  💰  🍔",
	        "🎷  :seven:  :seven: ",
	        "💰  🚀  💸 ",
	        "💰  💰:  🍔 ",
	        ":seven:  💰  💰 ",
	        "💰  💰  :seven: ",
	        "🎷  🎷  :seven: ",
	        "🎷  🍔  🍔",
	        "🎷  🚀  💰"
	    ];
	    let reponse2 = (resultats2[Math.floor(Math.random() * resultats2.length)])
	    var resultats3 = [
	        "💸  💸  💸 ",
	        "🚀  🚀  🚀 ",
	        "🍔  🍔  🍔 ",
	        "💰  💰  💰 ",
	        "🎷  💰  :seven: ",
	        "💰  🚀  🚀 ",
	        "💰  💰  🍔 ",
	        "🎷  🎷  🍔",
	        "🎷  :seven:  :seven: ",
	        "💰  🚀  💸 ",
	        "💰  💰  🍔 ",
	        ":seven:  💰  💰 ",
	        "💰  💰  :seven: ",
	        "🎷  🎷  :seven: "
	    ];
    let reponse3 = (resultats3[Math.floor(Math.random() * resultats3.length)])


	    const CashMachineEmbed = new Discord.RichEmbed()
	    .setColor(blue)
	    .addField(`La machine à sous a été lancé ! ${uhlol}`, "** **")
	    .addField(`=============`, "** **")
	    .addField(`| ${reponse1}   |\n \n| ${reponse2}   | **<** \n \n| ${reponse3}    |`, `** **`)
		.addField(`=============`, "** **")
    message.channel.send(CashMachineEmbed)


}

module.exports.help = {
    name: "cash-machine"
}
