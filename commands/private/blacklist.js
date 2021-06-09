const Discord = require("discord.js");
const fs = require('fs');

exports.run = async (client, message, args) => {
  if (message.author.id !== '429631941151686656') { // definindo que, apenas quem tiver o ID dentro dessa estrutura, pode utilizar esse comando
    return message.channel.send(`apenas a equipe de desenvolvedores pode utilizar esse comando.`)
  }
  let blacklist = JSON.parse(fs.readdirSync("../../database/blacklist.json", "utf8"));
  const amount = parseInt(membro);

  let membro = message.mentions.users.first() || message.guild.members.get(args[0]);
  if (!membro) {
    if (!args.join(" ") || (!membro)) return message.channel.send('porfavor mencione alguem ou informe um id valido!')
    if (isNaN(args.join(" "))) {
      return message.reply('porfavor mencione alguem ou informe um id valido!');
    }
  } else membro = membro.id
  let motivo = args[1]
    
  if (!blacklist[membro]) {
    blacklist[membro] = {
      id: membro.id,
      state: true,
      name: membro.username,
      Motivo: motivo
    }
    message.channel.send(`usuario ${membro.username} foi pra listra legra com sucesso!`)
    membro.send("Você estar na lista negra :)  por: \` + motivo + \` ")    
    fs.writeFile("././database/blacklist.json", JSON.stringify(blacklist), err => {
      if(err) throw err;
      });
    
    client.guilds.forEach((guild) => {
    if(guild.ownerID === membro) {
      message.guild.leave(guild.id)
    }
  })

  return;
  }
  if (blacklist[membro].state === true) {
      message.reply("That user have already been blacklisted");
  return;
  };

}

exports.help = {
    name: 'blacklist',
    description: 'blacklist a user.',
    usage: 'blacklist [userid]',
    aliases: ['']
  };