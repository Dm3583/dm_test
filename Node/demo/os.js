const os = require('os');

console.log('OS: ', os.platform());

console.log('Processor Architect: ', os.arch());

console.log('Processor Info: ', os.cpus());

console.log('Free Memory: ', os.freemem());

console.log('Total Memory: ', os.totalmem());

console.log('Home directory: ', os.homedir());

console.log('Work OS time: ', os.uptime());