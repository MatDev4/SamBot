const Discord = require('discord.js');
const misc = require('../misc.json');
const i18n = require('i18n');


module.exports.run = async (client, message, args) => {
    if(message.author.bot) return;
    if (message.author.id !== "263713074630885376") return message.reply(i18n.t('NOP_Botowner'))
  message.delete()
  let f = misc.fleche

    const Rules1Embed = new Discord.RichEmbed()
    .setTitle('Règlement du serveur SamBot')
    .setDescription('Tous les serveurs Discord ont un règlement, celui-ci aussi. Vous devez respecter le règlement pour éviter toutes sanctions inutiles.')
    .setThumbnail('https://media.discordapp.net/attachments/506502772326400000/517379314061279242/SamBot-Avatar.png?width=465&height=465')
    .addField('Index', `Page 1 ${f} \`Index\`\nPage 2 ${f} \`Respect\`\nPage 3${f} \`Bonne conduite\`\n`)
    .setFooter(`Page 1`)
    .setColor('#97b8ed')

    const Rules2Embed = new Discord.RichEmbed()
    .setTitle('Règlement du serveur SamBot')
    .setDescription('Tous les serveurs Discord ont un règlement, celui-ci aussi. Vous devez respecter le règlement pour éviter toutes sanctions inutiles.')
    .setThumbnail('https://media.discordapp.net/attachments/506502772326400000/517379314061279242/SamBot-Avatar.png?width=465&height=465')
    .addField("__**Respect**__", "```bash\n$1 ~ \"Les propos allant contre la religion, la nationalité (ou couleur de peau), des attributs moraux et physiques d'une personne sont prohibés.\"\n$2 ~ \"Les insultes ne sont pas acceptées : cependant, un petit t con xD envers un ami pour rigoler est accepté.\"\n$3 ~ \"Toutes les formes de harcèlements sont strictement interdit.\"\n$4 ~ \"La divulgation d'informations personnelles de soi ou d'autrui n'est pas tolérée.\"```")
    .setFooter(`Page 2`)
    .setColor('#97b8ed')

    const Rules3Embed = new Discord.RichEmbed()
    .setTitle('Règlement du serveur SamBot')
    .setDescription('Tous les serveurs Discord ont un règlement, celui-ci aussi. Vous devez respecter le règlement pour éviter toutes sanctions inutiles.')
    .setThumbnail('https://media.discordapp.net/attachments/506502772326400000/517379314061279242/SamBot-Avatar.png?width=465&height=465')
    .addField('__**Bonne conduite**__', "```bash\n$1 ~ \"Le spam abusif, les @mentions non-règlementaires ou sujets de conversations peu joyeux sont à éviter (ex: La mort, le suicide...)\"\n$2 ~ \"Les trolls ne sont pas les bienvenus sur le serveur, de même pour les trolls vocaux, comme le fait de troubler une conversation avec des bruitages sortis d'Internet.\"\n$3 ~ \"La publicité n'est pas la bienvenue, qu'elle soit en messages privés comme sur le serveur, n'hésitez pas à demander un partenariat !\"\n$4 ~ \"Merci de respecter les salons mis-à-votre disposition : n'exécutez pas de commande dans le salon 💬-général.\"\n$5 ~ \"Quand vous ne savez pas l'utilité d'un salon, regardez les messages épinglés et la description du salon, si cela ne vous aide pas, écrivez un petit message dans le salon en question demandant une explication.\"\n$6 ~ \"Les conversations privées sont privées ! Parlez-en entre vous en privé.\"```")
    .setFooter(`Page 3`)
    .setColor('#97b8ed')

    if(!args[0]) return message.channel.send("Page invalide ! `page1 ; page2 ; page3`").then( async msg => {
        await msg.react('❎')
    });
    if(args[0] === 'page1') return message.channel.send(Rules1Embed).then( async msg => {
        await msg.react('✅')
    });
    if(args[0] === 'page2') return message.channel.send(Rules2Embed).then( async msg => {
        await msg.react('✅')
    });
    if(args[0] === 'page3') return message.channel.send(Rules3Embed).then( async msg => {
        await msg.react('✅')
    });
}


module.exports.help = {
    name: "sam-rules"
}
