const Discord = require('discord.js')
const fs = require('fs');

module.exports =
{
  name:"status",
  aliases: ['ping', 'lantencia', 'uptime', 'ontime'],
  run: async (client, message, args) => {

    message.channel.send('Calculando..').then(m => {
      var milliseconds = parseInt((client.uptime % 1000) / 100),
        seconds = parseInt((client.uptime / 1000) % 60),
        minutes = parseInt((client.uptime / (1000 * 60)) % 60),
        hours = parseInt((client.uptime / (1000 * 60 * 60)) % 24);

      let ping = Math.round(client.ping) + `ms`
      let Latência = m.createdTimestamp - message.createdTimestamp 
      let uptime = hours + " horas, " + minutes + " minutos e " + seconds + " segundos!"

      let embed = new Discord.RichEmbed()
          .setTitle(`Status`)
          .setDescription(``)
          .addField(` :ping_pong: Ping`, ping, false)
          .addField(` :pushpin: Latência`, Latência + `ms`, false)
          .addField(` :chart_with_upwards_trend: Uptime`, uptime, false)

      m.edit(embed)
    
    })
  }
}
