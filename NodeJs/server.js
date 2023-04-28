const fs = require('fs');
const http = require('http');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, 'Public');

var server = http.createServer(function (req, res) {
  var filePath = path.join(PUBLIC_DIR, req.url);

  if (fs.statSync(filePath).isDirectory()) {
    filePath+='/index.html';
  }

  fs.readFile(filePath, function (error, data) {
    if (error) {
      res.writeHead(404, { "content-type": "text/html" });
      res.write('404 Not Found');
      res.end();
    } else {
      let contentType = 'text/html';
      const extname = path.extname(filePath);
      switch (extname) {
        case '.css':
          contentType = 'text/css';
          break;
        case '.js':
          contentType = 'text/javascript';
          break;
      }

      res.writeHead(200, { "content-type": contentType });
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000);
console.log("Server is successfully running.");
