 const net = require("net");
const readline = require("readline/promises")
 
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

 const client = net.createConnection({host:"127.0.0.1",port:6969},async ()=>{
    console.log("Connection created")

    const message = await rl.question("Enter a message  > ");
    client.write(message);
    const message2 = await rl.question("Enter a message  > ");
    client.write(message2);
    client.end()
 })

 client.on("close",()=>{
    console.log("Connection Closed.")
 })

 
 client.on("end",()=>{
    console.log("Connection Ended.")
 })
