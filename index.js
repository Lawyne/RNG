const Discord = require("discord.js");
const client = new Discord.Client();
const token = "MzI0MTk1NjcwOTY3NzEzNzky.DCGMoQ.0869nteug6gizGyad_WGnnu_F0s";
var prefix = ".";
var mention = "<@324195670967713792>";
var memberCount = client.users.size;
var serverCount = client.guilds.size;
var ratio = 29;
var viewratio = false;

client.on("ready", () => {
		var servers = client.guilds.array().map(g => g.name).join(',');
		console.log("------------------------------------");
	console.log('[!] Bot online... \n')
	client.user.setUsername('Random N Gentil');
});

client.on('message', message => {
	if(message.content === ("test")){
		message.reply('test !');
	}
	else if (message.content === ("lul")){
		message.reply('lul!');		
	}
	/*else if (message.content.startsWith('!name')){
		client.user.setUsername(message.content.substr(6));
	}*/
	else if (message.content === ('?ratio')){
		message.reply("My ratio is "+ratio+" to 1");
	}
	else if (message.content === ('!toggle')){
		viewratio = !viewratio;
		var txt = "off";
		if (viewratio){txt="on";}
		message.reply("The toggle is now "+txt+".");
	}
	else if (message.content.startsWith('!ratio ')){
		var temp = message.content.substr(7);
		ratio = parseInt(temp.match(/[0-9]+/));
		message.reply("My new ratio is "+ratio);
	}
	else if (message.content.startsWith('!roll ')){	
		var A = parseInt(message.content.substr(6));
		var B = Math.random()*A;
		message.reply(Math.floor(B + 1));
	}
	else if (message.content === ('!rand100')){	
		var A = Math.random()*100*ratio;
		var B = Math.random()*100;
		var C = ratio + 1;
		var D = "";
		if (viewratio) {
			D = "     (ratio: "+ ratio + " to 1)";
		}
		message.reply(Math.floor((A+B)/C + 1) + D);
	}
	else if (message.content.startsWith('?should')){		
		var temp = (Math.floor(Math.random()*10));
		if (temp === 0){
			message.reply("For sure");
		}
		else if (temp === 1){
			message.reply("Yes");			
		}
		else if (temp === 2){
			message.reply("I guess so...");
		}
		else if (temp === 3){
			message.reply("Maybe");
		}
		else if (temp === 4){
			message.reply("Maybe not...");
		}
		else if (temp === 5){
			message.reply("No");
		}
		else if (temp === 6){
			message.reply("Of course !");
		}
		else if (temp === 7){
			message.reply("Hell no !");
		}
		else if (temp === 8){
			message.reply("Definitely not");
		}
		else {
			message.reply("Who knows ?");
		}
	}
	else if (message.content.startsWith('!repeat ')){
		message.reply(message.content.substr(8));
	}
	else if (message.content === "!help") {
		message.reply('Here is how you can call me:\n \n [!] !rand100 : To roll the dice\n [!] !ratio [X] : To set the ratio to [X]\n [!] ?ratio : To know the ratio\n [!] !toggle : To toggle the ratio display\n [!] !roll [X] : To roll an unbiased [X] dice \n [!] ?should [X] : When in doubt...\n \n See you soon !');
	}
})

client.login(token)