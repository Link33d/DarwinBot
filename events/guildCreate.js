module.exports = async (client, guild) => {

    let channelID;
    let channels = guild.channels;
    channelLoop:
    for (let c of channels) {
        let channelType = c[1].type;
        if (channelType === "text") {
            channelID = c[0];
            break channelLoop;
        }
    }
    
    let channel = client.channels.get(guild.systemChannelID || channelID);
    channel.send(`Obrigado por me convidar para este servidor! Por favor, digite /help para as informações que você precisará para que o bot funcione corretamente.`);
    
    var canal = client.channels.get("720832431598338058");
        let join = new Discord.RichEmbed()
        .setTitle(`Entrei!`)
        .setDescription(`Me adicionaram em um servidor! \`${guild.name} [${guild.id}]\`\n\n**Informações**\n👥 » Membros: \`${guild.memberCount}\`\n👑 » Proprietário: \`${guild.owner.user.tag}\`\n🏳️ » Região: \`${guild.region}\``)
        .setColor("#00ff00")
    //canal.send(join);
    
}