const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("595973788152102928")
setInterval(function() {
channel.send(`Spam Bot Is HERE its with 50k`);
}, 30)
})

client.login(process.env.BOT_TOKEN);