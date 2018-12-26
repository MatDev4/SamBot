const Discord = require("discord.js");
const DBLAPI = require("dblapi.js");
const dbl = new DBLAPI(process.env.TOKEN_DBLAPI, client);

module.exports = (client, guild, message) => {
    let CreateD = guild.createdAt.toString().split(' ');
    let month = {
        "1": "January",
        "2": "February",
        "3": "March",
        "4": "April",
        "5": "May",
        "6": "June",
        "7": "Jully",
        "8": "August",
        "9": "September",
        "10": "October",
        "11": "November",
        "12": "December"
      }

    const guildCreateEmbed = new Discord.RichEmbed()
    .setColor('#5AED49')
    .setThumbnail(guild.iconURL)
    .setAuthor("NEW GUILD", 'https://cdn.pixabay.com/photo/2014/03/25/17/00/plus-297823_960_720.png')
    .setDescription(`I joined a new guild! I'm now on __${client.guilds.size}__ guilds!`)
    .addField("🐦 Name", guild.name, true)
    .addField("🆔 ID", guild.id, true)
    .addField("👑 Owner", guild.owner.user.tag, true)
    .addField("📂 Create at", `${CreateD[2]} ${month[guild.createdAt.getMonth()]} ${CreateD[3]} at ${CreateD[4]}`, true)
    .addField("👨 Members", guild.memberCount, true)
    .setTimestamp(new Date())
    client.guilds.get('496373309621927956').channels.get('511240789834334238').send(guildCreateEmbed).catch((err) => {
    console.log(`PROBLEM! | Added on ${guild.name} | ${guild.id}`);
          })
    console.log(`Added on ${guild.name} | ${guild.id}`)
    client.guilds.get('496373309621927956').channels.get('525354074128777217').edit({ name: `🎸 Guilds: ${client.guilds.size}`})
    client.guilds.get('496373309621927956').channels.get('525354138268073984').edit({ name: `👥 Users: ${client.users.size}`})
    dbl.postStats(client.guilds.size)
}
