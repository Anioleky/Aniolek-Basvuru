const Discord = require('discord.js');
const moment = require('moment');
const ayar = require("../config.json");
const ms = require('ms')
module.exports = {
    name: 'başvuru',
    description: 'Başvuru yapmanızı sağlar.',
    /**
     * @param {Discord.Message} message
     * @param {Discord.Client} client 
     */
    async execute(message, args, client) { 
      if([ayar.cezali].some(role => message.member.roles.cache.get(role))) return message.react('❌')
      if(!message.member.user.username.includes(ayar.tag)) return message.reply(`Tagımızı almadığın için işlemini tamamlayamıyorum.`).then(x => x.delete({timeout: 5000}));
      if(!message.guild.id == ayar.sunucu) return message.reply("Bu sunucuda kullanamazsın, Shine sunucusuna git!")
  if(message.channel.id == ayar.basvuruKanal){
  var filter = m => m.author.id === message.author.id;
        message.react('✅');

        let modRole = message.guild.roles.cache.find(r => r.id === ayar.yetkili);

        if (!modRole) {
            throw new Error('cmd.errors.NEW: Yetkili rolü bulunamadı!');
        }

        message.guild.channels.create(`${message.author.username}-${message.author.discriminator}`, {
            topic: message.author.id,
            type: 'text',
            parent: (ayar.basvuruKategori),
            permissionOverwrites: [
                { id: message.guild.id, deny: ['VIEW_CHANNEL'] },
                { id: modRole.id, allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'] },
                { id: message.author.id, allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'] }
            ]
        }).then(c=>
     
  
      c.send(`:eight_pointed_black_star:| **${message.author} Hoşgeldin! Bizi desteklediğin için öncelikle teşekkürler! Bir kaç sorum olacak. Öncelikle isim ve yaş alabilir miyim ?**`).then(msg => {
      c.awaitMessages(filter, {
        max: 1,
        time: 40000,
        errors: ['time']
      }).then(collected => {
        let room = client.channels.cache.get(ayar.basvuruLog)
        if(!room) return message.channel.send(':heavy_multiplication_x:| **Böyle bir kanal bulamadım**');
        room = collected.first().content;
        let dersadi = collected.first().content;
        collected.first();
        
        c.send(':eight_pointed_black_star:| **Cevabın için teşekkürler! Peki ya başka sunucuda hiç yetkili oldun mu? İsimlerini verebilir misin ?**').then(msg => {
            c.awaitMessages(filter, {
              max: 1,
              time: 40000,
              errors: ['time']
            }).then(collected => {
              
              let duration = collected.first().content
            collected.first()

            c.send(':eight_pointed_black_star:| **Peki ya günde kaç invite yapabilirsin ? Bunu sadece sayı olarak belirtirsen sevinirim. Örn: 20-30-40**').then(msg => {
          c.awaitMessages(filter, {
            max: 1,
            time: 40000,
            errors: ['time']
          }).then(collected => {
            
            let sınıf = collected.first().content
          collected.first()
            
            c.send(':eight_pointed_black_star:| **Günde ne kadar aktifsin ? Genel de akşamları yada sabahları diyerek cevap verebilirsin!**').then(msg => {
          c.awaitMessages(filter, {
            max: 1,
            time: 40000,
            errors: ['time']
          }).then(collected => {
            
            let dersid = collected.first().content
          collected.first()
            
             c.send(':eight_pointed_black_star:| **Seslerde, chatte çıkan kavgalarda yapıcı olacağına inanıyor musun ?**').then(msg => {
          c.awaitMessages(filter, {
            max: 1,
            time: 40000,
            errors: ['time']
          }).then(collected => {
            
            let derspw = collected.first().content
          collected.first()
            
             c.send(':eight_pointed_black_star:| **Ek görevler ister misin ? Chat sorumlusu - Ses sorumlusu vb**').then(msg => {
          c.awaitMessages(filter, {
            max: 1,
            time: 40000,
            errors: ['time']
          }).then(collected => {
            
            let derssd = collected.first().content
          collected.first()
          
            
            
            
          c.send(':eight_pointed_black_star:| **Son olarak, sunucumuza tavsiye,reklam sayesinde mi geldiniz ?**').then(msg => {
              
              c.awaitMessages(filter, {
                max: 1,
                time: 40000,
                errors: ['time']
              }).then(collected => {
                let guvenli = collected.first().content;
                title = collected.first().content;
                collected.first()
                c.send(`Başvuru sonlanmıştır yetkililerin cevaplarını bekliyorum..`)
                c.send(`<@&${ayar.yetkili}>\`\`\`\n${ayar.prefix}onayla\n${ayar.prefix}reddet\n${ayar.prefix}cezali\nKomutları ile işlemi tamamlayabilirsin! \`\`\``)
                message.author.send("Başvurunuz alınmıştır. En kısa zamanda dönülecek!")
                  
                let giveEmbed = new Discord.MessageEmbed()
                  .setColor("#f558c9")
                  .setDescription(`Adı ve Yaşı: ${dersadi}\nDeneyim var mı? ${duration}\nGünde yapabileceği invite sayısı: ${sınıf}\nAktiflik durumu: ${dersid}\nYapıcı mı?: ${derspw}\nEk Görev İster Mi ?: (${derssd})\nBize nerden ulaştın ?:${guvenli}\n\nBaşvuru yapan kişinin bilgileri;
ID: ${message.author.id}
Kişi: ${message.author.tag}
Etiketli hali: <@${message.author.id}>`)
                  .setFooter(message.author.username + " Bizi Destekleyen Birisi Daha! ", message.author.avatarURL);
               client.channels.cache.get(ayar.basvuruLog).send(giveEmbed)                 
{
  let memberr = message.member.id;
        c.createOverwrite(memberr, {
        VIEW_CHANNEL: false,
        SEND_MESSAGES: false
        })}
//1800000);
            
              });
            });
          });
          });
        });
      });
          });
    });
      
  
});
})
      })
      })
        })
      })
   ) }else{
      return message.reply(`Bu komut yalnızca <#${ayar.basvuruKanal}> kanalında çalışmaktadır.`)
    }
} }
////////////Aniolek Tarafından Kodlanmıştır.////////////