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
    .setFooter("SamBot | <>: Required fields [<>]: Optionnal field")
    .setTitle("Documentation")
    .setDescription(`Welcome on the SamBot's documention\n Mon prefix is actually __**${botconfig.prefix}**__\n${ON} ${f} Functional unit ${WIP} ${f} Unit under development, risk of bugs${OFF} ${f} Unusable unit`)
    .addField(`${ON} | 🍪 Fun`, cmdh.helpfun, true)
    .addField(`${ON} | 🔨 Tools`, cmdh.helptools, true)
    .addField(`${ON} | 🎭 Miscellaneous`, cmdh.helpmisc, true)
    .addField(`${ON} | 📸 Images`,cmdh.helpimg, true)
    .addField(`${WIP} | 🛑 Moderation`, cmdh.helpmod, true)
    .addField(`${ON} | 🔐 Reserved commands`, cmdh.helpdev, true)
    .addField("🎫 Links", `[Invite me](https://discordapp.com/oauth2/authorize/?permissions=2146827639&scope=bot&client_id=481753714982518786) | [My support server](https://discord.gg/Y8GgT2g) | [Discord Bots](https://discord.gg/Y8GgT2g)`)

  message.channel.send(HelpEmbed)
}

module.exports.help = {
    name: "help"
}
