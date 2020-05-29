const fs = require('fs');

const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) {
//         throw err
//     } else {
//         console.log("Папка создана");
//     }
// });

const filePath = path.join(__dirname, '', 'events.js');

fs.writeFile(filePath, "const EventEmitter = require('events')", err => {
    if (err) { throw err }
    else {
        console.log("File created")
    }
})

// fs.appendFile(filePath, '\nHello again ', err => {
//     if (err) {
//         throw err;
//     } else {
//         console.log('File created');
//     }
// });

// fs.readFile(filePath, 'utf-8', (err, content) => {
//     if (err) {
//         throw err;
//     }

//     console.log(content);
    // else {
    //     const data = Buffer.from(content);
    //     console.log('content; ', data.toString());
    // }
// });