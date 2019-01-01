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
        "true": `\`Yes !\``,
        "false": `\`No !\``
      };


    let role = message.mentions.roles.first() || message.guild.roles.find(role => role.name === args[0]);
    if (!role) return message.channel.send(`I didn't find ${args[0]}.`)

    let month = {
        "1": "January",
        "2": "February",
        "3": "March",
        "4": "April",
        "5": "May",
        "6": "June",
        "7": "July",
        "8": "August",
        "9": "September",
        "10": "October",
        "11": "November",
        "12": "December"
      }
      let CreateD = role.createdAt.toString().split(' ');

    const RoleInfoEmbed = new Discord.RichEmbed()
    .setColor(role.hexColor)
    .setTitle(role.name)
    .addField("🔤 Name", role.name, true)
    .addField("🆔 ID", role.id, true)
    .addField("#⃣ Color", role.hexColor, true)
    .addField("💳 Role created on", `${CreateD[2]} ${month[role.createdAt.getMonth()]} ${CreateD[3]} at ${CreateD[4]}`, true)
    .addField("👥 Carried by", `${role.members.size} person/people`, true)
    .addBlankField(false)
    .addField("🔐 Editable role", tf[role.editable.toString()], true)
    .addField("🔏 Bot role",tf[role.managed.toString()], true)
    message.channel.send(RoleInfoEmbed)

}

module.exports.help = {
    name: "role-info"
}
