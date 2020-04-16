const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
	client.user.setGame('Free Fire',"https://www.twitch.tv/peery13");
});

client.on('ready', () => {
let g = client.guilds.get("675719509507702784");
let c = g.channels.get("675776535877124145");
if(c.type == 'voice') {
setInterval(() => {
c.join();
}, 100);
}
});



client.login(process.env.BOT_TOKEN);
