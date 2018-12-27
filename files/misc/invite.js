const Discord = require('discord.js');
const fs = require("fs");
let botconfig = require("../botconfig.json");
let misc = require("../misc.json");
const i18n = require('i18n');
const client = new Discord.Client({disableEveryone: true});

var prefix = (botconfig.prefix)
let SamDM = misc.SamDM



module.exports.run = async (bot, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;
    let orange = botconfig.orange
    let blue = botconfig.discordblue
    const InviteEmbed = new Discord.RichEmbed()
    .setTitle("SamBot#6445")
    .setDescription("Hey, thanks for inviting me to your Discord server! By inviting me, you encourage my developers and improve my visibility on Discord.")
    .addField("**Basic invitation**", "This invitation is the default when you invite me. It contains all the required permissions. [> Invite](https://discordapp.com/oauth2/authorize/?permissions=2146827639&scope=bot&client_id=481753714982518786)", true)
    .addField("**Administrator**", "You can make me join your server with Administrator permission, this allows you not to need to change the Bot permissions as updates are made. [> Invite](https://discordapp.com/oauth2/authorize/?permissions=8&scope=bot&client_id=481753714982518786)", true)
    .addField("**No permission**", "You want to invite me just to decorate? OK. [> Invite](https://discordapp.com/oauth2/authorize/?permissions=0&scope=bot&client_id=481753714982518786)", true)
    .addField("**Configure permissions**", "This can be useful when you want to have perfect control over my permissions. [> Invite](https://discordapp.com/oauth2/authorize/?permissions=2146958839&scope=bot&client_id=481753714982518786)", true)
    .setColor(blue)

  message.channel.send(InviteEmbed)
}

module.exports.help = {
    name: "invite"
}
