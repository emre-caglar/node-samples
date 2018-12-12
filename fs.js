
const fs = require('fs');

console.log('Reading Asynchronously');

fs.readdir('./', function(err, files){
    console.log('Callback');
    if(err) console.log('Cannot read the directory');
    else
    {
        files.forEach(element => {
            console.log(element.toString());
        });
    }
});

console.log('Reading Syncrhonously: ' + fs.readdirSync('./'));
