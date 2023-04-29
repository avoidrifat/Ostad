const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req,res){
if (req.url==="/" || req.url==="/home") {
  fs.readFile("./Public/home.html" , function(error,data){
    if (error) {
      res.writeHead(404, { "content-type": "text/html" });
      res.write("404 Not Found");
      res.end();
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end();
    }
  })
} else if(req.url==="/about"){
  fs.readFile("./Public/about.html" , function(error,data){
    if (error) {
      res.writeHead(404, { "content-type": "text/html" });
      res.write("404 Not Found");
      res.end();
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end();
    }
  })
}
else if(req.url==="/contact"){
  fs.readFile("./Public/contact.html" , function(error,data){
    if (error) {
      res.writeHead(404, { "content-type": "text/html" });
      res.write("404 Not Found");
      res.end();
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end();
    }
  })
}
else if(req.url==="/service"){
  fs.readFile("./Public/service.html" , function(error,data){
    if (error) {
      res.writeHead(404, { "content-type": "text/html" });
      res.write("404 Not Found");
      res.end();
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end();
    }
  })
}
else{
  res.writeHead(404, { "content-type": "text/html" });
  res.write("<h1 style='font-size: 3em; text-align: center;'>404 Not Found</h1>");
  res.end();
}
})
server.listen(3000);
console.log("server running...");
