const { MessageEmbed } = require('discord.js');
const { yetkili, yetki1, yetki2, basvuruLog } = require('../config.json');

module.exports = {
    name: 'onayla',
    description: 'Başvuruyu onaylamanıza yarar ',
    async execute(message, args, client) {
        if(!message.member.roles.cache.get(yetkili)) return message.react('❌');
        const member = message.guild.members.cache.get(args[0] || message.channel.topic);
        if(!member) return message.reply(`Kişinin ID'sini belirtmeyi unuttunuz!`).then(msg => msg.delete({ timeout: 5000 }));
        member.roles.add([yetki1, yetki2]); 
        member.send(`Başvurun başarıyla onaylanmıştır! Desteklerin için teşekkürler!`);
        message.channel.send(`Başvuruyu başarıyla onayladınız ve roller verildi. Kanal 20 saniye içerisinde silinecektir. Görüşmek üzere.`)
        if (message.channel.deletable)                
        setTimeout(() => {
            return message.channel.delete().catch(err => console.log(err));
        }, 20000);
        const channel = client.channels.cache.get(basvuruLog);
        if (channel) channel.send(new MessageEmbed().setDescription(`${member} kişisinin başvurusu ${message.author} tarafından onaylandı ve <@&${yetki1}>, <@&${yetki2}> rolleri verildi!!`));
    }
}
////////////Aniolek Tarafından Kodlanmıştır.///////