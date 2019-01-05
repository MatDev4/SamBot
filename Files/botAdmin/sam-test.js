const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
  if (message.author.id !== "263713074630885376") return message.reply("Stop")
  if(message.author.bot) return;
  message.delete()
message.channel.send("...")
}


module.exports.help = {
    name: "sam-test"
}
