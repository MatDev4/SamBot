const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});
const DBLAPI = require("dblapi.js");
const dbl = new DBLAPI(process.env.TOKEN_DBLAPI, client);
/*
const DDBLAPI = require("ddblapi.js");
const ddbl = new DDBLAPI(process.env.TOKEN_DDBLAPI);
*/
const Config = require('./Config.json');


module.exports = (client) => {

    console.log(`${Config.Client.Tag} >> Connected! ${client.guilds.size} guilds and ${client.users.size} users`)
    client.user.setStatus("online");
    setInterval(function() {
    let RANDOMCHOOSER = [`s!help - v${Config.Client.Version}`, `s!help - ${client.guilds.size} guilds!`, `s!help - ${client.users.size} users!`, "s!help - 😝 Thanks!", "s!help - Created by NicoTine"]
    let STATUSCHOOSER = Math.floor(Math.random()*(RANDOMCHOOSER.length));
        client.user.setActivity(RANDOMCHOOSER[STATUSCHOOSER]);
    }, 7000);
    client.guilds.get('496373309621927956').channels.get('525354074128777217').edit({ name: `🎸 Guilds: ${client.guilds.size}`})

  dbl.on('posted', () => {
  console.log('[DBL API] Updated guild counter');
  })

  dbl.on('error', e => {
 console.log(`[DBL API] An error occured >> ${e}`);
  })
  //ddbl.postStats(client.user.id, client.guilds.size);
}
