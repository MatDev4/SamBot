const Discord = require("discord.js");


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

    const guildDeleteEmbed = new Discord.RichEmbed()
    .setColor('#F42440')
    .setAuthor("GUILD LEAVE", 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Dialog-error.svg/1024px-Dialog-error.svg.png')
    .setDescription(`I leaved a guild! I'm now on __${client.guilds.size}__ guilds!`)
    .setThumbnail(guild.iconURL)
    .addField("🐦 Name", guild.name, true)
    .addField("🆔 ID", guild.id, true)
    .addField("👑 Owner", guild.owner.user.tag, true)
    .addField("📂 Create at", `${CreateD[2]} ${month[guild.createdAt.getMonth()]} ${CreateD[3]} at ${CreateD[4]}`, true)
    .addField("👨 Members", guild.memberCount, true)
    .setTimestamp(new Date())
    client.guilds.get('496373309621927956').channels.get('511240789834334238').send(guildDeleteEmbed).catch((err) => {
    console.log(`PROBLEM! | Removed from ${guild.name} | ${guild.id}`);
          })
    console.log(`Removed from ${guild.name} | ${guild.id}`);
    client.guilds.get('496373309621927956').channels.get('525354074128777217').edit({ name: `🎸 Guilds: ${client.guilds.size}`})
    client.guilds.get('496373309621927956').channels.get('525354138268073984').edit({ name: `👥 Users: ${client.users.size}`})
}
