const mongoose = require("mongoose");
// const fs = require("fs");

// function connection() {
//   console.log("calling");
//   mongoose.connect("mongodb+srv://hetpatel010420047_db_user:HRKP@1287@cluster0.iocci0v.mongodb.net/")
//     .then(() => {
//       console.log("DB Connected");
//     })
//     .catch((error) => {
//       console.log("MongoDB Failed");

//       const dateTime = new Date();

//       const errorText = `
// Connection Failed
// Date-Time: ${dateTime}
// Error: ${error.message}
// `;
//       fs.appendFileSync("connection-error.txt", errorText);
//     });
// }
// module.exports = connection;

const connectdb = async()=>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URL);
        console.log(`DB connected ${conn.connection.host}`);
    }
    catch(error){
        console.error(error.message);
        process.exit(1);    
    }
}