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
  if (msg.guild && !msg.author.bot) {
    let rng = Math.floor(Math.random() * 200) + 1;
    console.log(rng);

    if (rng <= 10) {
      msg.channel.send(meow());
    }

    if (msg.content === 'meow' || msg.content === 'miau') {
      msg.channel.send(meow());
    }

    if (msg.content === 'cute') {
      msg.channel.send(meow());
    }

    if (msg.content.toLowerCase().includes('panqueque')) {
      msg.channel.send(meow());
    }

    if (
      msg.content.toLowerCase().includes('shit') &&
      msg.content.toLowerCase().includes('carpet')
    ) {
      msg.channel.send(':smirk:');
    }

    //TODO refactor this
    if (msg.content.toLowerCase().trim() == 'cat') {
      const { file } = await fetch(
        'https://aws.random.cat/meow'
      ).then(response => response.json());
      return msg.channel.send(
        new $().setColor('RANDOM').setTitle('mi amigo').setImage(file)
      );
    }
  } else if (!msg.author.bot) {
    msg.channel.send(meow());
  }

});

function meow() {
  var responses = ['meow', 'miau', 'ᵐᵉᵒʷ', 'ᵐᶦᵃᵘ', 'ᴍɪᴀᴜ', 'nya'];
  return responses[Math.floor(Math.random() * responses.length)];
}
