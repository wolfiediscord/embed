class Embed {
    constructor(msg) {
        this.msg = msg;
    }
}
exports.error = (msg) => {
    if(!msg) {msg = 'Unknown. Please contact the bot author.'};
    let embed = {
      description: `<:wolfx:695361329803821086> ${msg}`,
      color: '#ff0000'
    }
    return embed;
}
exports.success = (msg) => {
    if(!msg) throw '[ERR] You need to have a valid message on the function "embed".'
    let embed = {
     description: `<:wolfcheckmark:695361282219442286> ${msg}`,
     color: '#2fa811'
   }
   return embed;
}
module.exports = Embed;
