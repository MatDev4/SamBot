const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const fs = require("fs");
const Config = require('./Config.json');
let prefix = Config.Prefix

// Creating Discord's Collections!
client.botEvents = new Discord.Collection();
client.Fun = new Discord.Collection();
client.Img = new Discord.Collection();
client.Misc = new Discord.Collection();
client.Mod = new Discord.Collection();
client.Tools = new Discord.Collection();
client.Config = new Discord.Collection();
client.botAdmin = new Discord.Collection();

fs.readdir('./botEvents/', (err, files) => {
  console.log(' ')
  if(err) console.log(err)
  files = files.filter(f => f.endsWith('.js'));
  files.forEach(f => {
      const event = require(`./botEvents/${f}`);
      console.log(`!! ${Config.Client.Tag} >> ${f} event loaded in the botEvents folder.`);
      client.on(f.split('.')[0], event.bind(null, client));
      delete require.cache[require.resolve(`./botEvents/${f}`)];
  });
});
fs.readdir("../Files/Fun/", (err, files) => {
  console.log(' ')
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0) return console.log(`!! ${Config.Client.Tag} >> I didn't detect any JavaScript files in the Fun folder.`);
  jsfile.forEach((f, i) =>{
    let props = require(`../Files/Fun/${f}`);
    console.log(`!! ${Config.Client.Tag} >> ${f} loaded in the Fun folder.`);
    client.Fun.set(props.help.name, props);
  });
});

console.log(' ')
console.log(`!! ${Config.Client.Tag} >> The Img unit is turned off, I didn't read in the Img folder.`)
/*
fs.readdir("../Files/Img/", (err, files) => {
  console.log(' ')
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0) return console.log(`!! ${Config.Client.Tag} >> I didn't detect any JavaScript files in the Img folder.`);
  jsfile.forEach((f, i) =>{
    let props = require(`../Files/Img/${f}`);
    console.log(`!! ${Config.Client.Tag} >> ${f} loaded in the Img folder.`);
    client.Img.set(props.help.name, props);
  });
});
*/
fs.readdir("../Files/Misc/", (err, files) => {
  console.log(' ')
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0) return console.log(`!! ${Config.Client.Tag} >> I didn't detect any JavaScript files in the Misc folder.`);
  jsfile.forEach((f, i) =>{
    let props = require(`../Files/Misc/${f}`);
    console.log(`!! ${Config.Client.Tag} >> ${f} loaded in the Misc folder.`);
    client.Misc.set(props.help.name, props);
  });
});
fs.readdir("../Files/Mod/", (err, files) => {
  console.log(' ')
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0) return console.log(`!! ${Config.Client.Tag} >> I didn't detect any JavaScript files in the Mod folder.`);
  jsfile.forEach((f, i) =>{
    let props = require(`../Files/Mod/${f}`);
    console.log(`!! ${Config.Client.Tag} >> ${f} loaded in the Mod folder.`);
    client.Mod.set(props.help.name, props);
  });
});
fs.readdir("../Files/Tools/", (err, files) => {
  console.log(' ')
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0) return console.log(`!! ${Config.Client.Tag} >> I didn't detect any JavaScript files in the Tools folder.`);
  jsfile.forEach((f, i) =>{
    let props = require(`../Files/Tools/${f}`);
    console.log(`!! ${Config.Client.Tag} >> ${f} loaded in the Tools folder.`);
    client.Tools.set(props.help.name, props);
  });
});
fs.readdir("../Files/Config/", (err, files) => {
  console.log(' ')
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0) return console.log(`!! ${Config.Client.Tag} >> I didn't detect any JavaScript files in the Config folder.`);
  jsfile.forEach((f, i) =>{
    let props = require(`../Files/Config/${f}`);
    console.log(`!! ${Config.Client.Tag} >> ${f} loaded in the Config folder.`);
    client.Config.set(props.help.name, props);
  });
});
fs.readdir("../Files/botAdmin/", (err, files) => {
  console.log(' ')
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0) return console.log(`!! ${Config.Client.Tag} >> I didn't detect any JavaScript files in the botAdmin folder.`);
  jsfile.forEach((f, i) =>{
    let props = require(`../Files/botAdmin/${f}`);
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
