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

var prefix = (botconfig.prefix)

client.login(process.env.TOKEN);
