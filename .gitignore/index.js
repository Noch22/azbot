const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("**");

bot.on('ready', function() {
    bot.user.setGame("Bienvenu à vous sur le serveur de Noch' 😜");
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
            .addField(thingToEcho, ".")
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
    
});

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "general").send(`Bienvenu ${member}`)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "general").send(`Hoo non, ${member} viens de nous quitter :cry: `)
})


bot.on("guildMemberAdd", member => {
    var role = member.guild.roles.find('name', '🎮Joueur🎮');
    member.addRole(role)
})    
