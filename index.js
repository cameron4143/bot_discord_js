const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('Ready!');
});

client.login("ODkyNjkyOTM4NDAyOTU1Mjk1.YVQnFQ.QD1AjCuqWz8uxFYa-zAPvMUYtvQ");




