exports.run = (client, message, args) => {
  if (message.author.id !== '429631941151686656') { // definindo que, apenas quem tiver o ID dentro dessa estrutura, pode utilizar esse comando
    return message.channel.send(`apenas meu desenvolvedor pode utilizar esse comando.`)
  }
  let id = args[0];
  if (!id) id = message.guild.id;
  return message.guild.leave(id);
}

exports.help = {
  name: 'leave',
  description: 'Leave the server that the bot is in.',
  usage: 'leave',
  aliases: ['']
};
  