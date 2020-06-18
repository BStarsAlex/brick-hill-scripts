# brick-hill-scripts
Some scripts I have made for Brick Hill (node-hill).

These scripts are intended to be used with Brick Hill's NodeJS hosting software node-hill.
To use these scripts, put them into your `user-scripts` folder, and follow the instructions provided here for each one.

## Dynamic Pads (dynamicpads.js)
This script enables you to quickly and easily create bricks that change the speed of anyone who touches them.
To create a pad, create any brick named "`[type]pad-#`", substituting the "`[type]`" for the stat you would like to modify (e.g "speedpad"), and the number for the amount you would like.
For example, to create a pad that doubles a player's speed, you would name a brick "`speedpad-10`". To make a brick that reverses the effect, name it "`speedpad-5`".
### Speedpads
Speedpads increase the player's speed when stepped on. Default is 4.

Example: Name a brick `speedpad-10` to double the player's speed when touched.
### Jumppads
Jumppads increase the player's jump height when stepped on. Default is 5.

Example: Name a brick `jumppad-10` to double the player's jump height when touched.
