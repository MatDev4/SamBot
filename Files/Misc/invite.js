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
    const InviteEmbed = new Discord.RichEmbed()
    .setTitle("SamBot#6445")
    .setDescription("Hey, thanks for inviting me to your Discord server! By inviting me, you encourage my developers and improve my visibility on Discord.")
    .addField("**Basic invitation**", `This invitation is the default when you invite me. It contains all the required permissions. ${Misc.Links.Invite.Basic}`, true)
    .addField("**Administrator**", `You can make me join your server with Administrator permission, this allows you not to need to change the Bot permissions as updates are made. ${Misc.Link.Invite.Admin}`, true)
    .addField("**No permission**", `You want to invite me just to decorate? ${Misc.Link.Invite.NoPerm}`, true)
    .addField("**Configure permissions**", `This can be useful when you want to have perfect control over my permissions. ${Misc.Link.Invite.PermConfig}`, true)
    .setColor(Config.Colors.Blue)
    .setFooter(Config.EmbedFooter)
  message.channel.send(InviteEmbed)
}

module.exports.help = {
    name: "invite"
}
