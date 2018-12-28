const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});
const DBLAPI = require("dblapi.js");
const dbl = new DBLAPI(process.env.TOKEN_DBLAPI, client);
const DDBLAPI = require("ddblapi.js");
const ddbl = new DDBLAPI(process.env.TOKEN_DDBLAPI);


module.exports = (client) => {

    console.log(`[${client.user.tag}] Connected! ${client.guilds.size} guilds and ${client.users.size} users`)
    client.user.setStatus("online");
    setInterval(function() {
    let RANDOMCHOOSER = ["s!help | v0.9.7", `s!help | ${client.guilds.size} guilds!`, `s!help | ${client.users.size} users!`, "s!help | OwO Thanks!"]
    let STATUSCHOOSER = Math.floor(Math.random()*(RANDOMCHOOSER.length));
        client.user.setActivity(RANDOMCHOOSER[STATUSCHOOSER]);
    }, 7000);
    client.guilds.get('496373309621927956').channels.get('525354074128777217').edit({ name: `🎸 Guilds: ${client.guilds.size}`})
    client.guilds.get('496373309621927956').channels.get('525354138268073984').edit({ name: `👥 Users: ${client.users.size}`})

  dbl.on('posted', () => {
  console.log('[DBL API] Updated guild counter');
  })

  dbl.on('error', e => {
 console.log(`[DBL API] An error occured >> ${e}`);
  })
  ddbl.postStats(client.user.id, client.guilds.size);
}
