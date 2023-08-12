const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World!');
// }).listen(8080);

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});

    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');

    // req.ur => Return the url part of the request object:

    res.write('Hello, World!\n The URL is: ' + req.url);
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`\n✅ Server running at: http://${hostname}:${port}/`);
});
