const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Schema
const UserSchema = new mongoose.Schema({
    name: String,
    email: String
});

const User = mongoose.model("User", UserSchema);

// CREATE
app.post("/users", async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

// READ ALL
app.get("/users", async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// UPDATE
app.put("/users/:id", async (req, res) => {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(user);
});

// DELETE
app.delete("/users/:id", async (req, res) => {
    await User.findByIdAndDelete(req.params.id);

    res.json({
        message: "Deleted Successfully"
    });
});

app.listen(process.env.PORT, () => {
    console.log("Server Running");
});