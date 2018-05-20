const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("=");

bot.on('ready', function() {
    bot.user.setGame('😀HelpBot😀 prefix : "="')
    console.log("Connected");

});

bot.login(process.env.TOKEN);


bot.on('message', message => {
  if (message.content === "Salut"){
    message.reply("Bien le bonjour à toi");
    console.log("Commande Reply bonjour effectué");
}

if (message.content === "salut"){
    message.reply("Bien le bonjour à toi");
    console.log("Commande Reply bonjour effectué");
}

 if (message.content === prefix + "regles"){
    var embed = new Discord.RichEmbed()
        .setTitle("⚠️ Règles ⚠️")
        .setDescription("Les règles sont simples :")
        .addField("Être poli(e)", "Réspecter tout le monde", true)
        .addField("Respecter le staff", "Ecouter ce qu'on vous dit et le respecter", true)
        .addField("Ne pas insulter quiconque", "Sous peine de bannissement", true)
        .addField("N'hésitez pas :", "ABONNEZ-VOUS A MA CHAINE [YOUTUBE](https://www.youtube.com/c/NochYoutube)", true)
        .setColor('0x#42f49b')
        .setThumbnail("https://cdn.pixabay.com/photo/2012/04/12/20/12/x-30465_960_720.png")
    message.channel.sendEmbed(embed);
}

if (message.content.startsWith(prefix + "sondage")) {
    if(message.author.id == "267386028237651988"){
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ")
        var embed1 = new Discord.RichEmbed()
        .setDescription("Sondage")
        .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
        .setColor("0xB40404")
        .setTimestamp()
    message.guild.channels.find("name", "general").sendEmbed(embed1)
    .then(function (message) {
        message.react("✅")
        message.react("❌")
    
    }).catch(function() {
    });
    }else{
        return message.reply("Tu n'as pas la permission.")
    }


}

if (message.content.startsWith(prefix + "imp")) {
    if(message.author.id == "267386028237651988"){
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ")
        var embed1 = new Discord.RichEmbed()
        .setDescription("VOTRE ATTENTION @everyone")
        .addField("", thingToEcho, true)
        .setColor("0xff9d00")
    message.guild.channels.find("name", "general").sendEmbed(embed1)
    .then(function (message) {
        message.react("⚠")
    
    }).catch(function() {
    });
    }else{
        return message.reply("Tu n'as pas la permission.")
    }


}
  
  
  if(message.content === prefix + "help"){
        var embed2 = new Discord.RichEmbed()
        .setTitle("📌 Commandes 📌")
        .addField("Help", "Afficher ce message : =help")
        .addField("Report", "Raporter un joueur aux modérateurs et plus : =report [@utilisateur] [raison]")
        .addField("Botinfo", "Voir les informations du bot : =botinfo")
        .addField("❌ Modération ❌", "Pour les grades à partir de Modérateur")
        .addField("Kick", "Permet de kick un utilisateur : =kick [@utilisateur] [raison]")
        .addField("Ban", "Permet de bannir un utilisateur : =ban [@utilisateur] [raison]")
        .addField("🎲Jeux🎲", "Pour s'amuser tout seul ou entre amis !")
        .setColor("#00c7ff")
      
        message.author.sendMessage(embed2);
        message.channel.send(`${message.author}, les commandes vous on été envoyer en privé.`)
        }

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
    if(cmd === `${prefix}kick`){
  
      //!kick @daeshan askin for it
  
      let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!kUser) return message.channel.send("Impossible de trouver l'utilisateur !");
      let kReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
      if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cette personne ne peux pas être kick !");
  
      let kickEmbed = new Discord.RichEmbed()
      .setDescription("~Kick~")
      .setColor("#e56b00")
      .addField("Utilisateur expulsé", `${kUser} with ID ${kUser.id}`)
      .addField("Expulsé par", `<@${message.author.id}> with ID ${message.author.id}`)
      .addField("Expulsé dans", message.channel)
      .addField("Expulsé à", message.createdAt)
      .addField("Pour", kReason);
  
      let kickChannel = message.guild.channels.find(`name`, "incidents");
      if(!kickChannel) return message.channel.send("Can't find incidents channel.");
      message.guild.member(kUser).kick(kReason);
      kickChannel.send(kickEmbed);
      message.guild.channels.find("name", "general").send(`${kUser} expulsé pour ${kReason} :angry: `)
  
      return;
    }
  
    if(cmd === prefix + `ban`){
  
      let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!bUser) return message.channel.send("Impossible de trouver l'utilisateur !");
      let bReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");
      if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cette personne ne peut pas être banni(e) !");
  
      let banEmbed = new Discord.RichEmbed()
      .setDescription("~Ban~")
      .setColor("#bc0000")
      .addField("Utilisateur banni", `${bUser} id : ${bUser.id}`)
      .addField("Banni par", `<@${message.author.id}> id : ${message.author.id}`)
      .addField("Banni dans le channel ", message.channel)
      .addField("Banni à", message.createdAt)
      .addField("Banni Pour", bReason);
  
      let incidentchannel = message.guild.channels.find(`name`, "incidents");
      if(!incidentchannel) return message.channel.send("Impossible de trouver le salon");
  
      message.guild.member(bUser).ban(bReason);
      incidentchannel.send(banEmbed);
      message.guild.channels.find(`name`, "general").send(`:warning: L'utilisateur ${bUser} à été banni pour ${bReason} :warning: `)
  
  
      return;
    }
  
  
    if(cmd === prefix + `report`){
  
      //!report @ned this is the reason
  
      let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!rUser) return message.channel.send("Utilisateur Introuvable");
      let rreason = args.join(" ").slice(22);
  
      let reportEmbed = new Discord.RichEmbed()
      .setDescription("Reports")
      .setColor("#15f153")
      .addField("Utilisateur report", `${rUser} with ID: ${rUser.id}`)
      .addField("Report par", `${message.author} with ID: ${message.author.id}`)
      .addField("Dans le salon", message.channel)
      .addField("À", message.createdAt)
      .addField("Pour", rreason);
  
      let reportschannel = message.guild.channels.find(`name`, "reports");
      if(!reportschannel) return message.channel.send("Couldn't find reports channel.");
  
  
      message.delete().catch(O_o=>{});
      reportschannel.send(reportEmbed);
  
      return;
    }
  
    if(cmd === prefix + `botinfo`){
      let bicon = bot.user.displayAvatarURL;
      let botembed = new Discord.RichEmbed()
      .setDescription("Bot Information")
      .setColor("#15f153")
      .setThumbnail(bicon)
      .addField("Nom du bot", bot.user.username)
      .addField("Crée le", bot.user.createdAt)
      .addField("Crée par", "Nσcн'#9400")
      .addField("Sa chaîne YouTube", "[HERE](https://www.youtube.com/c/NochYoutube)");
  
      message.channel.send(botembed);
    }

});
