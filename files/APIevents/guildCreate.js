const Discord = require("discord.js");


module.exports = (client, guild, message) => {
    let CreateD = guild.createdAt.toString().split(' ');
    let month = {
        "1": "janvier",
        "2": "février",
        "3": "mars",
        "4": "avril",
        "5": "mai",
        "6": "juin",
        "7": "juillet",
        "8": "août",
        "9": "septembre",
        "10": "octobre",
        "11": "novembre",
        "12": "décembre"
      }

    const guildCreateEmbed = new Discord.RichEmbed()
    .setColor('#5AED49')
    .setAuthor("Serveur rejoint... :)", 'https://cdn.pixabay.com/photo/2014/03/25/17/00/plus-297823_960_720.png')
    .setDescription(`J'ai rejoint un nouveau serveur ! Je suis désormais sur __${client.guilds.size}__ serveurs !`)
    .addField("🐦 Nom", guild.name, true)
    .addField("🆔 ID", guild.id, true)
    .addField("👑 Propriétaire", guild.owner.user.tag, true)
    .addField("📂 Créé le", `${CreateD[2]} ${month[guild.createdAt.getMonth()]} ${CreateD[3]} à ${CreateD[4]}`, true)
    .addField("👨 Membres", guild.memberCount, true)
    .setTimestamp(new Date())
    client.guilds.get('496373309621927956').channels.get('511240789834334238').send(guildCreateEmbed).catch((err) => {
    console.log(`J'ai rejoint un nouveau serveur ! - ${guild.name} | ${guild.id}`);             
          }); 
}