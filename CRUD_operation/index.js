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
     // 1️⃣ Get id from URL
    const id = Number(req.params.id);

    // 2️⃣ Get updated data from body
    const body = req.body;

    // 3️⃣ Find user index
    const index = user.findIndex((u) => u.id === id);

    // 4️⃣ If user not found
    if (index === -1) {
        return res.json({ message: "User not found" });
    }

    // 5️⃣ Update only provided fields
    user[index] = {
        ...user[index],   // old data
        ...body           // new edited data
    };

    // 6️⃣ Save updated data into JSON file
    fs.writeFile(
        "./MOCK_DATA.json",
        JSON.stringify(user),
        (error) => {
            if (error) {
                return res.json({ message: "Error updating user" });
            }
            return res.json({
                status: "User updated successfully",
                updatedUser: user[index]
            });
        }
    );
})
app.delete("/user/:id",(req,res)=>{
     // get id from URL
    const id = Number(req.params.id);

    // find index of user
    const index = user.findIndex((u) => u.id === id);

    // if user not found
    if (index === -1) {
        return res.json({ message: "User not found" });
    }

    // remove user from array
    user.splice(index, 1);

    // update JSON file
    fs.writeFile(
        "./MOCK_DATA.json",
        JSON.stringify(user),
        (error) => {
            if (error) {
                return res.json({ message: "Error deleting user" });
            }

            return res.json({
                status: "User deleted successfully"
            });
        }
    );
})

app.listen(7474, ()=>{
    console.log("request sent on port 7474");
    
})