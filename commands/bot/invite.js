const Discord = require("discord.js");
const fs = require("fs");

module.exports = 
{
    name: 'invite',
    aliases: ['convite'],
    run: async (client, message, args) => 
    {
        let embed = new Discord.MessageEmbed()
        .setDescription('me invite para seu servidor, \npara isso [clique aqui](https://discord.com/oauth2/authorize?client_id=704762083740221582&permissions=8&scope=bot)')
        
        message.channel.send(embed);
    }
}


  