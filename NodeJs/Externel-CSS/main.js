const http = require('http');
const fs = require('fs');

function createServer() {
  const server = http.createServer((req, res) => {
    if (req.url === '/style.css') {
      // CSS
      fs.readFile('./style.css', (err, data) => {
        if (err) {
          res.writeHead(500, {'Content-Type': 'text/plain'});
          res.end('Error: could not read CSS file');
        } else {
          res.writeHead(200, {'Content-Type': 'text/css'});
          res.end(data);
        }
      });
    } else {
      // HTML
      fs.readFile('./index.html', (err, data) => {
        if (err) {
          res.writeHead(500, {'Content-Type': 'text/plain'});
          res.end('Error: could not read HTML file');
        } else {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(data);
        }
      });
    }
  });

  server.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
}

createServer();
