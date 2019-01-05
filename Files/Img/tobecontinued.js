const Discord = require('discord.js');
const fs = require("fs");
const fsn = require('fs-nextras');
const client = new Discord.Client({disableEveryone: true});
const Jimp = require('jimp');
const Config = require('../../Utilities/Config.json');
const Misc = require('../../Utilities/Misc.json');

let prefix = Config.Prefix

module.exports.run = async (client, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;

let u = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]) || message.author);
let Text = await fsn.readFile('../../Bases/Images/ToBeContinued/TOBECONTINUED.png');
    if (!message.guild) user = message.author;
try {
Jimp.read(u.avatarURL, (err, img) => {
  img.resize(634, 675)
  img.sepia();

  Jimp.read(plate, (err, a) => {
    a.resize(384, 245)
    image.composite(avatar, 230, 490)
      image.getBuffer(Jimp.MIME_PNG, (error, b) => {
        message.channel.send({files: [{
          attachment: b,
          name: 'tobecontinued.png'
          }] });
      });
    });
})
}catch (err) {
  message.channel.send("I'm sorry but I can't send you 'tobecontinued.png' because I'm missing the ATTACH_FILES permission.")
}

}

module.exports.help = {
  name: 'tobecontinued'
}
