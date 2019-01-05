const Discord = require('discord.js');
const fs = require("fs");
const fsn = require('fs-nextras');
const client = new Discord.Client({disableEveryone: true});
const Jimp = require('jimp');
const GIFEncoder = require('gifencoder');
const Config = require('../../Utilities/Config.json');
const Misc = require('../../Utilities/Misc.json');

let prefix = Config.Prefix

module.exports.run = async (client, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;
try {
let u = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]) || message.author);
let Opts = { Size: 256, Frames: 16}
  function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

  let aURL = u.avatarURL;
      if (['jpg', 'jpeg', 'gif', 'png', 'webp'].some(x => args.join(' ').includes(x))) {
        aURL = args.join(' ').replace(/gif|webp/g, 'png');
      }

  let Template = new Jimp(Opts.Size, Opts.Size);
  let a = await Jimp.read(aURL);
  let Text = await fsn.readFile('../../Bases/Images/Triggered/TRIGGERED.jpg');
  let Red = await fsn.readFile('../../Bases/Images/Triggered/RED.png');
  let text = await Jimp.read(Text);
  let red = await Jimp.read(Red);

  a.resize(320, 320);
  red.scaleToFit(Template.bitmap.width, Template.bitmap.height);
  PermissionRequestedEvent.opacity(0.2);
  text.scaleToFit(280, 60);
  let frames = [];
  let buffers = [];
  let GIFt = new GIFEncoder(Opts.Size, Opts.Size);
  let s = GIFt.createReadStream();
  let temp;
      s.on('data', async buffer => await buffers.push(buffer));
      s.on('end', async() => {
        return await message.channel.send({
          files: [{
            attachment: Buffer.concat(buffers),
            name: 'triggered.gif'
          }]
        });
      });
      for (let i = 0; i < Opts.Frames; i++) {
        temp = Template.clone();
        if (i === 0) {
          temp.composite(a, -16, -16);
        } else {
          temp.composite(a, -32 + getRandomInt(-16, 16), -32 + getRandomInt(-16, 16));
        }
        temp.composite(red, 0, 0);
        if (i === 0) temp.composite(text, -10, 200);
        else temp.composite(text, -12 + getRandomInt(-8, 8), 200 + getRandomInt(-0, 12));
        frames.push(temp.bitmap.data);
        }
      GIFt.start();
      GIFt.setRepeat(0);
      GIFt.setDelay(20);
      for (const frame of frames) { GIFt.addFrame(frame); }
      GIFt.finish();
}catch(err) {
  message.channel.send("I'm sorry but I can't send you 'tobecontinued.png' because I'm missing the ATTACH_FILES permission.")
}
}

module.exports.help = {
  name: 'triggered'
}
