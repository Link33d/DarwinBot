const Discord = require("discord.js")

module.exports = async (client, message) => {

  let prefix = client.defaults.prefix

  let mencionar = new Discord.MessageEmbed()
    .setTitle(`**Olá ${message.author}**.`)
    .setDescription(`✅ Meu prefixo no servidor atualmente é \`${prefix}\`\n✅ Meu menu de comandos é \`${prefix}ajuda\` `)
    .setColor("#4e2022")
    .setFooter('Mensagem será removida automaticamente.')

  if(message.content.startsWith(`<@${client.user.id}>`) || message.content.startsWith(`<@!${client.user.id}>`)){
    return message.channel.send(mencionar) 
    .then(message =>{
      message.delete(20000)
    })
  }; 
    
  var args = message.content.substring(prefix.length).split(" ");
  let cmd = args.shift().toLowerCase();
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));

  if (command) {
    command.run(client, message, args);
  }

  /*
      if(command.timeout) {
        if(Timeout.has(`${message.author.id}${command.name}`)) {
            
            return message.channel.send(`**${u.x} | ${message.author} Você só pode usar esse comando a cada ${ms(command.timeout)}**`)
            .then(d => d.delete({timeout: 8000}))
        } else {
            Timeout.add(`${message.author.id}${command.name}`)
            setTimeout(() => {
                Timeout.delete(`${message.author.id}${command.name}`)
            }, command.timeout)
        }
    }
    db.add(`cmdsext`, 1)
    */
}