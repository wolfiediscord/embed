exports.success = (msg) => {
if(!msg) throw '[ERR] You need to have a valid message on the function "embed".'
    let embed = {
     description: `<:wolfcheckmark:695361282219442286> ${msg}`,
     color: '#2fa811'
   }
   return embed;
}
exports.warn = (msg) => {
if(!msg) throw '[ERR] You need to have a valid message on the function "embed".'
    let embed = {
     description: `<:wolfwarn:697276847422963733> ${msg}`,
     color: '#fced1c'
    }
    return embed;
}
exports.info = (msg) => {
if(!msg) throw '[ERR] You need to have a valid message on the function "embed".'
    let embed = {
    description: `<:wolfinfo:697279215174680589>  ${msg}`,
    color: '#3c8de7'
    }
    return embed;
}
exports.error = (msg) => {
    if(!msg) {this.msg = 'Unknown. Please contact the bot author.'};
    let embed = {
      description: `<:wolfx:695361329803821086> ${msg}`,
      color: '#ff0000'
    }
    return embed;
}
