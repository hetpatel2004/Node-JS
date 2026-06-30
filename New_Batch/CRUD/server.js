const express = require("express")
const mongoose = require("mongoose")
const port = 8888;
const app = express()

app.use(express.json())

const MONGO_URL="mongodb+srv://het:het1234567@cluster0.9g4tndh.mongodb.net/?appName=Cluster0/crud"

mongoose.connect(MONGO_URL)
.then(() => console.log("db connected"))
.catch((err) => console.log(err));

const u_scma = new mongoose.Schema({
    name: String,
    email: String
});

const User = mongoose.model("User", u_scma);

app.post("/user", async (req,res)=>{
    const user = await User.create(req.body);
    res.json(user);
})
app.get("/users", async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.listen(port,()=>{
    console.log("server is running on port",port)
})