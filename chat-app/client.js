 const net = require("net");

 

 const client = net.createConnection({host:"127.0.0.1",port:6969},()=>{
    console.log("Connection created")
    // client.end()
 })

 client.on("close",()=>{
    console.log("Connection Closed.")
 })

 
 client.on("end",()=>{
    console.log("Connection Ended.")
 })
