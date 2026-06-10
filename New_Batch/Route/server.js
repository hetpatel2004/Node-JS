const express = require("express")
const app = express()
const port = 4000

app.get("/",(req,res)=>{
    res.send("home page")
})
app.get("/text",(req,res)=>{
    res.send("the text for the text page")
})

app.listen(port,()=>{
    console.log("server is running");
})