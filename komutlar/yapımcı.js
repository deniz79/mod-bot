const Discord = require("discord.js");
exports.run = (client, message, args) => {
  const engin= new Discord.MessageEmbed()
    .setDescription("Yapımcım : <@718812851560644629>")
    .setColor("RANDOM")
  message.channel.send(engin);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yapımcım"
};