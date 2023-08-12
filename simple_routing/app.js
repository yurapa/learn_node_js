const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const HOSTNAME = '127.0.0.1';

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, (req.url === '/') ? 'index.html' : req.url);
    let ext = path.extname(filePath);

    if (!ext) {
        filePath += '.html'
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, '404.html'), (err, data) => {
                if (err) {
                    res.writeHead(500, {'Content-Type': 'text/html'})
                    res.end('Error')
                } else {
                    res.writeHead(404, {'Content-Type': 'text/html'});
                    res.end(data);
                }
            })
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        }
    })
})

server.listen(PORT, HOSTNAME, () => {
    console.log(`\n✅ Server running at: http://${HOSTNAME}:${PORT}/`);
});