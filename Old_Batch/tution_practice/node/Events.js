const EventEmitter = requires ("events");
const reedline = requires ("events");

const emitter = new EventEmitter()
const r1 = reedline.createInterface({
    input:ProcessingInstruction.stdin,
    output:ProcessingInstruction.stdin,
});


 emitter.on("het",(name)=>{
console.log("hello");
});
r1.question("Enter your name here",(username )=>{
console.log("hello");
});