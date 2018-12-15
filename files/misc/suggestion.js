const Discord = require('discord.js');
const fs = require("fs");
let botconfig = require("../botconfig.json");
let misc = require("../misc.json");
const i18n = require('i18n');
let cmdh = require("../cmdh.json");
const client = new Discord.Client({disableEveryone: true});

var prefix = (botconfig.prefix)

module.exports.run = async (client, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;

    let suggest = args.join(" ");
    let usersg = message.author;
    if(!suggest[0]) return message.channel.send("Hum, quelle est ta suggestion ? Je l'enverrai sur mon serveur.");

    const SuggestionsEmbed = new Discord.RichEmbed()
    .setAuthor(usersg.tag, usersg.avatarURL)
    .setDescription(`${usersg.tag} a envoyé une suggestion ! Réagissez avec les émojis ci-dessous :)`)
    .addField("Suggestion :", suggest, true)
    .setColor('#ef56ef')
    .setFooter('Si vous aimez cette suggestion, elle sera ajouté à la liste des nouveautés !')
    .setTimestamp()

    const YesTickEmbed = new Discord.RichEmbed()
    .setColor(botconfig.discordblack)
    .setTitle('Suggestion envoyée !')
    .setURL('https://discord.gg/Y8GgT2g')
    .setDescription('Merci de nous avoir donné cette suggestion ! Elle est envoyée sur mon [serveur nommé SamBot](https://discord.gg/Y8GgT2g) pour y être analysée.\nSi les utilisateurs l\'aime bien, elle sera mis sur la liste des nouveautés et sera ajoutée.')

    if(message.guild.id != '496373309621927956') {
    message.channel.send(YesTickEmbed)
    } else {
        message.delete()
    }
    client.guilds.get('496373309621927956').channels.get('508216407696080896').send(SuggestionsEmbed).then(async msg => {
        await msg.react('✅')
        await msg.react('❌')
              });

}

module.exports.help = {
    name: "suggestion"
}
