const { MessageEmbed } = require('discord.js');
const { yetkili, yetki1, yetki2, basvuruLog } = require('../config.json');

module.exports = {
    name: 'cezali',
    description: 'Başvuru yapanı cezalıya atmanıza yarar ',
    /**
     * @param {Discord.Message} message
     * @param {Discord.Client} client 
     */
    async execute(message, args, client) {
        if(!message.member.roles.cache.get(yetkili)) return message.react('❌');
        if(!member) return message.reply(`Kişinin ID'sini belirtmeyi unuttunuz!`).then(msg => msg.delete({ timeout: 5000 }));

        member.roles.add([ayar.cezali])
        member.send(`Başvuru yapamamak üzere cezalıya atıldınız! Yanlışlık düşünüyorsanız yetkililerle iletişime geçin!`);
        message.channel.send(`Kişi cezalıya atıldı. Görüşmek üzere.`)
        if (message.channel.deletable)                
        setTimeout(() => {
            return message.channel.delete().catch(err => console.log(err));
        }, 20000);
        const channel = client.channels.cache.get(basvuruLog);
        if (channel) channel.send(new Discord.MessageEmbed().setDescription(`${member} kişisisebebiyle ${message.author} tarafından cezalıya atıldı!`))
        }
}



/*       
        const member = message.guild.members.cache.get(args[0] || message.channel.topic);
        if(!member) return message.reply(`Kişinin ID'sini belirtmeyi unuttunuz!`).then(msg => msg.delete({ timeout: 5000 }));
        member.send(`Başvurun reddedilmiştir!`);
        message.channel.send(`Başvuruyu başarıyla reddettiniz. Görüşmek üzere.`)
        if (message.channel.deletable)                
        setTimeout(() => {
            return message.channel.delete().catch(err => console.log(err));
        }, 20000);
        const channel = client.channels.cache.get(basvuruLog);
        if (channel) channel.send(new Discord.MessageEmbed().setDescription(`${member} kişisinin başvurusu ${message.author} tarafından kabul edilmedi!`));
    }
}*/