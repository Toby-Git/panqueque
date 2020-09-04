require('dotenv').config({ path: './.env' });

const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN);

client.once('ready', () => {
  console.log('Ready!');

  client.user.setActivity(
    '', // watching and x meme
    { type: 'WATCHING' }
  );
});

client.on('message', msg => {
  if (message.author.bot || message.content.trim() == '') return;

  let rng = Math.floor(Math.random() * 200) + 1;
  console.log(rng);

  if (rng <= 10) {
    msg.channel.send('miau');
  }

  if (msg.content === 'meow' && !msg.author.bot) {
    msg.channel.send('miau');
  }

  if (msg.content === 'miau' && !msg.author.bot) {
    msg.channel.send('miau');
  }
});
