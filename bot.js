const { Attachment, Client, RichEmbed } = require("discord.js");
const client = new Client({ disableEveryone: true });

client.on('ready', () => {
let g = client.guilds.get("675719509507702784");
let c = g.channels.get("675776535877124145");
if(c.type == 'voice') {
setInterval(() => {
c.join();
}, 100);
}
});

client.login("NTk1MzA5MjczMjQwNTY3ODEw.Xpiedg.1KiXW1VMAnYBFclVZ1SVb_EjWOY")
