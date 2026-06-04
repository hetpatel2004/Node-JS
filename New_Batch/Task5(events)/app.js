const events = require('events')

const emitter = new events()

// emitter.on("het",()=>{
//     console.log("welcome to node.js");
    
// })
// emitter.on("het",()=>{
//     console.log("hello my name is het");
    
// })

// emitter.emit("het")

// t7
// emitter.on("login",()=>{
//     console.log("dutjhfgkl");
    
// })
// t8
// emitter.emit("login")

// t9
// emitter.once("callonce",()=>{
//     console.log("dfgyuiolkjhbv");
    
// })

// t10
// emitter.emit("callonce")
// emitter.emit("callonce")

// t11
// emitter.on("paymentsucces",()=>{
//     console.log("check paymentsucces");
    
// })
// emitter.emit("paymentsucces");

// t12
// emitter.on("error",(e)=>{
//     console.log("error raze",e);
// })
// emitter.emit("error",new Error("syntex error"));

// t13
// emitter.on("colling",()=>{
//     console.log("running");
    
// })
// emitter.on("colling",()=>{
//     console.log("running.");
    
// })
// emitter.on("colling",()=>{
//     console.log("running..");
    
// })
// emitter.on("colling",()=>{
//     console.log("running...");
    
// })
// emitter.once("colling",()=>{
//     console.log("running....");
    
// })
// emitter.once("colling",()=>{
//     console.log("running.....");
    
// })

// emitter.emit("colling");

// t14
// emitter.on("notification",(mes,email)=>{
//     console.log(`hello ${email} your mesg ${mes} `);
// })
// emitter.emit("notification","hello node.js","hetpatel@gmail.com")

// t15
// emitter.on("msg",(text)=>{
//     console.log(`your text msg ${text}`);
    
// })
// emitter.emit("msg","hello");

// t16
// emitter.on("upload", (file) => {
//   console.log(`${file} uploaded successfully`);
// });

// emitter.emit("upload", "abc.pdf");

// t17
// function uploadDone() {
//     console.log('File upload completed!');
// }

// emitter.on('uploadCompleted', uploadDone);

// emitter.removeListener('uploadCompleted', uploadDone);

// emitter.emit('uploadCompleted');

// t18
// emitter.on("start",()=>{
//     console.log(`event start`);
    
// })
// emitter.on("stop",()=>{
//     console.log(`event stop`);
    
// })
// emitter.on("reset",()=>{
//     console.log(`event reset`);
    
// })

// emitter.emit("start")
// emitter.emit("stop")
// emitter.emit("reset")

// t19
// emitter.on("testing",()=>{
//     console.log(`testing `);    
// })
// emitter.on("testing",()=>{
//     console.log(`testing `);    
// })

// emitter.on("testing",()=>{
//     console.log(`testing `);    
// })
// emitter.on("testing",()=>{
//     console.log(`testing `);    
// })

// emitter.emit("testing")
// emitter.emit("testing")

// emitter.emit("testing")

// t20
// emitter.on("userlogin",(username,timestamp)=>{
//     console.log(`user '${username}' logged in successfully at ${timestamp}.`);
// })
// emitter.once("initsystem",()=>{
//     console.log("database connection initialized (this runs only once).");
// })
// emitter.on("error",(err)=>{
//     console.error(`application encountered an issue: ${err.message}`);
// })

// emitter.emit("initsystem")
// emitter.emit("initsystem")

// emitter.emit("userlogin","het_patel","04:30 pm")
// emitter.emit("userlogin","aastha","10:00 pm")

// emitter.emit("error",new error("failed to load user profile data"))