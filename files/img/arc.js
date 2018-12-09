const Discord = require('discord.js');
const fs = require("fs");
let botconfig = require("../botconfig.json");
let misc = require("../misc.json");
let storage = require('./arc-store.json');
const client = new Discord.Client({disableEveryone: true});


var prefix = (botconfig.prefix)
let arcavatarurl = "https://cdn.discordapp.com/avatars/502506667615715358/e1a33ed81fddbaeb5e888cda8187542b.png?size=512"
let f = misc.fleche

module.exports.run = async (bot, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;

    /*storage.filters
    storage.gens
    storage.gifs*/

    const ArcHelpEmbed = new Discord.RichEmbed()
    .setAuthor("Documentation des commandes d'Arcadia-API", "https://cdn.discordapp.com/avatars/502506667615715358/e1a33ed81fddbaeb5e888cda8187542b.png?size=512")
    .setDescription(`Besoin d'aide ? Rejoins mon [serveur Discord](https://discord.gg/Y8GgT2g) !`)
    .setColor(botconfig.discordblack)
    .addField("Filtres", storage.filters, true)
    .addField("Générations", storage.gens, true)
    .addField("Gifs", storage.gifs, true)
    .setFooter(`SamBot | Powered by Arcadia-API`)
    message.channel.send(ArcHelpEmbed)
    
}

module.exports.help = {
    name: "arc"
}