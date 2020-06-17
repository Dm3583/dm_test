const chalk = require("chalk");
const text = require("./data");
const fs = require("fs");
const path = require("path");

// console.log(chalk.blue("Hello JSnpm "));

const http = require('http');

// console.log("FileName: " + __dirname);

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' })

    // console.log(req.url);
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
    //         if (err) {
    //             throw err
    //         }
    //         res.writeHead(200, {
    //             'Content-Type': 'text/html'
    //         });
    //         res.end(data)
    //     });
    // } if (req.url === '/contacts') {
    //     fs.readFile(path.join(__dirname, 'public', 'contacts.html'), (err, data) => {
    //         if (err) {
    //             throw err
    //         }
    //         res.writeHead(200, {
    //             'Content-Type': 'text/html'
    //         });
    //         res.end(data)
    //     });
    // }

    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    const ext = path.extname(filePath);

    let contentType = 'text/html';

    console.log(contentType);

    switch (ext) {

        case '.css':

            contentType = 'text/css';
            console.log(contentType);
            break;

        case '.js':

            contentType = 'text/javascript';

            break;

        default:

            contentType = 'text/html';

    }

    if (!ext) {

        filePath += '.html';

    }

    console.log(filePath);

    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
                if (err) {
                    res.writeHead(500);
                    res.end('Error');
                } else {
                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                    })
                    res.end(data)
                }
            })
        } else {
            res.writeHead(200, {
                'Content-Type': contentType
            })
            res.end(content)
        }
    })

});

const PORT = process.env.PORT || 3000

server.listen(3000, () => console.log(`Server has been started on ${PORT} ...`));