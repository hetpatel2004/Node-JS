const { listeners } = require("cluster");
const http = require("http");

const myserver = http.createServer( (req,res) => {
    console.log(req.headers);
    res.end("Answer of Request get from user");
});
   
myserver.listen(3000,() => {console.log("server start")});