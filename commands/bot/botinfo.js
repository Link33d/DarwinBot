const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const moment = require('moment'); // puxando o NPM 'moment' (instale utilizando: npm i moment)
moment.locale('pt-BR') // definindo o moment para BR

module.exports =
{
    name: "botinfo",
    alises: ['infobot', 'sobre', 'about'],
    run: async (client, message, args) => {

        // sistema para identificar a quanto tempo o bot esta online!
        let dias = 0; 
        let week = 0; 
    
        let uptime = ``; 
        let totalSegundos = (client.uptime / 1000); 
        let horas = Math.floor(totalSegundos / 3600); 
        totalSegundos %= 3600; 
        let minutos = Math.floor(totalSegundos / 60); 
        let segundos = Math.floor(totalSegundos % 60); 
    
        if(horas > 23){
            dias = dias + 1;
            horas = 0; 
        }
    
        if(dias == 7){ 
            dias = 0; 
            week = week + 1; 
        }
    
        if(week > 0){ 
            uptime += `${week} week, `;
        }
    
        if(minutos > 60){ 
            minutos = 0;
        }
    
        uptime += `${horas}h ${minutos}m ${segundos}s`;


        // criando umas variaveis que podem ser clicadas e redirecionadas a um site
        var linguagem = ('[Node.js](https://nodejs.org/en/)') 
        var livraria = ('[Discord.js](https://discord.js.org/#/)')
        var git = ('[Discord-Lab](https://github.com/young-js/Discord-Lab)')
        var criador = ('[SukinNhoツ#8432](https://twitter.com/sukinnho)')
        

        let embed2 = new Discord.MessageEmbed()
        .setTitle(`Sobre`)
        .setDescription(``)
        .addField(`Nome:`, `\`${client.user.username}\``, false)
        .addField(`Usuários:`, ` ${client.users.size}`, false)
        .addField(`Servidores:`, ` ${client.guilds.size}`, false)
        .addField(`País:`, `:flag_br: Brazil`, false)
        .addField(`Total de comandos:`, client.commands.size, false)
        .addField(`**Minha linguaguem**`, linguagem, false)
        .addField(`**Minha livraria**`, livraria, false)
        .addField(`**Latência**`, `${parseInt(client.ping)} ms`, false)
        .addField(`**Estou acordado há**`, uptime, false)
    //    .addField(`**GitHub**`, git, true)
        .addField(`**Criador**`, criador, false)
        .setFooter(`${client.user.username} foi criado pelo SukinNho`, client.user.avatarURL)
        .setThumbnail('https://cdn.discordapp.com/avatars/627704612857839629/bf7034526da28c7d3c8fbf4f0af98a3e.png?size=2048')
        .setTimestamp()
        .setColor("ORANGE")

        message.channel.send(embed2);

    }

}
