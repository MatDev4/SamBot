const Discord = require('discord.js');
const fs = require("fs");
const client = new Discord.Client({disableEveryone: true});
const Config = require('../../Utilities/Config.json');
const Misc = require('../../Utilities/Misc.json');

var prefix = (Config.Prefix)


module.exports.run = async (bot, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;

    let tf = {
        "true": `\`Yes !\``,
        "false": `\`No !\``
      };


    let role = message.mentions.roles.first() || message.guild.roles.find(role => role.name === args.join(" "));
    if (!role) return message.channel.send(`I didn't find ${args.join(" ")}.`)

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
    .setFooter(Config.EmbedFooter)
    .addField("🆔 - ID", role.id)
    .addField("#⃣ - Color", role.hexColor, true)
    .addField("💳 - Role created on", `${CreateD[2]} ${month[role.createdAt.getMonth()]} ${CreateD[3]} at ${CreateD[4]}`)
    .addField("👥 - Carried by", `${role.members.size} person/people`, true)
    .addBlankField(false)
    .addField("🔐 - Editable role", tf[role.editable.toString()], true)
    .addField("🔏 - Bot role",tf[role.managed.toString()], true)
    message.channel.send(RoleInfoEmbed)

}

module.exports.help = {
    name: "role-info"
}
