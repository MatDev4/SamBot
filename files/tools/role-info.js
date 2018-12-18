const Discord = require('discord.js');
const fs = require("fs");
let botconfig = require("../botconfig.json");
let misc = require("../misc.json");
const client = new Discord.Client({disableEveryone: true});
const ms = require('ms');
const i18n = require('i18n');
//const superagent = require("superagent");

var prefix = (botconfig.prefix)


module.exports.run = async (bot, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;

    let tf = {
        "true": `\`Oui\``,
        "false": `\`Non\``
      };


    let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(role => role.name === args[0]);
    if (!role) role = message.member.highestRole;

    let month = {
        "1": "janvier",
        "2": "février",
        "3": "mars",
        "4": "avril",
        "5": "mai",
        "6": "juin",
        "7": "juillet",
        "8": "août",
        "9": "septembre",
        "10": "octobre",
        "11": "novembre",
        "12": "décembre"
      }
      let CreateD = role.createdAt.toString().split(' ');

    const RoleInfoEmbed = new Discord.RichEmbed()
    .setColor(role.hexColor)
    .setTitle(role.name)
    .addField("🔤 Nom", role.name, true)
    .addField("🆔 ID", role.id, true)
    .addField("#⃣ Couleur", role.hexColor, true)
    .addField("💳 Rôle créé le", `${CreateD[2]} ${month[role.createdAt.getMonth()]} ${CreateD[3]} à ${CreateD[4]}`, true)
    .addField("👥 Porté par", `${role.members.size} personne(s)`, true)
    .addBlankField(false)
    .addField("🔐 Rôle modifiable", tf[role.editable.toString()], true)
    .addField("🔏 Rôle d'un Bot",tf[role.managed.toString()], true)
    message.channel.send(RoleInfoEmbed)

}

module.exports.help = {
    name: "role-info"
}
