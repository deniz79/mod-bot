const Discord = require('discord.js');

exports.run = async (client, message, args) => {
if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");



const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
   
        member
          .ban({
            reason: 'zed',
          })
          .then(() => {
            message.reply(`${user.tag} Başarıyla Banlandı`);
          message.author.send(message.guild.name + " Serverında Bir Kullanıcıyı Banladığınızı Testpit Ettik")
          })
          .catch(err => {
                 message.reply('Kullanıcıyı Yasaklayamadım Bunun Sebebi Sunucunuzdaki Rol Sisteminden Kaynaklı Olabilir');
            console.error(err);
          });
      } else {
        message.reply("Kullanıcı Rolü Hatası");
      }
    } else {
      message.reply("Banlanacak Kullanıcdan Bahsetmen Lazım");
    }


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
}

exports.help = {
  name: 'banla'
};