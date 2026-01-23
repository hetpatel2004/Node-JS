const http = require("http");      
const path = require("path");
const fs = require('fs')
// const server = http.createServer((req,res) =>{
//     console.log("URL: ",req.url);
//     console.log("Method :" ,req.method);
//     console.log("Headers:",req.headers);
//     res.end("Request logged");


// });
// server.listen(3000);


// http.createServer((req,res) =>{
    //     console.log("URL: ",req.url);
    // console.log("Method :" ,req.method);
    // console.log("Headers:",req.headers);
    // res.end("Request logged");

    // if (req.url === "/") {
    //     res.end("Home page");
    // } else if (req.url==="/about") {
    //     res.end
    // }
    // res.end("This is the example of node.js web-based application\n");
// }).listen(5000, () => console.log("server started at localhost:5000"))



// const server = http.createServer((req, res) => {
//   const header = new Headers ({'const type':})

//   if (req.url === "/") {
//     res.end("Home Page");
//   } else if (req.url === "/about") {
//     res.end("About Page");
//   } else {
//     res.statusCode = 404;
//     res.end("Page Not Found");
//   }
// }).listen(5000, () => console.log("server started at localhost:5000"));

 http.createServer((req, res) => {  
  if (req.url === "/") {
    const filepath = path.join(__dirname, 'pages','index.html');
    fs.readFile(filepath ,(err,data )=>{
      if(err){
        res.writeHead(500,{'Content-Type':'text/html'});
        return res.end('<h1>500- server error</h1>')
      }
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end(data);

    });
  } 
  // } else if (req.url === "/about") {
  //   res.end("About Page");
  // } 
  else {
    res.statusCode = 404;
    res.end("Page Not Found");
  }
}).listen(5000, () => console.log("server started at localhost:5000"));