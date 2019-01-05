const Discord = require('discord.js');
const fs = require("fs");
const client = new Discord.Client({disableEveryone: true});
const Config = require('../../Utilities/Config.json');
const Misc = require('../../Utilities/Misc.json');

var prefix = (botconfig.prefix)

module.exports.run = async (client, message, args) => {
  if (message.content.indexOf(prefix) !== 0) return;
  if (message.channel.type === "dm") return;
  if(message.author.bot) return;
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You are not allowed to use these command! *(ADMINISTRATOR)*")

  let f = Misc.Characters.GTS

  const SeeConfigEmbed = new Discord.RichEmbed()
  .setTitle(`${message.guild.name}'s parameters`)
  .setColor(botconfig.discordblue)
  .setFooter(Config.EmbedFooter)
  .setTimestamp()
  .addField("#⃣ Channels *(set-channel)*", `logs ${f} <#channel/Don't set>\nwelcome ${f} <#channel/Don't set>\nleave ${f} <#channel/Don't set>\nwarn ${f} <#channel/Don't set>\ncaptcha ${f} <#channel/Don't set>`, true)
  .addField("⚜ Roles *(set-role)", `mute ${f} <@role/Don't set>\n.. autorole${f} <@role/Don't set>\ncaptcha ${f} <@role/Don't set>`, true)
  .addField("🚘 Autorole *(set-autorole)*", `<on/off> | Role to give ${f} <@role/Don't set>`, true)
  .addField("🔏 Captcha *(set-autorole)*", `<on/off> | Channel ${f} <#channel/Don't set>`, true)
  message.channel.send(SeeConfigEmbed);
}

module.exports.help = {
  name: "see-config"
}
