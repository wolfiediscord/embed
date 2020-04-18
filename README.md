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

# Warning Prompt
To add a warning prompt to your bot, use `embed.warn('MESSAGE GOES HERE');`
Example:
```
const embed = require('embed');
let warning = embed.warn('Warning!');
message.channel.send({embed: warning});
```

# Info Prompt
To add a info prompt to your bot, use `embed.info('MESSAGE GOES HERE');`
Example:
```
const embed = require('embed');
let info = embed.info('Info.');
message.channel.send({embed: info});
```
