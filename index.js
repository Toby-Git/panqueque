require('dotenv').config({ path: './.env' });

const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN);

client.once('ready', () => {
  console.log('Ready!');
});
client.on('message', msg => {
  if (msg.content === 'meow' && !msg.author.bot) {
    msg.channel.send('miau');
  }

  if (msg.content === 'miau' && !msg.author.bot) {
    msg.channel.send('miau');
  }
});
