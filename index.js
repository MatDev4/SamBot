const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const DBLAPI = require("dblapi.js");
const dbl = new DBLAPI(process.env.TOKEN_DBLAPI, client);
const db = require('quick.db')
const figlet = require('figlet');
const botconfig = require("./botconfig.json");
const fs = require("fs");
const ytdl = require('ytdl-core');
const cmds = client;
const img = client;


/*FS START*/
//client.cmd = new Discord.Collection();
cmds.fun = new Discord.Collection();
cmds.tools = new Discord.Collection();
cmds.misc = new Discord.Collection();
cmds.mod = new Discord.Collection();
cmds.dev = new Discord.Collection();
cmds.img = new Discord.Collection();
 img.filters = new Discord.Collection();
 img.gens = new Discord.Collection();
 img.gifs = new Discord.Collection();
client.APIevents = new Discord.Collection();
cmds.guildconfig = new Discord.Collection();

fs.readdir("./files/fun/", (err, files) => {
  console.log('====================================')

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log(`[FUN] Il n'y a rien...`);
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./files/fun/${f}`);
    console.log(`[FUN] ${f} loaded!`);
    cmds.fun.set(props.help.name, props);
  });
});
fs.readdir("./files/tools/", (err, files) => {
  console.log('====================================')

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log(`[TOOLS] Il n'y a rien...`);
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./files/tools/${f}`);
    console.log(`[TOOLS] ${f} loaded!`);
    cmds.tools.set(props.help.name, props);
  });
});
fs.readdir("./files/misc/", (err, files) => {
  console.log('====================================')

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log(`[MISC] Il n'y a rien...`);
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./files/misc/${f}`);
    console.log(`[MISC] ${f} loaded!`);
    cmds.misc.set(props.help.name, props);
  });
});
fs.readdir("./files/mod/", (err, files) => {
  console.log('====================================')

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log(`[MOD] Il n'y a rien...`);
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./files/mod/${f}`);
    console.log(`[MOD] ${f} loaded!`);
    cmds.mod.set(props.help.name, props);
  });
});
fs.readdir("./files/dev/", (err, files) => {
  console.log('====================================')

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log(`[DEV] Il n'y a rien...`);
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./files/dev/${f}`);
    console.log(`[DEV] ${f} loaded!`);
    cmds.dev.set(props.help.name, props);
  });
});
/*
fs.readdir("./files/img/", (err, files) => {
  console.log('====================================')

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log(`[IMG] Il n'y a rien...`);
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./files/img/${f}`);
    console.log(`[IMG] ${f} loaded!`);
    cmds.img.set(props.help.name, props);
  });
});
fs.readdir("./files/img/filters/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log(`[IMG - FILTERS] Il n'y a rien...`);
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./files/img/filters/${f}`);
    console.log(`[IMG - FILTERS] ${f} loaded!`);
    img.filters.set(props.help.name, props);
  });
});
fs.readdir("./files/img/gens/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log(`[IMG - GENS] Il n'y a rien...`);
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./files/img/gens/${f}`);
    console.log(`[IMG - GENS] ${f} loaded!`);
    img.gens.set(props.help.name, props);
  });
});
fs.readdir("./files/img/gifs/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log(`[IMG - GIFS] Il n'y a rien...`);
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./files/img/gifs/${f}`);
    console.log(`[IMG - GIFS] ${f} loaded!`);
    img.gifs.set(props.help.name, props);
  });
});
*/
fs.readdir('./files/APIevents/', (err, files) => {
  console.log('====================================')

  if(err) console.log(err)

  files = files.filter(f => f.endsWith('.js'));
  files.forEach(f => {
      const event = require(`./files/APIevents/${f}`);
      console.log(`[EVENTS] ${f}  !`);
      client.on(f.split('.')[0], event.bind(null, client));
      delete require.cache[require.resolve(`./files/APIevents/${f}`)];
  });
});
fs.readdir("./files/guildConfiguration/", (err, files) => {
  console.log('====================================')

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log(`[guildCONFIGURATION] Il n'y a rien...`);
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./files/guildConfiguration/${f}`);
    console.log(`[guildCONFIGURATION] ${f} loaded!`);
    cmds.guildconfig.set(props.help.name, props);
  });
});

client.on("message", message => {
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let cmdfun = cmds.fun.get(cmd.slice(prefix.length));
  if(cmdfun) cmdfun.run(client, message, args);
  let cmdtools = cmds.tools.get(cmd.slice(prefix.length));
  if(cmdtools) cmdtools.run(client, message, args);
  let cmdmisc = cmds.misc.get(cmd.slice(prefix.length));
  if(cmdmisc) cmdmisc.run(client, message, args);
  let cmdmod = cmds.mod.get(cmd.slice(prefix.length));
  if(cmdmod) cmdmod.run(client, message, args);
  let cmddev = cmds.dev.get(cmd.slice(prefix.length));
  if(cmddev) cmddev.run(client, message, args);
  let cmdimg = cmds.img.get(cmd.slice(prefix.length));
  if(cmdimg) cmdimg.run(client, message, args);
  let imgfilters = img.filters.get(cmd.slice(prefix.length));
  if(imgfilters) imgfilters.run(client, message, args);
  let imggens = img.gens.get(cmd.slice(prefix.length));
  if(imggens) imggens.run(client, message, args);
  let imggifs = img.gifs.get(cmd.slice(prefix.length));
  if(imggifs) imggifs.run(client, message, args);
  let eventsfilters = client.APIevents.get(cmd.slice(prefix.length));
  if(eventsfilters) eventsfilters.run(client, message, args);
  let cmdguildconfig = cmds.guildconfig.get(cmd.slice(prefix.length));
  if(cmdguildconfig) cmdguildconfig.run(client, message, args);
});
/*FS END*/
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
  console.log('====================================')
  console.log(data)
});

var prefix = (botconfig.prefix)

client.login(process.env.TOKEN);
