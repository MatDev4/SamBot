const Discord = require('discord.js')
let botconfig = require("../botconfig.json");
let misc = require("../misc.json");
const lang = require('i18n');
const client = new Discord.Client({disableEveryone: true});


var prefix = (botconfig.prefix)


module.exports.run = async (bot, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;


    let fish = ["🐡", "🐟", "🐠", "👢", "🦑", "🦀", "🐚", "🐬", "🐋", "🐳", "🐢"]
    let fishes = {
      "1": `\`un poisson globe, pourquoi pas ...\` 🐡`,
      "2": `\`un poisson, à table ! J'ai faim.\` 🐟`,
      "3": `\`un poisson clown ! Incroyable !\` 🐠`,
      "4": `\`une botte ... beurk, jette moi ça.\` 👢`,
      "5": `\`un poulpe, une pieuvre ? Je ne sais pas, mais dans tout les cas c'est une belle prise !\` 🦑`,
      "6": `\`un crabe, OK. Mais y a mieux ...\` 🦀`,
      "7": `\`des coquillages. Merci, je vais refaire ma déco.\` 🐚`,
      "8": `\`un dauphin ? Vraiment ?\` 🐬`,
      "9": `\`WUT ! Qu'est-ce donc ? Relâche ça.\` 🐋`,
      "10": `\`Une baleine ! Euh, j'ai une question : Comment as-tu pu ne pas casser ta canne ? \` 🐳`,
      "11": `\`une tortue ! Relâche la !\` 🐢`
    };

    const FishedEmbed = new Discord.RichEmbed()
    .setTitle("🎣 Relève la canne, vite !")
    .setColor(botconfig.discordblack)
    .addField("Bravo ! Tu as pêché ...", fishes[Math.floor((Math.random() * fish.length))])
    message.channel.send(FishedEmbed)
}

module.exports.help = {
    name: "fish"
}
