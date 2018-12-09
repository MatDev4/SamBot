const Discord = require('discord.js');
const i18n = require('i18n')

module.exports.run = async (bot, message, args) => {
  if (message.author.id !== "263713074630885376") return message.reply("__**You are not authorized to use these command ! Only my founder can.**__")
  if(message.author.bot) return;
  message.delete()
  console.log("+-----------------------------+")
  console.log("|                             |")
  console.log("|  Commande Test Effectuée !  |")
  console.log("|                             |")
  console.log("+-----------------------------+")

  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let bUser = kUser;
  let kReason = 'Ceci est un test';
  let bReason = kReason;

  const SanctionnéEmbedBan = new Discord.RichEmbed()
  .setTitle(`Sanctionné(e)`)
  .setThumbnail('https://www.tenor.co/ysMW.gif ')
  .setDescription(`Vous avez été sanctionné(e) sur le serveur __${message.guild.name}__`)
  .addField('BAN', bReason)
  .setColor("#ef214e")
  .setTimestamp()
  .setFooter('Merci de lire le règlement !')

  const SanctionnéEmbedKick = new Discord.RichEmbed()
  .setTitle(`Sanctionné(e)`)
  .setThumbnail('https://media1.tenor.com/images/1f8c90e5efbd0bbdf0d385ef4f85c9e9/tenor.gif')
  .setDescription(`Vous avez été sanctionné(e) sur le serveur __${message.guild.name}__`)
  .addField('KICK', kReason)
  .setColor("#ef214e")
  .setTimestamp()
  .setFooter('Merci de lire le règlement !')

  message.client.users.get(kUser.id).send(SanctionnéEmbedKick)
  message.client.users.get(bUser.id).send(SanctionnéEmbedBan)

 
}


module.exports.help = {
    name: "sam-test"
}
