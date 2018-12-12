
const EventEmitter = require('events');

var url = 'Some URL';

class Logger extends EventEmitter
{
    log(message) {
       console.log(message);
       
       this.emit('messageLogged', {id:1 , url:'ttp'});
    }
}

module.exports = Logger;