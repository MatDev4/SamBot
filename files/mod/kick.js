const Discord = require('discord.js');
const fs = require("fs");
let botconfig = require("../botconfig.json");
let misc = require("../misc.json");
const i18n = require('i18n');
const client = new Discord.Client({disableEveryone: true});
//const superagent = require("superagent");

var prefix = (botconfig.prefix)
let f = misc.fleche


module.exports.run = async (bot, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Vous ne pouvez pas utiliser cette commande !");

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Merci de mentionner un membre sur le serveur !");
    let kReason = args.join(" ").slice(22);
    if(!kReason) kReason = `${kUser.user.username} a été éjecté(e) par ${message.author.tag} sans donner de raison.`
    if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("Je ne peux pas kick cette personne...");

    const SanctionEmbedKick = new Discord.RichEmbed()
    .setTitle('Utilisateur sanctionné')
    .setDescription("La sanction est un kick !")
    .setColor("#ef214e")
    .setTimestamp()
    .addField("🔤 Pseudonyme", bUser.user.tag, true)
    .addField("🆔 ID", bUser.id, true)
    .addField("📣 Salon", message.channel.name, true)
    .addBlankField(false)
    .addField("🛑 Modérateur", message.author.tag)
    .addField("🙀 Raison", bReason)

    let kickChannel = message.guild.channels.find(`name`, "sam-logs");
    if(!kickChannel) { message.channel.send("N'ayant pas trouvé un salon nommé `sam-logs`, je vous envoie le justificatif ici. N'hésitez pas à créer un salon nommé `sam-logs` !").then(async msg => {
        await msg.react('498522777523847168')
        await message.channel.send(SanctionEmbedKick)
    })
    } else {
        kickChannel.send(SanctionEmbedKick)
        }
    message.guild.member(kUser).kick(kReason);
};

module.exports.help = {
    name: "kick"
}
