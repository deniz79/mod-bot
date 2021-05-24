const Discord = require('discord.js');

exports.run = (client, message, args) => { 
  
  let yardım = new Discord.MessageEmbed()
  .setTitle('deniz Bot')
  .setAuthor(message.member.user.username, message.author.iconURL)
  .setDescription(' **deniz bot komutları** ')
  .addField('oyun', ' **oyun ile ilgili kodları gösterir** ')
  .addField('küfür-engel ', ' **küfür-engeler** ')
  .addField(' reklam-taraması', ' **reklam-taraması yapar ve reklam yapanları atar** ')
  .addField(' sunucu kur ', ' **sunucu kurla alakalı bilgileri verir** ')
  .addField(' yetkilerim', ' **sunucu ici yetkilerini söler** ')

  .setFooter('denizin has ama has  Botu')
  .setTimestamp()
  .setThumbnail('')
  .setURL('')
  .setColor('BLACK')
  message.channel.send(yardım)
  };

exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["help",'komutlar','y','yardm','yardim'], 
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'taslak', 
  usage: 'yardım'
};