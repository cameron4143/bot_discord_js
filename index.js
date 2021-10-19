const Discord = require('discord.js');
const bot = new Discord.Client();
const token = require("./token.json");
const bdd = require("./bdd.json");
const fstat = require('fs');

bot.on('ready',()=>{
    console.log("le bot est allumé");
    bot.user.setStatus("online");
    bot.user.setActivity(":3",{type: 'WATCHING'});
});

bot.on("guildMemberAdd", member => {
    member.send("Salut "+ member.user.username + "-kun ! Je me présente, je suis Senpai ! J'espère que tu sauras t'entendre avec nous et sache que si tu as besoin de quoi que ce soit n'hésite pas à demander à tes camarades de serveur ! ^^ ");
    bot.channels.cache.get('892672702597439491').send(`Bienvenue sur le serveur `+ member.user.username + `-kun !`);
    member.roles.add('897561966715998228');
});

bot.on("message", message => {

    if(message.content.startsWith("!gif_smile")){
        message.delete();
        if(message.member.hasPermission('ADMINISTRATOR')){
            if(message.content.length > 12){
                gif_smile = message.content.slice(11);
                bdd["gif_smile"].push(gif_smile);
                Savebdd();
            }
        }
    }

    if(message.content.startsWith("!gif_cry")){
        message.delete();
        if(message.member.hasPermission('ADMINISTRATOR')){
            if(message.content.length > 10){
                gif_cry = message.content.slice(9);
                bdd["gif_cry"].push(gif_cry);
                Savebdd();
            }
        }
    }

    if(message.content.startsWith("!gif_angry")){
        message.delete();
        if(message.member.hasPermission('ADMINISTRATOR')){
            if(message.content.length > 12){
                gif_angry = message.content.slice(11);
                bdd["gif_angry"].push(gif_angry);
                Savebdd();
            }
        }
    }

    if(message.content.startsWith("!gif_blush")){
        message.delete();
        if(message.member.hasPermission('ADMINISTRATOR')){
            if(message.content.length > 12){
                gif_blush = message.content.slice(11);
                bdd["gif_blush"].push(gif_blush);
                Savebdd();
            }
        }
    }

    if(message.content.startsWith("!gif_party")){
        message.delete();
        if(message.member.hasPermission('ADMINISTRATOR')){
            if(message.content.length > 12){
                gif_party = message.content.slice(11);
                bdd["gif_party"].push(gif_party);
                Savebdd();
            }
        }
    }

    if(message.content.startsWith("!gif_laugh")){
        message.delete();
        if(message.member.hasPermission('ADMINISTRATOR')){
            if(message.content.length > 12){
                gif_laugh = message.content.slice(11);
                bdd["gif_laugh"].push(gif_laugh);
                Savebdd();
            }
        }
    }

    if(message.content.startsWith("!smile")){
        bot.channels.cache.get('897727290216173638').send(bdd["gif_smile"][parseInt(Math.random()*bdd["gif_smile"].length)]);
    }

    if(message.content.startsWith("!cry")){
        bot.channels.cache.get('897727290216173638').send(bdd["gif_cry"][parseInt(Math.random()*bdd["gif_cry"].length)]);
    }

    if(message.content.startsWith("!angry")){
        bot.channels.cache.get('897727290216173638').send(bdd["gif_angry"][parseInt(Math.random()*bdd["gif_angry"].length)]);
    }

    if(message.content.startsWith("!blush")){
        bot.channels.cache.get('897727290216173638').send(bdd["gif_blush"][parseInt(Math.random()*bdd["gif_blush"].length)]);
    }

    if(message.content.startsWith("!party")){
        bot.channels.cache.get('897727290216173638').send(bdd["gif_party"][parseInt(Math.random()*bdd["gif_party"].length)]);
    }

    if(message.content.startsWith("!laugh")){
        bot.channels.cache.get('897727290216173638').send(bdd["gif_laugh"][parseInt(Math.random()*bdd["gif_laugh"].length)]);
    }

    if(message.content.startsWith("!histoire_tragedie")){
        console.log("debut histoire");
        bot.channels.cache.get('897782601853566986').send("C’est l\'histoire de deux moches tourtereaux qui ne se sont pas rencontrés d\'une manière jolie. Un beau soir de pluie bien torrentielle ces deux tourtereaux se sont dit : pourquoi pas s\'intéresser à l\'autre  et d\'un coup…");
        bot.channels.cache.get('897782601853566986').send('le coup de foudre…')
        bot.channels.cache.get('897782601853566986').send('ça a été le déclic pour eux deux…')
        bot.channels.cache.get('897782601853566986').send('Il fallait courir pour éviter la foudre !!')
        bot.channels.cache.get('897782601853566986').send('Il courut jusqu\'à l\'appartement de la fille et attendu que la météo se calme.')
        bot.channels.cache.get('897782601853566986').send('ecrivez "!suite1" pour qu\'ils ne soient pas précoces et "!suite2" pour qu\'ils le soient')
    }

    if(message.content.startsWith("!suite1")) {
        console.log("suite 1 histoire");
        bot.channels.cache.get('897782601853566986').send('Les deux tourtereaux sont maintenant à l\'abris de la foudre, le jeune homme se nommant Jean-Marie décida que c\'était le moment de soulever fortement Pierrette. Il lui parla pendant de longues heures jusqu\'au moment où il aperçut LA faille, il décida d\'en parler à Pierrette et lui dit : "Pierrette tu as une fissure dans ton mur". Elle lui répondit qu\'elle le savait déjà mais qu\'elle souhaitait plutôt qu\'il lui fissure son mur interne. Jean-Marie resta sur ses appuis pour réceptionner le coup de pied violent de Lionel Messi, Jean-Marie su rebondir face à la réponse de Lion.... ')
        bot.channels.cache.get('897782601853566986').send('Euh Pierrette et demanda')
        bot.channels.cache.get('897782601853566986').send('"....."')
        bot.channels.cache.get('897782601853566986').send('"ou sont les toilettes ?"')
        bot.channels.cache.get('897782601853566986').send('une fois revenu Jean-Marie se met à nu devant Pierrette et lui parla de ses sentiments, Pierrette répondit " tu parles trop, à poil Homme" ce que Jean-Marie s\'empressa d\'effectuer.')
        bot.channels.cache.get('897782601853566986').send('Jean-Marie pratique actuellement le coller serrer avec Pierrette ce fut un moment fort en coup de rein, à la fin Jean-Marie se rendit compte que.... ')
        bot.channels.cache.get('897782601853566986').send('Le portrait de Pierrette ne la mettait pas en valeur, puis il posa un œil sur la capote et se rendit compte….')
        bot.channels.cache.get('897782601853566986').send('Qu’elle avait craqué, ce fut le drame et, tout de suite les deux commencèrent à se crier dessus pour savoir qui amènerait l\'enfant à la crèche.')
        bot.channels.cache.get('897782601853566986').send('ecrivez "!fin1-1" pour que l\'enfant s\'appelle Marine et "!fin1-2" pour que l\'enfant s\'appelle Mimich')
    }
    if(message.content.startsWith("!fin1-1")) {
        console.log("fin 1.1 histoire");
        bot.channels.cache.get('897782601853566986').send('9 mois plus tard....... ')
        bot.channels.cache.get('897782601853566986').send('Un joli bébé arriva, ce fut alors le moment de lui trouver un prénom, un joli prénom. Les parents ont réfléchi longtemps pour le trouver. ')
        bot.channels.cache.get('897782601853566986').send('Pierrette :  " marine c\'est bien nan ???" ')
        bot.channels.cache.get('897782601853566986').send('Jean-Marie :  " ça passe"')
        bot.channels.cache.get('897782601853566986').send('la petite marine toute mignonne profita de la vie pleinement lorsque le jour de ses 5 ans... ')
        bot.channels.cache.get('897782601853566986').send('elle invita tous ses amis à son anniversaire notamment de bons amis à elle Rachid et Moussa qui étais très proche d\'elle. Entre eux ils gardaient un secret très très secret, mais le jour de son anniversaire, ses deux amis ont essayer une blague qui est mal passé. ')
        bot.channels.cache.get('897782601853566986').send('Lors de l\'arrivée de son gâteau elle se rendit compte qu\'il était composé de ses couleurs préférer qui était le noir, le gris et le jaune, mais le plus important était que le gâteau était en forme de crayon...')
        bot.channels.cache.get('897782601853566986').send('et marine n\'apprécia pas du tout car son surnom était....')
        bot.channels.cache.get('897782601853566986').send('" le crayon"')
        bot.channels.cache.get('897782601853566986').send('en rapport avec son nom de famille.............')
        bot.channels.cache.get('897782601853566986').send('Le Pen.')
        bot.channels.cache.get('897782601853566986').send('Suite à ce jour c\'était le déclic elle développa une haine tellement grande qu\'elle contamina son paternel Jean-Marie Le Pen, et son alors devenu la famille la plus raciste de la France')
        bot.channels.cache.get('897782601853566986').send('FIN')
    }
    if(message.content.startsWith("!fin1-2")) {
        console.log("fin 1.2 histoire");
        bot.channels.cache.get('897782601853566986').send('9 mois plus tard....... ')
        bot.channels.cache.get('897782601853566986').send('Un joli bébé arriva, ce fut alors le moment de lui trouver un prénom, un joli prénom. Les parents ont réfléchi longtemps pour le trouver. ')
        bot.channels.cache.get('897782601853566986').send('Pierrette :  " marine c\'est bien nan ???" ')
        bot.channels.cache.get('897782601853566986').send('Jean-Marie :  " ça passe"')
        bot.channels.cache.get('897782601853566986').send('Quand d\'un coup un inconnu arrive et dit " êtes-vous sur? En ce moment le prénom marine est mal vu, vous devriez prendre Mimich"')
        bot.channels.cache.get('897782601853566986').send('Ce fut le déclic pour Jean-Marie il sut que c\'était le bon prénom "mouai ça passe mieux"')
        bot.channels.cache.get('897782601853566986').send('Leur fille "Mimich" eu alors eu vie intéressante et un beau jour, une rencontre aussi spéciale que celle de ses parents.')
        bot.channels.cache.get('897782601853566986').send('Sauf que ce jour-là....')
        bot.channels.cache.get('897782601853566986').send('Mimich était dehors avec un garçon tout se passait bien quand tout à coup c\'était le coup de foudre....')
        bot.channels.cache.get('897782601853566986').send('La foudre :  "PAFFFFFFFF en PLEIN DANS LE SANGLIERRRRRRRRR!!!!!!.| ')
        bot.channels.cache.get('897782601853566986').send('Toi jtai pas rater grognasse" Mimich fut FOUDROYÉ en PLEINE FACE et mourut sur le coup.')
        bot.channels.cache.get('897782601853566986').send('FIN')
    }
    if(message.content.startsWith("!suite2")) {
        console.log("suite 1 histoire");
        bot.channels.cache.get('897782601853566986').send('Jean-Marie se souvenu qu\'il ne pouvait pas soulever Pierrette car malheureusement il avait cours de git dans 1H.')
        bot.channels.cache.get('897782601853566986').send('Alors Jean-Marie pris la décision cruciale de prendre les jambes de Pierrette à son cou, après un court instant de soulevage intensif, Jean-Marie pris ses clics et ses clacs et partit du trou du cul de Pierrette qui semblait prendre son pied, celui de Jean-Marie.')
        bot.channels.cache.get('897782601853566986').send('Jean-Marie rentra enfin chez lui pour ensuite aller en cours de git qui est EXTREMEMENT IMPORTANT.')
        bot.channels.cache.get('897782601853566986').send('ecrivez "!fin2-1" pour le choix 1 et "!fin2-2" pour le choix 2')
    }
    if(message.content.startsWith("!fin2-1")){
        console.log("fin 2.1 histoire");
        choix = 1
        bot.channels.cache.get('897782601853566986').send('')
        bot.channels.cache.get('897782601853566986').send('FIN')
    }
    if(message.content.startsWith("!fin2-2")){
        console.log("fin 2.2 histoire");
        choix = 1
        bot.channels.cache.get('897782601853566986').send('')
        bot.channels.cache.get('897782601853566986').send('FIN')
    }

});

function Savebdd(){
    fstat.writeFile("./bdd.json", JSON.stringify(bdd,null,4), (error) => {
        if(error){
            message.channels.send("une erreur est survenue. ;-;");
        }
    });
}

bot.login(token.token);