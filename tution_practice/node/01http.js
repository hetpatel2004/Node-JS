// let http = require("http");
// http.createServer((req,res)=>{
//     res.end('text\n');

// }).listen(5000,()=> console.log("server start at localhost"))


const http = require("http");

const server = http.createServer((req, res) => {
  console.log("URL:", req.url);
  console.log("Method:", req.method);
  console.log("Headers:", req.headers);

  res.end("Request logged");
});

server.listen(3000);
