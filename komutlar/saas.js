const db = require('wio.db')
const Discord = require('discord.js')
 
 
exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(' Bu komutu kullanmak için **Mesajları Yönet** yetkisine sahip olmalısın!')
  if (args[0] == 'aç') {
    db.set(`ssaass_${message.guild.id}`, 'acik').then(i => {
      message.channel.send(`Artık bot Sa diyince As diyecek. Kapatmak için "\`!sa-as kapat\`" yazmalısın.`)
    })
  }
  if (args[0] == 'kapat') {
    db.set(`ssaass_${message.guild.id}`, 'kapali').then(i => {
      message.channel.send(`Artık biri sa diyince cevap vermicek.`)
    })
  }
 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sa-as-sistemi'],
  permLevel: 0,
  kategori: "Ayarlar"
};
 
exports.help = {
  name: 'sa-as',
  description: 'Sa As ayarlarsın.',
  usage: 'sa-as'
};

 async msg => {
 
 
  const i = await db.fetch(`ssaass_${msg.guild.id}`);
    if (i == 'acik') {
      if (msg.content.toLowerCase() == 'sa' || msg.content.toLowerCase() == 's.a' || msg.content.toLowerCase() == 'selamun aleyküm' || msg.content.toLowerCase() == 'sea') {
          try {
 
                  return msg.reply('** Aleyküm Selam, Hoşgeldin :)** ')
          } catch(err) {
            console.log(err);
          }
      }
    }
    else if (i == 'kapali') {
   
    }
    if (!i) return;
 
    };