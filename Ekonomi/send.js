const Discord = require("discord.js");
const db = require('quick.db')
module.exports.run = async (client, message, args) => {
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  let para = db.fetch(`para_${message.author.id}`)
  
  let etiket = message.mentions.users.first()

  let  miktar = args[1]
  
  if(!etiket) return message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))                   
                      .setDescription(`You must tag a user to send money!`))
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  if(! miktar) return message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                      .setDescription(`You must enter the amount of money you want to send!
                     \`send! <quantity || all>\``))
  if(miktar < 0 ||  miktar.startsWith('0') ) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`<a:Wrongs:902312437863309382> The amount you entered is not a valid number !?`));
 if(miktar === 'all' || miktar === 'all') {
   if(para < 0) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`<a:Wrongs:902312437863309382> You don't have any money now.`))//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
db.add(`para_${etiket.id}`, para)
db.add(`para_${message.author.id}`, -para)   
message.channel.send(new Discord.MessageEmbed()
.setColor("GREEN")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`<a:rights:902312393474965604> Successful, ${etiket}'a ${para} 💸 you sent!`))
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
 } else {
  if(isNaN(miktar)) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`<a:Wrongs:902312437863309382> The amount you entered is not a valid number !?`))
 } //== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  if(etiket.id === message.author.id) return message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))               
                      .setDescription(`<a:Wrongs:902312437863309382> You can't send money to yourself!`))
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  if(miktar > para) return message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))                 
                      .setDescription(`<a:Wrongs:902312437863309382> Now in your hand ${para ? "just " + para + " 💸 there is!": "there is no money!"} `))
if(miktar === 'all' || miktar === 'all') {
  return;
}  else { //== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  message.channel.send(new Discord.MessageEmbed()
                .setColor('GREEN')
                .setThumbnail('https://media.discordapp.net/attachments/889817958086488074/897864885675884544/7bcba55187df137b234567a0337e27df.gif?width=533&height=400')
                .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))  
.setDescription(`**__<a:rights:902312393474965604> Payment Transferred!__**

You Paid ${etiket}
Add Balance 💸 __${miktar}+__
Send By ${message.author.username}`))
  db.add(`para_${etiket.id}`, miktar)
  db.add(`para_${message.author.id}`, -miktar)

}};
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["se"," send","give"],
  permLevel: 0
};

exports.help = {
  name: 'send',
};//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
