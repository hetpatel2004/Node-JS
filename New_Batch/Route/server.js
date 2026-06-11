const express = require("express")
// t1
const app = express()
const port = 4000

// t2
app.get("/",(req,res)=>{
    res.send("home page")
})
app.get("/text",(req,res)=>{
    res.send("the text for the text page")
})
app.get("/about",(req,res)=>{
    res.send("about page ")
})
app.get("/contact",(req,res)=>{
    res.send("contact page ")
})

// t3
app.get("/user", (req, res) => {
    res.json({
        name: "het",
        roll: 77,
        marks: 44
    })
    resizeBy.end()
})
// // t4
app.get("/student", (req, res) => {
     res.json({
          name: "het",
          s_name: "patel",
          roll: 77,
          marks: 44
     })
          res.end("<h1>text</h1>")
})

// // t5
app.get("/product", (req, res) => {
     res.json({
          product_name: "abc",
          p_price: "dfgh",
          p_id: 77
     })
res.end()
})

// t6
app.post("/msg",(req,res)=>{
    res.send("success")
})

// t7
app.post("/register",(req,res)=>{
    res.end("register page")
})

// t8
app.post("/login", (req, res) => {
    res.end("login success")
})

// t9
app.post("/orders", (req, res) => {
    res.status(201).json({
        success: true,
        message: "Order placed successfully!",
        order: "newOrder"
    });
    res.end("order created succesfully")
})

// t10
app.post("/enroll", (req, res) => {
    res.end("enroll success")
})

// t11
app.put("/enroll", (req, res) => {
    res.end("the updated code")
})

// t12
app.put("/user", (req, res) => {
    res.end("the updated user")
})

// t13
app.put("/product", (req, res) => {
    res.json({
        product_name: "abc",
        p_price: "dfgh",
        p_id: 77,
        added: "updated"
    })
    res.end()
})

// t14
app.put("/student", (req, res) => {
     res.json({
          name: "het",
          s_name: "patel",
          roll: 77,
          marks: 44,
          added: "updated student"
     })
})

// t15
app.delete("/msg",(req,res)=>{
    res.send("msg delete")
})

// t16
app.delete("/user",(req,res)=>{
    res.end("user delete")
})

// t17
app.delete("/product",(req,res)=>{
    res.end("product delete")
})

// t18
app.delete("/course",(req,res)=>{
    res.end("course delete")
})


// 19
app.get("/myname",(req,res)=>{
        res.send("my name is het")
})
app.post("/myname",(req,res)=>{
        res.end("my name is het")
})
app.put("/myname",(req,res)=>{
     res.end("my name is het patel.....")
})
app.delete("/myname",(req,res)=>{
     res.end("name del.....")
})


// t20
app.get("/myname", (req, res) => {
    res.send("my name is het")
})

app.get("/user", (req, res) => {
    res.json({
        name: "het",
        roll: 77,
        marks: 44
    })
})



app.post("/enroll", (req, res) => {
    res.end("enroll success")
})

app.post("/myname", (req, res) => {
    res.send("my name is het")
})



app.put("/user", (req, res) => {
    res.end("the updated user")
})

app.put("/product", (req, res) => {
    res.json({
        product_name: "abc",
        p_price: "dfgh",
        p_id: 77,
        added: "updated"
    })
})


app.delete("/msg", (req, res) => {
    res.send("msg delete")
})

app.delete("/product", (req, res) => {
    res.end("product delete")
})










app.listen(port, () => {
    console.log("server is running....");
})