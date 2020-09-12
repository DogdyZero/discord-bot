const TwMock = require('./TWMock');
const TestApi = require('./TestApi')
const token = require('./token.json')

const Discord = require("discord.js");

const client = new Discord.Client();

let api = new TestApi();
const prefix = "!";
client.on("message", function(message) { 
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

 	const commandBody = message.content.slice(prefix.length);
	const args = commandBody.split(' ');

  	const command = args.shift().toLowerCase();

	if (command === "tw") {
		execute(args,message)	
	}

}); 

function execute(name,message){

	let list = api.findByPlayer(name[0])
	message.channel.send(`Teste de consulta Mock do ${name}`)
	message.channel.send('ID, Player, Attack, Deffense')

	list.forEach(p=> message.channel.send(`${p.id}, ${p.player}, ${p.attack}, ${p.deffense}`))
}

client.login(token.client);

