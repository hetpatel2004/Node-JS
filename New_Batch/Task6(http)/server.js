const { log } = require('console');
const http = require('http')

// const server = http.createServer((req,res)=>{
//     res.write("wel to node.js")
//     // console.log("ghikjhbhjkkjhhgh");

//     res.end()
// }) 

// server.listen(7777, ()=>{
//     console.log("server is running...")
// })

// t2
// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.end("<h1>Hello welcome to my ws</h1>")
// })

// server.listen(3000,()=>{
//     console.log("server is running...");
// })

// t3
// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.end("<h1>Hello welcome to my ws</h1>")
// })
// const port = 7777;
// server.listen(port,()=>console.log("your server is running on port:-",port))

// t4,5,6,7,8
// const server = http.createServer((req,res)=>{
//     if (req.url === "/") {
//         res.write("home page");
//     }
//     else if (req.url === "/about"){
//         res.write("about page")
//     }
//     else if(req.url === "/contact"){
//         res.write("content page")
//     }
//     else{
//         res.statusCode = 404
//         res.write("page not found");
//     }
//     res.end()
// })
// server.listen(3000,()=>console.log("server is running")
// )

// t9 ,10
// const server = http.createServer((req,res)=>{
//     if (req.method === "GET") {//by defolt it will use get methord if you will use post then it will not print next line 
//         res.write("Get request")
//     }
//     res.end()
// })
// server.listen(3000,()=>console.log("server is running"))

// t11
// const server = http.createServer((req,res)=>{
//     const data = {
//         "name":"het",
//         "course":"node.js"
//     }

//     res.writeHead(200 ,{"Content-Type":"application/json"})

//     res.end(JSON.stringify(data))
// })
// server.listen(3000,()=>console.log('server is running'))

