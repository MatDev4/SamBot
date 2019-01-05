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
    let muser = message.mentions.users.first() || message.author || message.guild.members.get(args.join(" "));
    if(!muser) muser = message.author;


    let DiO = Misc.Emotes.Online
    let DiI = Misc.Emotes.Idle
    let DiD = Misc.Emotes.DnD
    let DiOf = Misc.Emotes.Offline
    let DiS = Misc.Emotes.Streaming

    let UpBot = {
        "true": `BIP. BOUP ! It's a Bot.`,
        "false": `BIP. BOUP... It's not a Bot.`
    }

    let RichStatus = {
        "online": `${DiO} Online`,
        "idle": `${DiI} Idle`,
        "dnd": `${DiD} Do not Disturb (DnD)`,
        "offline": `${DiOf} Invisible or offline`,
        "streaming": `${DiS} Streaming`
    }

    let month = {
        "1": "January",
        "2": "February",
        "3": "March",
        "4": "April",
        "5": "May",
        "6": "June",
        "7": "July",
        "8": "August",
        "9": "September",
        "10": "October",
        "11": "November",
        "12": "December"
      }
let CreateD = muser.createdAt.toString().split(' ');

const UserInfoEmbed = new Discord.RichEmbed()
.setTitle(muser.tag)
.setColor(Config.Colors.Blue)
.setThumbnail(muser.avatarURL)
.setTimestamp()
.setFooter(Config.EmbedFooter)
.addField("🆔 - ID", muser.id)
.addField("🤖 - Bot", UpBot[muser.bot], true)
.addField("👻 - Status", RichStatus[muser.presence.status])
.addField("🎮 - Activity", muser.presence.game ? muser.presence.game.name : 'Nothing...', true)
.addField("💿 - Account created on", `${CreateD[2]} ${month[muser.createdAt.getMonth()]} ${CreateD[3]} at ${CreateD[4]}`, true)
message.channel.send(UserInfoEmbed)

}

module.exports.help = {
  name: "user-info"
}
