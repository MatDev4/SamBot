const Discord = require('discord.js');
const fs = require("fs");
let botconfig = require("../botconfig.json");
let misc = require("../misc.json");
const i18n = require('i18n');
let cmdh = require("../cmdh.json");
const client = new Discord.Client({disableEveryone: true});

var prefix = (botconfig.prefix)

module.exports.run = async (client, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;

    let reported = args.join(" ");
    let userr = message.author;
    if(!reported[0]) return message.channel.send("Hum, quel est le bug que tu souhaites me raporter ? Je l'enverrai sur mon serveur.");

    const ReportEmbed = new Discord.RichEmbed()
    .setAuthor(userr.tag, userr.avatarURL)
    .setDescription(`${userr.tag} a rapporté un bug !`)
    .addField("Bug :", reported, true)
    .setColor('#f4e842')
    .setFooter('Si vous aussi trouvez un bug, utilisez s!report <bug> !')
    .setTimestamp()

    const YesTickEmbed = new Discord.RichEmbed()
    .setColor(botconfig.discordblack)
    .setTitle('Bug rapporté !')
    .setURL('https://discord.gg/Y8GgT2g')
    .setDescription('Merci de nous avoir rapporté ce problème ! Il est envoyé sur mon [serveur nommé SamBot](https://discord.gg/Y8GgT2g) pour y être analysé.\nMon équipe s\'occupe désormais de se problème.')

    if(message.guild.id != '496373309621927956') {
    message.channel.send(YesTickEmbed)
    } else {
        message.delete()
    }
    client.guilds.get('496373309621927956').channels.get('508218680702664704').send(ReportEmbed)
    client.users.get('263713074630885376').send(ReportEmbed)

}

module.exports.help = {
    name: "report"
}
