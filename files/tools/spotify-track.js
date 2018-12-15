const Discord = require('discord.js');
const fs = require("fs");
let botconfig = require("../botconfig.json");
let misc = require("../misc.json");
const client = new Discord.Client({disableEveryone: true});
//const superagent = require("superagent");

var prefix = (botconfig.prefix)



module.exports.run = async (bot, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;

    var muser = message.mentions.users.first() || message.author;
    if(!muser) muser = message.author;

    if (!muser.presence.game.name === 'Spotify' && muser.presence.game.type === 2) return message.channel.send(`${muser.username} > Cette utilisateur n'est pas sur Spotify ou n'a pas relié son compte Spotify avec Discord.`);
          var SMImg = muser.presence.game.assets.largeImageURL;
          var SMUrl = `https://open.spotify.com/track/${muser.presence.game.syncID}`;
          var SMName = muser.presence.game.details;
          var SMAlbum = muser.presence.game.assets.largeText;
          var SMAuthor = muser.presence.game.state;

            const SpotifyEmbed = new Discord.RichEmbed()
                .setTitle("Spotify Track")
                .setThumbnail('https://img.icons8.com/ios/1600/spotify.png')
                .setURL(SMUrl)
                .setColor(botconfig.discordblack)
                .setThumbnail(SMImg)
                .addField("🎧 Nom", SMName, true)
                .addField("🎤 Artiste", SMAuthor, true)
                .addField("💽 Album", SMAlbum, true)
             message.channel.send(SpotifyEmbed);

}

module.exports.help = {
    name: "spotify-track"
}
