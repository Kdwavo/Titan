const { Attachment, Client, RichEmbed } = require("discord.js");
const wavo = new Client({ disableEveryone: true });

wavo.on('ready', () => {
let g = wavo.guilds.get("694888918331686943");
let c = g.channels.get("694888919933911121");
if(c.type == 'voice') {
setInterval(() => {
c.join();
}, 100);
}
});

wavo.login("NTk1MzA5MjczMjQwNTY3ODEw.XpjETQ.lahDVTC3HziHX46zzZyNyqN3rx4");
