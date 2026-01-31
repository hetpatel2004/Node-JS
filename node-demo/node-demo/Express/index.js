const express = require("express");
const path = require("path");

const obj = express();

obj.get("/het",(req ,res)=>{
    // res.sendFile(path.join(__dirname,"view/index.html"));
    res.sendFile(path.join(__dirname,"view","index.html"));
});
obj.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname,"view","home.html"));
})
obj.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"view","about.html"));
});

obj.listen(7777,()=>{
    console.log("request gone on localhost 7777");
});