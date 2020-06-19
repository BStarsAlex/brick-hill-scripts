const client = new Discord.Client();
var monitorchannelID = "insert interface channel's ID";
var monitorchannel;

function purge_swears(texttopurge) {
	swears = ["fuck", "shit", "ass", "dick", "cunt", "bitch"]; //words to filter here
	for (swear in swears) {
		texttopurge = texttopurge.replace(swears[swear], "*".repeat(swears[swear].length));
	}
	return texttopurge;
}

Game.on("chatted", (player, message) => {
    monitorchannel.send("[BRICK HILL] [CHAT] "+player.username + ": "+message);
});

Game.on("playerJoin", (player, message) => {
    monitorchannel.send("[BRICK HILL] [JOIN] "+player.username + " has joined.");
});

Game.on("playerLeave", (player, message) => {
    monitorchannel.send("[BRICK HILL] [LEAVE] "+player.username + " has left.");
});

client.once('ready', () => {
	console.log('Ready!');
	monitorchannel = client.channels.cache.get(monitorchannelID);
	monitorchannel.send("[Server instantiated.]");
});

client.on('message', message => {
	if (message.channel.id == monitorchannelID && !message.author.bot) {
		rolehex = message.guild.member(message.author).displayHexColor;
		Game.messageAll(purge_swears("[#7289DA][DISCORD] ["+rolehex+"]"+message.author.username+"\\c0: "+ message.content));
	}
});

client.login('token here');
