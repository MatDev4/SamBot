const Discord = require('discord.js');
const i18n = require('i18n');

module.exports.run = async (bot, message, args) => {
  if (message.author.id !== "263713074630885376") return message.reply(i18n.t('NOP_Botowner'))
  if(message.author.bot) return;
  message.delete()
// CMD
}


module.exports.help = {
    name: "sam-test"
}
