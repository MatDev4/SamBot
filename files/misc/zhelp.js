const Discord = require('discord.js');
const fs = require("fs");
let botconfig = require("../botconfig.json");
let misc = require("../misc.json");
let cmdh = require("../cmdh.json");
const i18n = require('i18n');
const client = new Discord.Client({disableEveryone: true});

var prefix = (botconfig.prefix)

module.exports.run = async (client, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    //if(message.author.bot) return;

    let f = misc.fleche
    let ON = misc.DiscordOnline
    let OFF = misc.DiscordOffline
    let WIP = misc.DiscordIdle

    let discordblack = botconfig.discordblack


    const HelpEmbed = new Discord.RichEmbed()
    .setColor(discordblack)
    .setFooter(`SamBot | <>: Champ requis [<>]: Champ optionnel`)
    .setTitle("Documentation")
    .setDescription(`Bienvenue dans la documentation de SamBot !\n Mon préfixe actuel est __**${botconfig.prefix}**__`)
    .addField(`${OFF} | 🍪 Commandes Fun`, cmdh.helpfun, true)
    .addField(`${ON} |  Utilitaires`, cmdh.helptools, true)
    .addField(`${ON} | Divers`, cmdh.helpmisc, true)
    .addField(`${ON} | Images`,cmdh.helpimg, true)
    .addField(`${WIP} | Modération`, cmdh.helpmod, true)
    .addField(`${ON} | Commandes réservées`, cmdh.helpdev, true)
    .addField("Liens", `[Invite-moi](https://discordapp.com/oauth2/authorize/?permissions=2146827639&scope=bot&client_id=481753714982518786) | [Mon support](https://discord.gg/Y8GgT2g) | [Vote sur DBL](https://discord.gg/Y8GgT2g)`)
    .addField("Légendes", `${ON} ${f} Module fonctionnel\n${WIP} ${f} Module en développement, risque de bugs\n${OFF} ${f} Module inutilisable`, true)

  message.channel.send(HelpEmbed)
}

module.exports.help = {
    name: "help"
}
