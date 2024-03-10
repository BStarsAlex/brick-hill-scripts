# brick-hill-scripts
Some scripts I have made for Brick Hill (node-hill).

These scripts are intended to be used with Brick Hill's NodeJS hosting software node-hill.
To use these scripts, put them into your `user-scripts` folder, and follow the instructions provided here for each one.

The "Required Packages" section shows the entry you must add to your start.js sandbox section for the script to work. For example, if it contains the line `Discord: require('discord.js')`, you must modify `sandbox` to reflect. (shown in the line below)

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
## Discord Interface (discordinterface.js)
**Required Packages**:
- `Discord: require('discord.js')`

This script creates a bridge between a specified discord channel and your Brick Hill game's chat. To use the script, you will need to go to [Discord's Developer Portal](https://discord.com/developers/applications), and create an application and make it into a bot. After that, you will need to grab the bot's token and put it in between the quotation marks at the end of the discordinterface.js file. After doing so, you must enable Developer Mode in your Discord Settings, and right click the channel you would like to bridge, and click "Copy ID". After that, go into discordinterface.js, and put it in between the quotation marks in front of `monitorchannelID`. The bridge should start up with your game.
## EZ Bricks (ezbricks.js)
**Required Packages**:
- None

This script enables you to quickly and easily create special bricks that perform a function on the player when touched. (e.g change speed, kill player)
### Statpads
Statpads are EZ bricks that change the stats of anyone who touches them.
To create a statpad EZ brick, create any brick named "`[type]pad-#`", substituting the "`[type]`" for the stat you would like to modify (e.g "speedpad"), and the number for the amount you would like.
For example, to create a pad that doubles a player's speed, you would name a brick "`speedpad-10`". To make a brick that reverses the effect, name it "`speedpad-5`".
#### Speedpads
Speedpads increase the player's speed when stepped on. Default is 4.

Example: Name a brick `speedpad-10` to double the player's speed when touched.
#### Jumppads
Jumppads increase the player's jump height when stepped on. Default is 5.

Example: Name a brick `jumppad-10` to double the player's jump height when touched.
### Misc
- Kill Bricks: Kills any player that touches them. Useful for obbies. To create one, include "`(deadly)`" in any part of the brick's name.
## Banlist (banlist.js)
**Required Packages**:
- None

This script allows you to ban people, in the future it will use an API to store the banlist (*if it is possible*), but for now it's in the script
### Commands
`.banlist help` this command will show the other commands.
`.banlist add username` this is pretty straight forward, this will ban the user.
`.banlist remove username` this is also pretty straight forward, this will unban the user.
