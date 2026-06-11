const express = require("express")
const app = express();
// const port = 7000

// t1,2,3,4,5,6
app.get("/", (req, res) => {
     res.send("home page")
})
app.get("/about", (req, res) => {
     res.send("about page")
})
app.get("/contact", (req, res) => {
     res.send("contact page")
})
app.get("/text", (req, res) => {
     res.send("plain text")
})

// t8
app.get("/page", (req, res) => {
     res.end("<h1>text</h1>")
})
// t9
app.get("/user", (req, res) => {
     res.json({
          name: "het",
          roll: 77,
          marks: 44
     })
      res.end("<h1>text</h1>")

})
// t10
app.get("/student", (req, res) => {
     res.json({
          name: "het",
          s_name: "patel",
          roll: 77,
          marks: 44
     })
          res.end("<h1>text</h1>")

})
// t11
app.get("/product", (req, res) => {
     res.json({
          product_name: "abc",
          p_price: "dfgh",
          p_id: 77
     })
          res.end("<h1>text</h1>")

})
// t12
app.get("/course", (req, res) => {
     res.json({
          c_name: "ui ux",
          c_price: "500",
          c_id: 77
     })
     res.end("<h1>text</h1>")

})
// t13
app.get("/employ", (req, res) => {
     res.json({
          e_name: "abc",
          e_sel: "7890",
          e_id: 77
     })
     res.end("<h1>text</h1>")

})
// t14
app.get("/company", (req, res) => {
     res.json({
          e_name: "abc lem",
          e_id: 327
     })
          res.end("<h1>text</h1>")

})
// t15
app.get("/book", (req, res) => {
     res.json({
         book:"happy book",
         book_price:9779,
         year:2003
     })
          res.end("<h1>text</h1>")

})
// t16
app.get("/mobile", (req, res) => {
     res.json({
         mobile:"oneplus",
         book_price:90000,
         year:2000
     })
          res.end("<h1>text</h1>")

})
// t17
app.get("/collage", (req, res) => {
     res.json({
         clg:"gls",
         fee:90000,
         year_of_start:2000
     })
          res.end("<h1>text</h1>")

})
// t18
app.get("/status", (req, res) => {
     res.json({
         status:"logine",
     })
          res.end("<h1>text</h1>")

})
// t19
app.get("/welcome", (req, res) => {
     res.json({
        message:"welcome"
     })
          res.end("<h1>text</h1>")

})

app.use((req, res) => {
     res.status(404)
     res.send("error page not found")
})
app.listen(7000, () => {
     console.log("server is running on port 7000");
});
