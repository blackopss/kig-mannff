const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
    console.log(`in ${bot.guilds.size} servers `)
    console.log(`[Users] ${bot.users.size}`)

});

client.login(process.env.BOT_TOKEN);

bot.on('guildMemberAdd', member => {

     if (member.guild.id === "435524954843381763") {
    
    
var Canvas = require('canvas')
var jimp = require('jimp')

const w = ['./img/w1.jpg','./img/w2.jpg','./img/w3.jpg','./img/w4.jpg','./img/w6.jpg'];

        let Image = Canvas.Image,
            canvas = new Canvas(401, 202),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 401, 202);

})

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                        //Avatar
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.drawImage(ava, 152, 27, 95, 95);
                        
                                                //wl
                        ctx.font = '20px Arial Bold';
                        ctx.fontSize = '25px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText("Welcome To FlightBot Server", 210, 154);
                        
                        //ur name
                        ctx.font = '20px Arial';
                        ctx.fontSize = '28px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 213, 190);
                        
bot.channels.get("435524954843381763").sendFile(canvas.toBuffer())
bot.channels.get("435524954843381763").send(`Welcome ${member} To __${member.guild.name}__`)



})
})

}
});












