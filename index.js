const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, '/public', 'home.html'),
    //         (err, content) => {
    //             if (err) throw err;
    //             res.writeHead(200, {'Content-Type': 'text/html'});
    //             res.end(content);
    //         })
    // }
    // if (req.url === '/user') {
    //     fs.readFile(path.join(__dirname, '/public', 'user.html'),
    //         (err, content) => {
    //             if (err) throw err;
    //             res.writeHead(200, {'Content-Type': 'text/html'});
    //             res.end(content);
    //         })
    // }
    // if (req.url === '/api/user') {
    //     const users = [
    //         {name: 'huang', age: 18},
    //         {name: 'fei', age: 28},
    //     ];
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     res.end(JSON.stringify(users));
    // }

    //Build File Path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'home.html' : req.url);

    //Extension of file
    let extname = path.extname(filePath);

    //Initial Content Type
    let contentType = 'text/html';

    //Check and Set
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    //Read File
    fs.readFile(filePath,(err,content)=>{
        if(err){
            if(err.code === 'ENOENT' ){
                //Page not Found
                fs.readFile(path.join(__dirname,'/public','404.html'),(err,content)=>{
                    res.writeHead(200,{'Content-Type':'text/html'});
                    res.end(content,'utf-8')
                })
            }else {
                //Some Server Error
                res.writeHead(500);
                res.end(`Server error:${err.code}`)
            }
        }else {
            //Success
            res.writeHead(200,{'Content-Type':contentType});
            res.end(content,'utf-8')
        }

    })
})

const PORT = process.env.PORT || 5001;

server.listen(5001, () => console.log(`Server Running On Port ${PORT}`))


// const Logger = require('./logger');
//
// const logger = new Logger();
//
// logger.on('message',data=>{console.log('Called Listener',data)});
//
// logger.log('Hello World')

