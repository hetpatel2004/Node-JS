const express = require("express");
const app = express();

const port = 2000;

// t1
// app.get("/api", (req, res) => {
//     res.status(200).json({
//         "message": "hello"
//     });
// });

// t2
// app.get("/user",(req,res)=>{
//     const user = [
//         {
//             name:"het", age:"22"
//         },
//         {
//             name:"het1", age:"22"
//         },
//         {
//             name:"het2", age:"22"
//         }
//     ]
//     res.send(user)
// })

// t3

// const user = [
//         {
//             id:1,name:"het", age:"22"
//         },
//         {
//             id:2,name:"het1", age:"22"
//         },
//         {
//             id:3,name:"het2", age:"22"
//         }
//     ]
// app.get("/user/:id",(req,res)=>{
    
//     const user_id = Number(req.params.id);

//     const cond = user.find((data)=>{ return data.id === user_id})//return is imp 

//     res.json(cond)    
// })

// t4
// const products = [
//     {
//         id: 1,
//         name: "Laptop",
//         price: 50000
//     },
//     {
//         id: 2,
//         name: "Mobile",
//         price: 20000
//     },
//     {
//         id: 3,
//         name: "Headphones",
//         price: 3000
//     }
// ];

// app.get("/products", (req, res) => {
//     res.json(products);
// });

// t5


app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});