const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const DBLAPI = require("dblapi.js");
const dbl = new DBLAPI(process.env.TOKEN_DBLAPI, client);
const DDBLAPI = require("ddblapi.js");
const ddbl = new DDBLAPI(process.env.TOKEN_DDBLAPI);
const db = require('quick.db')
const figlet = require('figlet');
const Config = require("./Utilities/Config.json");
const fs = require("fs");
const ytdl = require('ytdl-core');

fs.readdir('./Utilities', (err, files) => {
  if(err) console.log(err)
  files = files.filter(f => f.endsWith('.js'));
  files.forEach(f => {
    console.log(`!! ${Config.Client.Tag} >> Starting ${f} !`)
  });
});
// Creating Discord's Collections!
client.botEvents = new Discord.Collection();
client.Fun = new Discord.Collection();
client.Img = new Discord.Collection();
client.Misc = new Discord.Collection();
client.Mod = new Discord.Collection();
client.Tools = new Discord.Collection();
client.Config = new Discord.Collection();
client.botAdmin = new Discord.Collection();

fs.readdir('./Utilities/botEvents/', (err, files) => {
  console.log(' ')
  if(err) console.log(err)
  files = files.filter(f => f.endsWith('.js'));
  files.forEach(f => {
      const event = require(`./Utilities/botEvents/${f}`);
      console.log(`!! ${Config.Client.Tag} >> ${f} event loaded in the botEvents folder.`);
      client.on(f.split('.')[0], event.bind(null, client));
      delete require.cache[require.resolve(`./Utilities/botEvents/${f}`)];
  });
});
fs.readdir("./Files/Fun/", (err, files) => {
  console.log(' ')
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0) return console.log(`!! ${Config.Client.Tag} >> I didn't detect any JavaScript files in the Fun folder.`);
  jsfile.forEach((f, i) =>{
    let props = require(`./Files/Fun/${f}`);
    console.log(`!! ${Config.Client.Tag} >> ${f} loaded in the Fun folder.`);
    client.Fun.set(props.help.name, props);
  });
});
/*
fs.readdir("./Files/Img/", (err, files) => {
  console.log(' ')
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0) return console.log(`!! ${Config.Client.Tag} >> I didn't detect any JavaScript files in the Img folder.`);
  jsfile.forEach((f, i) =>{
    let props = require(`./Files/Img/${f}`);
    console.log(`!! ${Config.Client.Tag} >> ${f} loaded in the Img folder.`);
    client.Img.set(props.help.name, props);
  });
});
*/
fs.readdir("./Files/Misc/", (err, files) => {
  console.log(' ')
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0) return console.log(`!! ${Config.Client.Tag} >> I didn't detect any JavaScript files in the Misc folder.`);
  jsfile.forEach((f, i) =>{
    let props = require(`./Files/Misc/${f}`);
    console.log(`!! ${Config.Client.Tag} >> ${f} loaded in the Misc folder.`);
    client.Misc.set(props.help.name, props);
  });
});
fs.readdir("./Files/Mod/", (err, files) => {
  console.log(' ')
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0) return console.log(`!! ${Config.Client.Tag} >> I didn't detect any JavaScript files in the Mod folder.`);
  jsfile.forEach((f, i) =>{
    let props = require(`./Files/Mod/${f}`);
    console.log(`!! ${Config.Client.Tag} >> ${f} loaded in the Mod folder.`);
    client.Mod.set(props.help.name, props);
  });
});
fs.readdir("./Files/Tools/", (err, files) => {
  console.log(' ')
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0) return console.log(`!! ${Config.Client.Tag} >> I didn't detect any JavaScript files in the Tools folder.`);
  jsfile.forEach((f, i) =>{
    let props = require(`./Files/Tools/${f}`);
    console.log(`!! ${Config.Client.Tag} >> ${f} loaded in the Tools folder.`);
    client.Tools.set(props.help.name, props);
  });
});
fs.readdir("./Files/Config/", (err, files) => {
  console.log(' ')
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0) return console.log(`!! ${Config.Client.Tag} >> I didn't detect any JavaScript files in the Config folder.`);
  jsfile.forEach((f, i) =>{
    let props = require(`./Files/Config/${f}`);
    console.log(`!! ${Config.Client.Tag} >> ${f} loaded in the Config folder.`);
    client.Config.set(props.help.name, props);
  });
});
fs.readdir("./Files/botAdmin/", (err, files) => {
  console.log(' ')
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0) return console.log(`!! ${Config.Client.Tag} >> I didn't detect any JavaScript files in the botAdmin folder.`);
  jsfile.forEach((f, i) =>{
    let props = require(`./Files/botAdmin/${f}`);
    console.log(`!! ${Config.Client.Tag} >> ${f} loaded in the botAdmin folder.`);
    client.botAdmin.set(props.help.name, props);
  });
});



client.on("message", message => {
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let _botEvents = client.botEvents.get(cmd.slice(prefix.length));
  if(_botEvents) _botEvents.run(client, message, args);
  let _Fun = client.Fun.get(cmd.slice(prefix.length));
  if(_Fun) _Fun.run(client, message, args);
  let _Img = client.Img.get(cmd.slice(prefix.length));
  if(_Img) _Img.run(client, message, args);
  let _Misc = client.Misc.get(cmd.slice(prefix.length));
  if(_Misc) _Misc.run(client, message, args);
  let _Mod = client.Mod.get(cmd.slice(prefix.length));
  if(_Mod) _Mod.run(client, message, args);
  let _Tools = client.Tools.get(cmd.slice(prefix.length));
  if(_Tools) _Tools.run(client, message, args);
  let _Config = client.Config.get(cmd.slice(prefix.length));
  if(_Config) _Config.run(client, message, args);
  let _botAdmin = client.botAdmin.get(cmd.slice(prefix.length));
  if(_botAdmin) _botAdmin.run(client, message, args);
});


/* i18n */
/*const i18n = require('i18n');
const path = require('path');

const locales = ['fr'];
const defaultLocale = 'fr';

i18n.configure({
    locales,
    directory: path.join(__dirname, 'i18n', 'locales'),
    defaultLocale,
    objectNotation: false,
    updateFiles: false,
    logErrorFn: (msg) => {
        console.log(msg);
    },
    api: {
      __: 't',
    },
  });

i18n.t = i18n.__;*/
/* i18n END*/
figlet('Figlet On !', function(err, data) {
  if (err) {
      console.log('[Figlet] Une erreur est survenue...');
      console.dir(err);
      return;
  }
  console.log(' ')
  console.log(data)
});

var prefix = (Config.Prefix)

client.login(process.env.TOKEN);
