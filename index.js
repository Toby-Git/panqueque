require('dotenv').config({ path: './.env' });

const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');
const $ = require('discord.js').MessageEmbed;

client.login(process.env.TOKEN);

client.once('ready', () => {
  console.log('Ready!');

  client.user.setActivity(
    '', // watching and x meme
    { type: 'WATCHING' }
  );
});

client.on('message', async msg => {
  if (msg.author.bot || msg.content.trim() == '') return;

  let rng = Math.floor(Math.random() * 200) + 1;
  console.log(rng);

  if (rng <= 10) {
    msg.channel.send('miau');
  }

  if (msg.content === 'meow' || msg.content === 'miau') {
    msg.channel.send('miau');
  }

  if (msg.content === 'cute') {
    msg.channel.send('miau');
  }

  if (msg.content.toLowerCase().trim() == 'cat') {
    const { file } = await fetch('https://aws.random.cat/meow').then(response =>
      response.json()
    );
    return msg.channel.send(
      new $().setColor('RANDOM').setTitle('mi amigo').setImage(file)
    );
  }

});
