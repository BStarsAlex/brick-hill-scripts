specialbricks = {}
specialbricks.speedpads = {}
specialbricks.jumppads = {}
specialbricks.bouncepads = {}

function passIntoCallback(i1, callback) {
  return function(i) {
    return callback(i, i1);
  }
}

for (brick in Game.world.bricks) {
	var brickobj = Game.world.bricks[brick]
	if (brickobj.name.startsWith("speedpad-")) {
		specialbricks.speedpads[Game.world.bricks[brick].netId] = parseInt(brickobj.name.substring(9));
		Game.world.bricks[brick].touching(debounce(passIntoCallback(Game.world.bricks[brick], (player, brick) => {
			player.setSpeed(specialbricks.speedpads[brick.netId]);
			player.centerPrint("Your speed is now \\c7"+String(specialbricks.speedpads[brick.netId])+"\\c0.");
		})), 1000)
	}
	if (brickobj.name.startsWith("jumppad-")) {
		specialbricks.jumppads[Game.world.bricks[brick].netId] = parseInt(brickobj.name.substring(8));
		Game.world.bricks[brick].touching(debounce(passIntoCallback(Game.world.bricks[brick], (player, brick) => {
			player.setJumpPower(specialbricks.jumppads[brick.netId]);
			player.centerPrint("Your jump power is now \\c7"+String(specialbricks.jumppads[brick.netId])+"\\c0.");
		})), 1000)
	}
	if (brickobj.name.includes("(deadly)")) {
		Game.world.bricks[brick].touching(debounce((player) => {
			player.kill()
		}), 500)
	}
}
