let http = require("http");
http.createServer((req,res)=>{
    res.end('text\n');

}).listen(5000,()=> console.log("server start at localhost"))