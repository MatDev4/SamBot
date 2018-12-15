const Discord = require('discord.js');
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
	let uhlol = misc.uhlol
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
	    .setTitle(i18n.t('cash-machine'))
	    .addField(`=============`, "** **")
	    .addField(`| ${reponse1}   |\n \n| ${reponse2}   | **<** \n \n| ${reponse3}    |`, `** **`)
			.addField(`=============`, "** **")
    	message.channel.send(CashMachineEmbed)


}

module.exports.help = {
    name: "cash-machine"
}
