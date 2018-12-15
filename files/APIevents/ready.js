const Discord = require("discord.js");


module.exports = (client) => {

    console.log(`[${client.user.tag}] Je suis connecté !`)
    console.log(`[${client.user.tag}] Je suis sur ${client.guilds.size} serveurs`)
    client.user.setStatus("online");
    setInterval(function() {
    let RANDOMCHOOSER = ["s!help | Version 0.9.5", `s!help | ${client.guilds.size} serveurs`, `s!help | ${client.users.size} utilisateurs`, "s!help | Merci de m'utiliser !"]
    let STATUSCHOOSER = Math.floor(Math.random()*(RANDOMCHOOSER.length));
        client.user.setActivity(RANDOMCHOOSER[STATUSCHOOSER]);
    }, 7000);
}
