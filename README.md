# embed
An embed error/success generator for discord.js v12. 

**Note:** This is for WolfieCBOT. You can fork this repo and change the success and error prompts yourself.

# Documentation
Documentation for embed.

# Success Prompt
To add a success prompt to your bot, use `embed.success('MESSAGE GOES HERE');`
Example:
```
const embed = require('embed');
let success = embed.success('Success!');
message.channel.send({embed: success});
```

# Error Prompt
**Note:** By default, if a message isn't specified, it will default to `Unknown, please contact the bot author.`
To add a error prompt to your bot, use `embed.error('MESSAGE GOES HERE');`
Example:
```
const embed = require('embed');
let error = embed.error('Error!');
message.channel.send({embed: error});
```
