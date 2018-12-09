const Discord = require('discord.js');
const fs = require("fs");
let botconfig = require("../botconfig.json");
let misc = require("../misc.json");
let cmdh = require("../cmdh.json");
const client = new Discord.Client({disableEveryone: true});

var prefix = (botconfig.prefix)

module.exports.run = async (client, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    //if(message.author.bot) return;

    let f = misc.fleche
    let SamMenu = misc.SamMenu
    let SamCard = misc.SamCard
    let SamPhoto = misc.SamPhoto
    let SamEye = misc.SamEye
    let SamCamera = misc.SamCamera
    let SamData = misc.SamData
    let SamDM = misc.SamDM
    let SamDownload = misc.SamDownload
    let discordblack = botconfig.discordblack

 
    const HelpEmbed = new Discord.RichEmbed() 
    .setColor(discordblack)
    .setFooter(`SamBot | Powered by UniX | <>: Champ requis [<>]: Champ optionnel`) 
    .setTitle("Documentation")
    .setDescription(`${SamDM} Bienvenue dans la documentation de SamBot !\n Mon préfixe actuel est __**${botconfig.prefix}**__`)
    .addField(`${SamCard} Commandes Fun`, cmdh.helpfun, true)
    .addField(`${SamEye} Utilitaires`, cmdh.helptools, true)
    .addField(`${SamCamera} Divers`, cmdh.helpmisc, true)
    .addField(`${SamPhoto} Images`,cmdh.helpimg, true)
    .addField(`${SamData} Modération`, cmdh.helpmod, true)
    .addField(`${SamDownload} Commandes réservées`, cmdh.helpdev, true)
    .addField("Liens", `[Invite-moi](https://discordapp.com/oauth2/authorize/?permissions=2146827639&scope=bot&client_id=481753714982518786) | [Mon support](https://discord.gg/Y8GgT2g) | [Vote sur DBL](https://discord.gg/Y8GgT2g)`)

    
  message.channel.send(HelpEmbed)
}

module.exports.help = {
    name: "help"
}
