const Discord = require('discord.js');
const fs = require("fs");
let botconfig = require("../botconfig.json");
let misc = require("../misc.json");
const lang = require('i18n');
const client = new Discord.Client({disableEveryone: true});
//const superagent = require("superagent");

var prefix = (botconfig.prefix)

let SamSearch = misc.SamSearch
let orange = botconfig.orange
let blue = botconfig.discordblue


module.exports.run = async (bot, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;


    let youtube = args.slice(0).join('+');
    let youtube2 = args.slice(0).join(' ')

        let link = `https://www.youtube.com/results?search_query=` + youtube;
        if(!youtube)return message.channel.send("Que cherches-tu sur Youtube ?").then (message => {
            message.react('482847690540187668')
        })
        if(!link)return message.channel.send("Je n'ai malencontreusement rien trouvé.").then (message => {
            message.react('482847690540187668')
        })

    const Result = new Discord.RichEmbed()
    .setColor(blue)
	  .setDescription(`${SamSearch} **${args.slice(0).join(' ')}**`)
	  .addField("Resultat pour", `[${youtube2}](${link})`)

	message.channel.send(Result).then (message => {
        message.react('488002794176118785')
    });




}


module.exports.help = {
    name: "youtube-search"
}
