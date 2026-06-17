const express = require("express");
const app = express();
const port = 7777

// t1
// app.use((req, res, next) => {
//     // res.send("welcome home")
//     console.log("mw is running")
    
//     console.log(req.method)//t2

//     next()
// })

// app.get("/", (req, res) => {
//     res.send("dfghjklmnbvc")

// })


// let count = 0
// t3
// app.use((req,res,next)=>{
//     console.log("mw is running")
//     console.log(req.url)
//     console.log(new Date())//4
//     count++//t5
//     console.log("number of counting of url request",count);//t5
//     next()
    
// })

// app.get("/", (req, res) => {
//     res.send("dfghjklmnbvc")

// })
// app.get("/about", (req, res) => {
//     res.send("about page")

// })
// app.get("/contact", (req, res) => {
//     res.send("contact page")

// })

// t6
// app.use((req,res,next)=>{
//     console.log("mw one")
//     next();
// })
// app.use((req,res,next)=>{
//     console.log("mw two")
//     next();
// })
// app.use((req,res,next)=>{
//     console.log("mw three")
//     next();
// })

// app.get("/", (req, res) => {
//     res.send("test page")
// })

// t7
// app.use((req,res,next)=>{
//     req.user ={
//         name:"het",role:"student"
//     }
//     next()
// })
// app.get("/",(req,res)=>{
//     res.json(req.user)
// })

// t8
// app.use((req,res,next)=>{
//     if (req.query.token) {
//         console.log("MW is working");
//         next();
//     }
// })

// t9
// function mw(req,res,next) {
//     res.send("mw is running")
//     next()
// }
// app.get("/profile",mw,(req,res)=>{
//     res.send("profile page")
// })
// app.get("/about",(req,res)=>{
//     res.send("about page")
// })

// t10
// app.use((req,res,next)=>{
//     if (req.url === '/favicon.ico') {
//         return next(); 
//     }
//     console.log(`${req.method} ${req.url}`)
//     console.log("MW is running")
//     next()
// })

// app.get("/about",(req,res)=>{
//     res.send("about page")
// })

// t11
// function valid (req,res,next) {
//     if (!req.query.name) {
//          res.status(404)
//         res.send("name required")
//     }
//     next()
// }

// app.get("/about",valid,(req,res)=>{
//     res.send(`welcome ${req.query.name}`)
// })
// http://localhost:7777/about?name=het will give correct out put 

// t12
// function header_req (req,res,next) {
//     console.log(req.headers)
//     next()
// }
// app.get("/",header_req,(req, res)=>{
//     res.send("home page")
// })
// app.listen(port, console.log("server is running...."))

// t13
// app.use((req,res,next)=>{})