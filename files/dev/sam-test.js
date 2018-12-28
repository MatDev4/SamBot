const { Discord, Attachment } = require('discord.js');
const i18n = require('i18n');

const Canvas = require("canvas-constructor"); // You can't make images without this.
const { resolve, join } = require("path"); // This is to get a font file.
const get = require("snekfetch"); // This is to fetch the user avatar and convert it to a buffer.

module.exports.run = async (bot, message, args) => {
  if (message.author.id !== "263713074630885376") return message.reply(i18n.t('NOP_Botowner'))
  if(message.author.bot) return;
  message.delete()

  message.channel.send("...")
}


module.exports.help = {
    name: "sam-test"
}
