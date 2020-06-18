speedpads = {}

function passIntoCallback(i1, callback) {
  return function(i) {
    return callback(i, i1);
  }
}

for (brick in Game.world.bricks) {
	var brickobj = Game.world.bricks[brick]
	//console.log("brick name: \"" + brickobj.name+"\"");
	if (brickobj.name.startsWith("speedpad-")) {
		//console.log("yes, it starts with speedpad-");
		speedpads[Game.world.bricks[brick].netId] = parseInt(brickobj.name.substring(9));
		Game.world.bricks[brick].touching(debounce(passIntoCallback(Game.world.bricks[brick], (player, brick) => {
			//console.log("stepped on speedpad with speed "+String(this.speedset));
			player.setSpeed(speedpads[brick.netId]);
			player.centerPrint("Your speed is now "+String(brick.speedset)+".");
		})), 1000)
	}
}