require('dotenv').config({ path: './.env' });

const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');
const $ = require('discord.js').MessageEmbed;

client.login(process.env.TOKEN);

client.once('ready', () => {
  console.log('Ready!');

  client.user
    .setActivity('a server full of amigos', { type: 'WATCHING' })
    .then(presence =>
      console.log(`Activity set to ${presence.activities[0].name}`)
    )
    .catch(console.error);
});

client.on('message', async msg => {
  if (msg.guild && !msg.author.bot) {
    //ignore bots
    let rng = Math.floor(Math.random() * 200) + 1;
    console.log(rng);

    if (rng <= 10) {
      msg.channel.send(meow());
    }

    if (msg.content.toLowerCase().startsWith('!status ')) {
      if (msg.member.hasPermission('MANAGE_CHANNELS')) {
        client.user
          .setActivity(msg.content.replace('!status ', ''), {
            type: 'PLAYING',
          })
          .then(presence =>
            console.log(`Activity set to ${presence.activities[0].name}`)
          )
          .catch(console.error);
        //fast error handling
        //TODO add check for manage message
        try {
          msg.delete();
        } catch (error) {
          console.log(error);
        }
      } else {
        msg.channel.send('<:paneyes:750657460414447616> meow??');
        return;
      }
    }

    if (
      msg.content.toLowerCase() === 'meow' ||
      msg.content.toLowerCase() === 'miau' ||
      msg.content.toLowerCase() === 'nya'
    ) {
      msg.channel.send(meow());
      return;
    }

    if (
      msg.content.includes('buenos dias') ||
      msg.content.includes('good morning')
    ) {
      msg.channel.send('<:paneyes:750657460414447616> buenos dias');
      return;
    }

    if (
      msg.content.toLowerCase().replace(/\s+/g, '').includes('goodnight') ||
      msg.content.toLowerCase().replace(/\s+/g, '').includes('buenasnoches') ||
      msg.content.toLowerCase().replace(/\s+/g, '').includes('alacama') ||
      msg.content.toLowerCase().replace(/\s+/g, '').includes('mimir') ||
      msg.content.toLowerCase().replace(/\s+/g, '').includes('sleep')
    ) {
      msg.channel.send(sleep());
      return;
    }

    if (msg.content.toLowerCase().includes('psps')) {
      msg.channel.send('<:paneyes:750657460414447616>');
      return;
    }

    if (
      msg.content.toLowerCase().includes('shit') &&
      msg.content.toLowerCase().includes('carpet')
    ) {
      msg.channel.send(':smirk:');
      return;
    }

    if (
      (msg.content.toLowerCase().includes('lindo') ||
        msg.content.toLowerCase().includes('bonito') ||
        msg.content.toLowerCase().includes('cute')) &&
      msg.content.toLowerCase().includes('panqueque')
    ) {
      msg.channel.send('<:panflush:755487466579951697> ᵗᵘ');
      return;
    }

    if (msg.content.toLowerCase().includes('panqueque')) {
      msg.channel.send(meow());
      return;
    }

    //TODO refactor this
    if (
      msg.content.toLowerCase().trim() == 'cat' ||
      msg.content.toLowerCase().trim() == 'gato'
    ) {
      try {
        const { file } = await fetch(
          'https://aws.random.cat/meow'
        ).then(response => response.json());
        return msg.channel.send(
          new $().setColor('RANDOM').setTitle('mi amigo').setImage(file)
        );
      } catch (e) {
        console.log(e);
        msg.channel.send('<:paneyes:750657460414447616> meow??');
        return;
      }
    }
  } else if (!msg.author.bot) {
    //reply to dms
    msg.channel.send(meow());
  }

  //TODO handle being @'d
});

function meow() {
  var responses = [
    'meow',
    'miau',
    'ᵐᵉᵒʷ',
    'ᵐᶦᵃᵘ',
    'ᴍɪᴀᴜ',
    'nya',
    'purrrrr',
    'mrow',
    'MEOW',
    'ᴮᴵᴵᴾ ᴮᴵᴵᴾ 🔊',
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}

function sleep() {
  var responses = [
    'buenas noches',
    'a mimir',
    'oyasumimir',
    'a mimir mis amigos',
    '<:paneyes:750657460414447616> ᶻᶻᶻ',
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}
