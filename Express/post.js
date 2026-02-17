const express = require("express");
const fs = require("fs");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/",(req ,res)=>{
    // res.sendFile(path.join(__dirname,"view/index.html"));
    res.sendFile(path.join(__dirname,"view","index.html"));
});
app.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname,"view","home.html"));
});
app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"view","about.html"));
});
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"view","login.html"));
});
app.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname,"view/register.html"));
});
app.post("/register",(req,res)=>{
    let {name,email ,password,gander} = req.body;
    let FILE_PATH = path.join(__dirname, "user.json");
    let user = fs.readFileSync(FILE_PATH,"utf-8");
    let final = JSON.parse(user);
    final.push({name ,email,password,gander});
    fs.writeFileSync(FILE_PATH, JSON.stringify(final, null, 2))
    // fs.writeFileSync((path.join(__dirname,"user.json")),JSON.stringify(user,null,2))
    res.cookie(name,email);
    res.send(`<h1>Registered<h1>
<a href ="/">Go back to index page </a>`);
});
// app.post("/submit",(req,res)=>{
app.post("/login",(req,res)=>{

// let email = req.body.email;
// let password = req.body.password;

let {email,password} = req.body;

// console.log(email);
// console.log(password);
 let FILE_PATH = path.join(__dirname, "user.json");
        let user = fs.readFileSync(FILE_PATH,"utf-8");
         let final = JSON.parse(user);
        const users = final.find(u=>u.email===email && u.password===password);
    // if (email === email && password === password) {
    if (!users){
        return res.send("Invalid")
    }
    else{
        console.log("logined successfuly ");
        res.send(`<h2>logined succesfully</h2>
            ${email} logined successfuly \n 
            <a href = "/">Go back to index page </a>
            `);
            }
});
app.listen(7000,()=>{ 
    console.log("request gone on localhost 7000");
});
