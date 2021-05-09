const Discord = require('discord.js');
const config = require('../config.json');

module.exports = {
    name: 'help',
    description: 'help for the bot',
    /**
     * @param {Discord.Message} message
     */
    execute(message) {
        message.channel.send(
            new Discord.MessageEmbed()
                .setTitle('Başvuru!')
                .setDescription(`Botumuzun Prefixi:  \`${config.prefix}\``)
                .addField('Başvuru Komutu:', '`başvuru`')
                .addField('Yetkili Komutları:', '`reddet`, `onayla`,`cezali`')
                .setColor('RANDOM')
                .setFooter("Aniolek Başvuru Botu.")
        );
    }
}