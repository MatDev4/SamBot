const { Discord, Attachment } = require('discord.js');
const i18n = require('i18n');

const Canvas = require("canvas-constructor"); // You can't make images without this.
const { resolve, join } = require("path"); // This is to get a font file.
const get = require("snekfetch"); // This is to fetch the user avatar and convert it to a buffer.

module.exports.run = async (bot, message, args) => {
  if (message.author.id !== "263713074630885376") return message.reply(i18n.t('NOP_Botowner'))
  if(message.author.bot) return;
  message.delete()

  const imageUrlRegex = /\?size=2048$/g;
  const { body: ujavatar } = await get(member.user.displayAvatarURL.replace(imageUrlRegex, "?size=128"));
  const ujname = member.displayName.length > 20 ? member.displayName.substring(0, 17) + "..." : member.displayName;

new Canvas(500, 400)
 .setColor('#f5f0f4')
 .addRect(84, 0, 316, 180)
 .setColor("#2C2F33")
 .addRect(0, 0, 84, 180)
 .addRect(169, 26, 231, 46)
 //.addRect(224, 108, 176, 46)
    // Shadow effect
 .setShadowColor("rgba(22, 22, 22, 1)") // shadow color.
 .setShadowOffsetY(5) // drop shadow 5 pixels
 .setShadowBlur(10) // Blur shadow by 10.
 .save() // Save
 // Circle 2 pixels radius smaller prevent pixel border
 .addCircle(84, 90, 62)
 .addRoundImage(ujavatar, 20, 26, 128, 128, 64)
 .restore()
 .setTextAlign("center")
 .setTextFont("10pt Discord")
 .setColor("#FFFFFF")
 .addText(ujname, 285, 54)
Canvas.registerFont(resolve(join(__dirname, "./assets/fonts/Discord.ttf")), "Discord");

}


module.exports.help = {
    name: "sam-test"
}
