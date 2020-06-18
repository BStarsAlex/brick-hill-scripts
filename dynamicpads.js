pads = {}
pads.speed = {}
pads.jump = {}
pads.bounce = {}

function passIntoCallback(i1, callback) {
  return function(i) {
    return callback(i, i1);
  }
}

for (brick in Game.world.bricks) {
	var brickobj = Game.world.bricks[brick]
	if (brickobj.name.startsWith("speedpad-")) {
		pads.speed[Game.world.bricks[brick].netId] = parseInt(brickobj.name.substring(9));
		Game.world.bricks[brick].touching(debounce(passIntoCallback(Game.world.bricks[brick], (player, brick) => {
			player.setSpeed(pads.speed[brick.netId]);
			player.centerPrint("Your speed is now \\c7"+String(brick.speedset)+"\\c0.");
		})), 1000)
	}
	if (brickobj.name.startsWith("jumppad-")) {
		pads.speed[Game.world.bricks[brick].netId] = parseInt(brickobj.name.substring(8));
		Game.world.bricks[brick].touching(debounce(passIntoCallback(Game.world.bricks[brick], (player, brick) => {
			player.setJumpPower(pads.jump[brick.netId]);
			player.centerPrint("Your jump power is now \\c7"+String(brick.speedset)+"\\c0.");
		})), 1000)
	}
}
