const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = function (client, message, args)  {

  let Shréwd = new Discord.MessageEmbed()
    .setColor("#70ff70")
    .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
    .setTimestamp();


  // Tag
  let tagg = "ተ";
  let taggg = message.guild.members.cache.filter(m => m.user.username.includes(tagg)).size;


  // Toplam Üye Sayısı
  let toplam = message.guild.memberCount;


  // Durumlar
  let dnd = message.guild.members.cache.filter( dnd => dnd.presence.status === "dnd").size;
  let idle = message.guild.members.cache.filter( idle => idle.presence.status === "idle").size;
  let online = message.guild.members.cache.filter( online => online.presence.status === "online").size;

  // Ses Kanalları
  const voiceChannels = message.guild.channels.cache.filter(c => c.type === "voice")
  let count = 0;

  for (const [id, voiceChannel] of voiceChannels)
    count += voiceChannel.members.size;


  // Yazı Kanalları
  let textChannels = message.guild.channels.cache.filter(m => m.type === "text").size;


  // Boost Sayısı
  let boost = message.guild.premiumSubscriptionCount;

  
  const sudeaskim = Shréwd.setDescription(` <a:mavi:809793923119054868> **Sunucudaki Kullanıcı Sayısı;** ${toplam} \n
  ** Sunucuda Tagımızı Alan Kullanıcı Sayısı;** ${taggg} \n
  ** Sesli Kanallarda Bulunan Kullanıcı Sayısı;** ${count}\n
  **  Sunucuda Bulunan Toplam Yazı Kanalları Sayısı;** ${textChannels}\n
  **  Sunucuda durumu Rahatsız Etmeyinde Olan Üye Sayısı;** ${dnd}\n
  ** Sunucuda durumu Boşta Olan Üye Sayısı;** ${idle}\n
  ** Sunucuda durumu Online Olan Üye Sayısı;** ${online}\n
  **  Sunucudaki Boost Sayısı;** ${boost}`);
  
  message.channel.send(sudeaskim);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "say",
  usage: ".say",
  desscription: ".say"
};  
