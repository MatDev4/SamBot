const Discord = require("discord.js");


module.exports = (client) => {

    console.log(`[${client.user.tag}] Connected! ${client.guilds.size} guilds and ${client.users.size} users`)
    client.user.setStatus("online");
    setInterval(function() {
    let RANDOMCHOOSER = ["s!help | v0.9.6", `s!help | ${client.guilds.size} guilds!`, `s!help | ${client.users.size} users!`, "s!help | OwO Thanks!"]
    let STATUSCHOOSER = Math.floor(Math.random()*(RANDOMCHOOSER.length));
        client.user.setActivity(RANDOMCHOOSER[STATUSCHOOSER]);
    }, 7000);
}
