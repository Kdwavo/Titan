const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
	client.user.setGame('w!b (Message) - w&w 🎆',"https://www.twitch.tv/peery13");
});

client.on('ready',async () => {
let g = client.guilds.get("694888918331686943");
let c = g.channels.get("694888919933911121");
if(c.type === 'voice') {
c.join();
setInterval(() => {
if(g.me.voiceChannel && g.me.voiceChannelID !== c.id || !g.me.voiceChannel) c.join();
}, 1000);
}
});




client.login(process.env.BOT_TOKEN);
