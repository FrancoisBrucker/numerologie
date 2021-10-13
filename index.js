const path = require('path')
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url)

    if (req.url === "/") {
        fichier = path.join(__dirname, "./index.html")        
    } else {
        fichier = path.join(__dirname,  req.url)
    }
    console.log("fichier : " + fichier)
    if (fs.existsSync(fichier)) {
        res.writeHead(200,  {'Content-Type': 'text/html'})
    
        fichier = fs.readFileSync(fichier, {encoding:'utf8'})
        res.end(fichier);
    }
    else {
    res.writeHead(404,  {'Content-Type': 'text/plain'})
    res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});