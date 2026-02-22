const express = require("express");
const fs = require("fs");
const user = require("./MOCK_DATA.json");
const { json } = require("stream/consumers");
const app = express();

app.use(express.urlencoded({extended:false}));
app.get("/user",(req,res)=>{
    return res.json(user);
})

app.get("/user/:id",(req,res)=>{
    const id = Number(req.params.id);
    const users = user.find((users)=> users.id === id);
    return res.json(users);
})
app.post("/user",(req,res)=>{
    const body = req.body;
    console.log("body",body);
    user.push({ ...body , id: user.length +1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(user),(error ,data)=>{
        return res.json({status:"panding",id: user.length +1 })
    })
})
app.patch("/user/:id",(req,res)=>{
    return res.json({
        status:"pading of patch"
    })
})
app.delete("/user/:id",(req,res)=>{
    return res.json({
        status:"pading of delete"
    })
})

app.listen(7474, ()=>{
    console.log("request sent on port 7474");
    
})