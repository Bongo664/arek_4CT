const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    const ext = path.extname(filePath);
    const mime = { 
        '.html': 'text/html', 
        '.css': 'text/css', 
        '.js': 'text/javascript', 
        '.png': 'image/png', 
        '.jpg': 'image/jpeg' 
    };

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end('Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': mime[ext] || 'text/plain' });
            res.end(content);
        }
    });
}).listen(1024, () => console.log('Server running at http://localhost:1024/'));
