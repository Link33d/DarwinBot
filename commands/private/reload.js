exports.run = (client, message, args) => {
  if (message.author.id !== '429631941151686656') { // definindo que, apenas quem tiver o ID dentro dessa estrutura, pode utilizar esse comando
    return message.channel.send(`apenas meu desenvolvedor pode utilizar esse comando.`)
  }
  const commandName = args[0];

  if (!client.commands.has(commandName)) {
    return message.channel
      .send(`> **${message.author}** \n > **Comando inexistente!**`)
      .then(m => m.delete(5000));
  }

  delete require.cache[require.resolve(`./${commandName}.js`)];
  
  message.channel.send(`> ${message.author} \n > **O comando \`${commandName}\` foi recarregado com sucesso!**`);
  client.commands.delete(commandName);
  const props = require(`./${commandName}.js`);
  client.commands.set(commandName, props);

};

exports.help = {
  name: 'reload',
  description: 'Reloads the command file, if it\'s been updated or modified.',
  usage: 'reload <commandname>',
  aliases: ['recarregar']
};
