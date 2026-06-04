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
emitter.on("paymentsucces",()=>{
    console.log("check paymentsucces");
    
})
// emitter.emit("paymentsucces");

// t12
emitter.on("error",(e)=>{
    console.log("error raze",e);
})
emitter.emit("error",)

// t13
// emitter.emit("error","paymentsucces")

// t14
