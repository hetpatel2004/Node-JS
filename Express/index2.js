const express = require("express");
const path = require("path");
const fs = require("fs");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/het",(req ,res)=>{
    // res.sendFile(path.join(__dirname,"view/index.html"));
    res.sendFile(path.join(__dirname,"view","index.html"));
});
app.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname,"view","home.html"));
})
app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"view","about.html"));
});

app.get("/register", (req, res) => {
  res.send("Register Page");
});

app.post("/register", (req, res) => {
  const { email, password } = req.body;

  const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));

  users.push({ email, password });

  fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

  res.cookie("user", email); // store email in cookie

  res.send("Registration successful");
});

app.get("/login", (req, res) => {
  res.send("Login Page");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));

  const userFound = users.find(
    user => user.email === email && user.password === password
  );

  if (!userFound) {
    return res.status(401).send("Invalid credentials");
  }

  res.cookie("user", email);
  res.send("Login successful");
});

// const authMiddleware = (req, res, next) => {
//   const user = req.cookies.user;

//   if (!user) {
//     return res.status(403).send(" Please login to access dashboard");
//   }

//   next(); // user is logged in
// };

app.get("/dashboard", authMiddleware, (req, res) => {
  res.send(`📊 Dashboard - Welcome ${req.cookies.user}`);
});

app.get("/logout", (req, res) => {
  res.clearCookie("user");
  res.send(" Logged out successfully");
});

app.listen(7777,()=>{
    console.log("request gone on localhost 7777");
});