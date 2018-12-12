
const EventEmitter = require('events');

const emitter = new EventEmitter();

// arrow function as of ES6. (arg) => is equivalent to function(arg) {}
emitter.on('testEvent', (arg) => {
    console.log('Listener Called ', arg);
});

emitter.emit('testEvent', {
    id: 1, url: 'http://'
});