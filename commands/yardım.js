const emote = require("../emotes.json");
const config = require("../config.js");

const Discord = require('discord.js');

module.exports = {
  run: async (client, message, args) => {
   
  let commands = client.commands.filter(x => !x.config.enabled).map(x => `> • **__${config.prefix+x.config.name}__** 🠮 ${x.config.desc}`).join("\n")
    
  const row = new Discord.ActionRowBuilder()
			.addComponents(
				new Discord.ButtonBuilder()
					.setLabel('Destek Sunucusu')
          .setEmoji("📕")
          .setURL("https://discord.gg/HK8z9TtRvk")
					.setStyle(Discord.ButtonStyle.Link),
        new Discord.ButtonBuilder()
					.setLabel('Botu davet et')
          .setEmoji("📘")
          .setURL("https://discordapp.com/api/oauth2/authorize?client_id=996343874509353122&permissions=8&scope=bot")
					.setStyle(Discord.ButtonStyle.Link),
        new Discord.ButtonBuilder()
					.setLabel('Bota oy ver')
          .setEmoji("📗")
          .setURL("https://top.gg/tr/bot/996343874509353122")
					.setStyle(Discord.ButtonStyle.Link),
			);

    
  const   
  
  const embed = new Discord.EmbedBuilder()
  .setAuthor({ name: "Yardım menüsü | RomanBot", iconURL: client.user.displayAvatarURL({ dynamic: true })})
  .setDescription("• Yardım almak için en doğru yerdesin, bir sorunun olursa destek sunucusunda seni bekliyor olacağız.")
  .addFields({ name: `<:new1:1025306297677135923><:new2:1025306296553066576> **|** Yenilikler/Güncellemeler`, value: `> • Son güncelleme notları için [tıkla](https://discord.gg/E66J2HzraQ).` })
  .addFields({ name: `<:global:1025305700257243176> **|** Tüm komutlar`, value: `${commands} ` })
  .setColor("#36393F")
  .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
  
  message.reply({ embeds: [embed], components: [row] })

},
  config: {
    name: "yardım",
    aliases: [""],
    desc: "RomanBot'un komutlarını gösterir.",
    enabled: false
  }
}; 

// https://top.gg/tr/bot/996343874509353122