const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("<h1>Hello, Welcome to NodeJS!</h1>");
  } else if(req.url == "/about"){
    res.write("<h1>About Us Page for NodeJS.</h1>");
  }
  res.end();
});

server.listen(3000);

console.log("HTTP Server is running on port 3000");
