const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.get("/",(req ,res)=>{
    // res.sendFile(path.join(__dirname,"view/index.html"));
    res.sendFile(path.join(__dirname,"view","index.html"));
});
app.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname,"view","home.html"));
})
app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"view","about.html"));
});

app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"view","login.html"));
});

app.get("/register",(req,res)=>{
    res.sendFile(path.json(__dirname,"view/register.html"));
});
app.post("/register",(req,res)=>{
    let {emial ,password} = req.body;

    res.send(`<h1>logined<h1>\n
        `)
})
// app.post("/submit",(req,res)=>{
app.post("/login",(req,res)=>{

// let email = req.body.email;
// let password = req.body.password;

let {email,password} = req.body

// console.log(email);
// console.log(password);

    res.send(`<h2>Hello</h2>
        ${email} welcome to webside \n 
        <a href = /login>Go back to login page </a>
         `);
});

app.listen(7000,()=>{
    console.log("request gone on localhost 7000");
});