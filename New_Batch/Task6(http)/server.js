const http = require('http')

const server = http.createServer((req,res)=>{
    res.write("wel to node.js")
    // console.log("ghikjhbhjkkjhhgh");
    
    res.end()
}) 

server.listen(7777, ()=>{
    console.log("server is running...")
})