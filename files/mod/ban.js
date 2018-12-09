const Discord = require('discord.js');
const fs = require("fs");
let botconfig = require("../botconfig.json");
let misc = require("../misc.json");
const lang = require('i18n');
const client = new Discord.Client({disableEveryone: true});
//const superagent = require("superagent");

var prefix = (botconfig.prefix)
let f = misc.fleche


module.exports.run = async (bot, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;
        
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Vous ne pouvez pas utiliser cette commande !");
    
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Merci de mentionner un membre sur le serveur !");
    let bReason = args.join(" ").slice(22);
    if(!bReason) bReason = `${bUser.user.username} a été banni(e) par ${message.author.tag} sans donner de raison.`
    if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("Je ne peux pas bannir cette personne...");

    const SanctionEmbedBan = new Discord.RichEmbed()
    .setTitle('Utilisateur sanctionné')
    .setDescription("La sanction est un __BAN__ !")
    .setColor("#ef214e")
    .setTimestamp()
    .addField("Utilisateur sanctionné :", `Pseudonyme et ID ${f} \`${bUser.user.username}\` *(${bUser.id})*\nSanction effectuée le \`${message.createdAt}\`\nRaison ${f} \`${bReason}\``, true)
    .addField("Modérateur :", `Pseudonyme et ID ${f} \`${message.author.tag}\` *(${message.author.id})*\nA sanctionné dans \`${message.channel.name}\``, true)
    .setFooter('Sanction effectuée avec succès !')

    const SanctionnéEmbedBan = new Discord.RichEmbed()
    .setTitle(`Sanctionné(e)`)
    .setThumbnail('https://www.tenor.co/ysMW.gif ')
    .setDescription(`Vous avez été sanctionné(e) sur le serveur __${message.guild.name}__`)
    .addField('BAN', bReason)
    .setColor("#ef214e")
    .setTimestamp()
    .setFooter('Merci de lire le règlement !')

    let banChannel = message.guild.channels.find(`name`, "sam-logs");
    if(!banChannel) { message.channel.send("N'ayant pas trouvé un salon nommé `sam-logs`, je vous envoie le justificatif ici. N'hésitez pas à créer un salon nommé `sam-logs` !").then(async msg => {
        await msg.react('498522777523847168')
        await message.channel.send(SanctionEmbedBan)
    })
    } else {
        banChannel.send(SanctionEmbedBan)
        }

    message.client.users.get(bUser.id).send(SanctionnéEmbedBan)
    message.guild.member(bUser).ban(bReason);
};

module.exports.help = {
    name: "ban"
}
