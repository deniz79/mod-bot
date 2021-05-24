const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    
   let başvurukanal = 'basvuru kanalının ID'

   
   if(!başvurukanal) {
       return message.channel.send(new Discord.MessageEmbed().setColor("BLACK").setDescription("**:x: Başvuru Kanal Ayarlanmamış**"))
   }



   let sebep = args.slice(1).join(' ')
  if (!sebep) return message.channel.send(new Discord.MessageEmbed().setColor("BLACK").setAuthor(`Sabito`, message.author.avatarURL()).setDescription(`**Gerekli Bilgiyi Yazmalısın**`))
  

    message.channel.send(new Discord.MessageEmbed().setColor("BLACK").setAuthor(`Yetki İstek Sistemi`, message.author.avatarURL()).setDescription(`**Yetkili Formunu Göndermek İstediğinize Emin Misiniz ? Lütfen __evet (e)__ veya __hayır (h)__ İle Cevap Verin.\n\n\`30\` Saniye İçerisinde İptal Edilcektir**`))
  let uwu = false; 
  while (!uwu) {
    const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 30000 }); 
    const Hyper = response.first().content
    if (Hyper == 'hayır' || Hyper == 'h') return message.channel.send(new Discord.MessageEmbed().setColor("BLACK").setDescription("**İşlem İptal Edildi**"))
    if (Hyper !== 'evet' && Hyper !== 'e') { 
      message.channel.send(new Discord.MessageEmbed().setAuthor(`Yetki İstek Sistemi`, message.author.avatarURL()).setColor("BLACK").setDescription("**Lütfen Sadece (e) evet Veya (h) hayır İle Cevap Verin**"))
    } 
    if (Hyper == 'evet' || Hyper == 'e') uwu = true 
  } 
  

  
   let embed = new Discord.MessageEmbed()
   .setColor("BLACK")
   .setThumbnail(message.author.avatarURL())
   .setDescription(`**<@${message.author.id}> Başvurunuz <#${başvurukanal}> Kanalına Gönderilmiştir.\nYetkililer En Kısa Sürede Dönüş Yapacaktır**`)
   .setFooter(`${message.author.tag} Tarafından Kullanıldı`)
   .setTimestamp()
   message.channel.send(embed);
  
    message.guild.channels.cache.get(başvurukanal).send(new Discord.MessageEmbed().setColor("BLACK").setDescription(`**Yetki İsteyen Kişi : <@${message.author.id}>\nFormu : ${sebep}**`));
}


exports.conf = {
    aliases: []
};
exports.help = {
    name: 'yetki-iste'
};
