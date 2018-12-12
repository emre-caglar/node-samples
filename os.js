
const os = require('os');

console.log('Freemem: ' + os.freemem());
console.log('Totalmem: ' +os.totalmem());
console.log('Arch: ' +os.arch());

console.log('CPUs: ' +os.cpus().length);

console.log('Platform: ' +os.platform());

console.log('UserInfo: ' +os.userInfo().username);
