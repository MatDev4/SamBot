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
    const guildDeleteEmbed = new Discord.RichEmbed()
    .setColor('#F42440')
    .setAuthor("Serveur quitté... :/", 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Dialog-error.svg/1024px-Dialog-error.svg.png')
        .setDescription(`J'ai été enlevée d'un serveur ! Je suis désormais sur __${client.guilds.size}__ serveurs !`)
        .setThumbnail(guild.iconURL)
    .addField("🐦 Nom", guild.name, true)
    .addField("🆔 ID", guild.id, true)
    .addField("👑 Propriétaire", guild.owner.tag, true)
    .addField("📂 Créé le", `${CreateD[2]} ${month[guild.createdAt.getMonth()]} ${CreateD[3]} à ${CreateD[4]}`, true)
    .addField("👨 Membres", guild.memberCount, true)
    .setTimestamp(new Date())
    client.guilds.get('496373309621927956').channels.get('511240789834334238').send(guildDeleteEmbed).catch((err) => {
    console.log(`J'ai été enlevée d'un serveur :/ - ${guild.name} | ${guild.id}`);             
          }); 
}