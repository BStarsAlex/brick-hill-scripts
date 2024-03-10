const banlist = [];
const admins = ['Pao3']

Game.on("playerJoin", async (p) => {
    if (banlist.includes(p.username)) {
        p.kick("You're banned, dude!");
    }
});

Game.on("chatted", (p, message) => {
    const args = message.split(" ");
    const command = args[0].toLowerCase();
    if (admins.includes(p)) {
        if (command === ".banlist" && args[1] === "add") {
            // Remove "/banlist add " from the message
            const usernameToAdd = args.slice(2).join(" ");
            
            // Add the username to the banlist
            banlist.push(usernameToAdd);
            
            // Kick the player with the specified username
            Game.players.forEach((playerToKick) => {
                if (playerToKick.username === usernameToAdd) {
                    playerToKick.kick("You're banned, dude!");
                }
            });
            p.message(`\c8 ${usernameToAdd} \c6was banned!`)
            } else if (command === ".banlist" && args[1] === "remove") {
               // Remove "/banlist remove " from the message
               const usernameToRemove = args.slice(2).join(" ");

                // Remove the username from the banlist
                const index = banlist.indexOf(usernameToRemove);
                if (index !== -1) {
                    banlist.splice(index, 1);
                }
                p.message(`\c8 ${usernameToRemove} \c5was unbanned!`)
                } else if (command === ".banlist" && args[1] === "help") {
                p.message("~Banlist~")
                p.message(".banlist add username")
                p.message(".banlist remove username")
                p.message("By giglPRP")
                }
            };
 })
