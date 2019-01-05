const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const Config = require('../../Utilities/Config.json');
const Misc = require('../../Utilities/Misc.json');

var prefix = (Config.Prefix)


module.exports.run = async (bot, message, args) => {
	if (message.content.indexOf(prefix) !== 0) return;
	if (message.channel.type === "dm") return;
	if(message.author.bot) return;
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
	    .setColor(Config.Colors.Blue)
	    .setTitle("The slot-machine has been launched!")
	    .addField(`=============`, "** **")
	    .addField(`| ${reponse1}   |\n \n| ${reponse2}   | **<** \n \n| ${reponse3}    |`, `** **`)
			.addField(`=============`, "** **")
    	message.channel.send(CashMachineEmbed)
}

module.exports.help = {
    name: "slot-machine"
}
