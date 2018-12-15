const Discord = require('discord.js')
let botconfig = require("../botconfig.json");
let misc = require("../misc.json");
const i18n = require('i18n');
const client = new Discord.Client({disableEveryone: true});


var prefix = (botconfig.prefix)


module.exports.run = async (bot, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;


    let fish = ["🐡", "🐟", "🐠", "👢", "🦑", "🦀", "🐚", "🐬", "🐋", "🐳", "🐢"]
    let fishes = {
      "1": i18n.t('fish.F1'),
      "2": i18n.t('fish.F2'),
      "3": i18n.t('fish.F3'),
      "4": i18n.t('fish.F4'),
      "5": i18n.t('fish.F5'),
      "6": i18n.t('fish.F6'),
      "7": i18n.t('fish.F7'),
      "8": i18n.t('fish.F8'),
      "9": i18n.t('fish.F9'),
      "10": i18n.t('fish.F10'),
      "11": i18n.t('fish.F11')
    };

    const FishedEmbed = new Discord.RichEmbed()
    .setTitle(i18n.t('fish.FishEmbed1'))
    .setColor(botconfig.discordblack)
    .addField(i18n.t('fish.FishEmbed1'), fishes[Math.floor((Math.random() * fish.length))])
    message.channel.send(FishedEmbed)
}

module.exports.help = {
    name: "fish"
}
