const Discord = require('discord.js')
const client = new Discord.Client({disableEveryone: true});
const Config = require('../../Utilities/Config.json');
const Misc = require('../../Utilities/Misc.json');

var prefix = (Config.Prefix)


module.exports.run = async (bot, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;


    let fish = ["🐡", "🐟", "🐠", "👢", "🦑", "🦀", "🐚", "🐬", "🐋", "🐳", "🐢"]
    let fishes = {
      "1": "a globe fish, why not... 🐡",
      "2": "a fish, at the table! I'm hungry. 🐟",
      "3": "a clown fish! Unbelievable! 🐠",
      "4": "a boot... Eurk, throw that away. 👢",
      "5": "a calmar, great catch! 🦑",
      "6": "crabes, CRABE RAVE ! 🦀",
      "7": "shells. Thanks, I'll do my decorating again. 🐚",
      "8": "a dolphin? Really? 🐬",
      "9": "It's a cousin of WUMPUS! DROP IT! 🐋",
      "10": "a whale! Uh, I have a question: How could you not break your cane? 🐳",
      "11": "a turtle! Let her go! Let her go! 🐢"
    };

    const FishedEmbed = new Discord.RichEmbed()
    .setTitle("🎣 Up the cane, quickly!")
    .setColor(Config.Colors.Blue)
    .addField("Congratulations! You fished...", fishes[Math.floor((Math.random() * fish.length))])
    message.channel.send(FishedEmbed)
}

module.exports.help = {
    name: "fish"
}
