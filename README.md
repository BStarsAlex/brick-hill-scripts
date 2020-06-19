# brick-hill-scripts
Some scripts I have made for Brick Hill (node-hill).

These scripts are intended to be used with Brick Hill's NodeJS hosting software node-hill.
To use these scripts, put them into your `user-scripts` folder, and follow the instructions provided here for each one.

The "Required Scripts" section shows the entry you must add to your start.js sandbox section for the script to work. For example, if it contains the line `Discord: require('discord.js')`, you must modify `sandbox` to reflect. (shown in the line below)

For example, if your sandbox table contains nothing (`sandbox: {}`), you must change it to this:
```javascript
sandbox: {
  Discord: require('discord.js')
}
```
If the sandbox table is not empty, you must add a comma after the line before it, like so:
```javascript
sandbox: {
  foo: require('bar'),
  Discord: require('discord.js')
}
```
(Note that `foo: require('bar')` is purely for demonstrational purposes, and none of these scripts require such entry.)

Additionally, if you do not have the package installed (in the parenthesis of `require('package_name')`), you must install it using the Node Package Manager (npm) to install it.

For example, if `Discord: require('discord.js')` is required, you must take the text inside the parenthesis (without the single quotes) and put it after `npm install` on your command line, like so: `npm install discord.js`
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
