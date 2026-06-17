const express = require("express")
const app = express()
const port = 3000;


// t1
// app.use((req, res, next) => {
//     console.log("mw running");
//     next();
// });

// app.get("/", (req, res) => {
//     res.send("home page");
// });

// t2
// app.use((req,res,next)=>{
//     console.log(req.method, req.url);
//     next();
// });

// app.get("/",(req,res)=>{
//     res.send("Home");
// });

// t3
// app.use((req,res,next)=>{
//     console.log("request rec");
//     next();
// });

// app.get("/",(req,res)=>{
//     res.send("home");
// });

// app.get("/about",(req,res)=>{
//     res.send("About");
// });

// // t4
// app.use((req,res,next)=>{
//     console.log(new Date());
//     next();
// });

// app.get("/",(req,res)=>{
//     res.send("home");
// });

// t5
// app.use((req,res,next)=>{
//     console.log("middleware 1");
//     next();
// });

// app.use((req,res,next)=>{
//     console.log("middleware 2");
//     next();
// });

// app.get("/",(req,res)=>{
//     res.send("Home");
// });

// t6
// function auth(req,res,next){
//     console.log("route mw");
//     next();
// }

// app.get("/profile",auth,(req,res)=>{
//     res.send("Profile Page");
// });

// t7
// function auth(req,res,next){

//     if(req.query.token==="123"){
//         next();
//     }
//     else{
//         res.status(401).send("page not found ");
//     }
// }

// app.get("/dashboard",auth,(req,res)=>{
//     res.send("Dashboard");
// });

// t8
// app.use(express.json());

// app.post("/user",(req,res)=>{
//     res.json(req.body);
// });

// t9
// app.use(express.json());
// app.post("/register",(req,res)=>{

//     const {name,email,password}=req.body;

//     res.json({
//         message:"User Registered",
//         name,
//         email
//     });
// });

// t10 doubt

// t11
// app.use(express.static("public"));
// app.get("/",(req,res)=>{
//     res.send(`
//     <link rel="stylesheet" href="/style.css">
//     <h1>Hello CSS</h1>
//     `);
// });

// t12
// app.use(express.static("public"));
// app.get("/",(req,res)=>{
//     res.send(`
//     <img src="/image.jpg" width="300">
//     `);
// });

// t13
// created file 
// app.use(express.static("public"));

// t14
// let count = 0;
// app.use((req,res,next)=>{
//     count++;
    // console.log("Visitors :",count);
//     next();
// });
// app.get("/",(req,res)=>{
//     res.send(`Visitors ${count}`);
// });

// t15
// function blocks(req,res,next){
//     if(req.query.block==="true"){
//      res.send("no acces");
//     }
//     next();
// }
// app.get("/admin",blocks,(req,res)=>{
//     res.send("role admin");
// });

// t16
// app.get("/",(req,res,next)=>{
//     next(new Error("Something Went Wrong"));
// });
// app.use((err,req,res,next)=>{
//     res.status(500).send(err.message);
// });

// t17
// app.get("/",(req,res,next)=>{
//     try{
//         throw new Error("Custom Error");
//     }
//     catch(err){
//         next(err);
//     }
// });
// app.use((err,req,res,next)=>{
//     res.status(500).send(err.message);
// });

// t18
// app.get("/",(req,res)=>{
//     res.send("Home");
// });
// app.use((req,res)=>{
//     res.status(404).send("Page Not Found");
// });

// t19
// function validate(req,res,next){
//     if(!req.query.name){
//         return res.status(400).send("Name Required");
//     }
//     next();
// }
// app.post("/user",validate,(req,res)=>{
//     res.send(`Welcome ${req.query.name}`);
// });

// t20
// app.use(express.json());

// let abc = 0;

// app.use((req,res,next)=>{
//     abc++;
//     next();
// });

// app.use((req,res,next)=>{
//     console.log(req.method,req.url);
//     next();
// });

// function auth(req,res,next){

//     if(req.query.token==="123"){
//         next();
//     }
//     else{
//         res.status(401).send("un-authorized");
//     }
// }

// app.get("/",(req,res)=>{
//     res.send("home Page");
// });

// app.get("/dashboard",auth,(req,res)=>{
//     res.send("Dashboard");
// });

// app.use((req,res)=>{
//     res.status(404).send("404 page not found");
// });

// app.use((err,req,res,next)=>{
//     res.status(500).send(err.message);
// });



app.listen(port, () => {
    console.log("server is running....")
})