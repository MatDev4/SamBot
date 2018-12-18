const Discord = require('discord.js');
const fs = require("fs");
let botconfig = require("../botconfig.json");
let misc = require("../misc.json");
const client = new Discord.Client({disableEveryone: true});
const i18n = require('i18n');
//const superagent = require("superagent");

var prefix = (botconfig.prefix)


module.exports.run = async (bot, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;
    let f = misc.fleche
    let logsChannel = message.guild.channels.find(`name`, "sam-logs");

    const PurgeFinishEmbed = new Discord.RichEmbed()
    .setTitle('Purge effectée !')
    .setColor("#ef214e")
    .addField("📣 Salon", message.channel.name, true)
    .addField("🛑 Modérateur", message.author.tag, true)
    .setFooter('Les messages vieux de 14 jours ne peuvent être supprimés, c\'est Discord qui me l\'a dit !')

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous n'avez pas la permission `MANAGE_MESSAGES` pour utiliser cette commande.");

    if(isNaN(args[0])) return message.channel.send("Merci d'indiquer un nombre uniquement.");
    if (!args[0]) return message.channel.send("Merci d'indiquer un nombre compris en 2 et 100.");
    if (args[0] < 2) return message.channel.send("Merci d'indiquer un nombre compris en 2 et 100.");
    if (args[0] > 100) return message.channel.send("Merci d'indiquer un nombre compris en 2 et 100.");

    message.delete()
    message.channel.bulkDelete(args[0])

    if(!logsChannel) { message.channel.send("N'ayant pas trouvé un salon nommé `sam-logs`, je vous envoie le justificatif ici. N'hésitez pas à créer un salon nommé `sam-logs` !").then(async msg => {
        await msg.react('498522777523847168')
        await message.channel.send(PurgeFinishEmbed)
    })
    } else {
        logsChannel.send(PurgeFinishEmbed)
    }
}

module.exports.help = {
    name: "purge"
}
