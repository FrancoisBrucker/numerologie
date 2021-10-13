const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    
    console.log("-------")
    console.log(req.url);
    console.log("========")
    console.log(req.method);
    console.log("========")
    console.log(req.httpVersion);
    console.log("========")
    console.log(req.headers);
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});