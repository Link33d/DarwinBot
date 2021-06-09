const Discord = require('discord.js');
const fs = require('fs');
const moment = require('moment');
const client = new Discord.Client();
moment.locale('pt-BR');
const hora = moment().format('HH:mm:ss')
const dia = moment().format('DD-MM-YYYY')

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");
["commandHandler", "eventHandler"].forEach(handler => {
  require(`./utils/${handler}`)(client);
});

client.defaults = {
  owner: "",
  prefix: "d."
}
require('dotenv/config');

client.on('ready', () => { 
  console.log(`[Hora: ${hora} Dia: ${dia}] Bot foi iniciado com sucesso.`);

  client.user.setActivity('with my bot friends!');

});  



client.on("guildDelete", guild => {
  var canal = client.channels.get("720832431598338058");

     let leave = new Discord.RichEmbed()
      .setTitle(`Sai!`)
      .setDescription(`Me excluiram de um servidor! \`${guild.name} [${guild.id}]\`\n\n__**Informações**__\n👥 » Membros: \`${guild.memberCount}\`\n👑 » Proprietário: \`${guild.owner.user.tag}\`\n🏳️ » Região: \`${guild.region}\``)
      .setColor("#ff0000")
  canal.send(leave)
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./${command}.js`)];
      let cmd = require(`./${command}.js`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.login(process.env.TOKEN);
