const net =require("net");

const HOSTNAME = "127.0.0.1";
const PORT  =  6969;

const server = net.createServer();

let i = 0 

server.on("connection",(socket)=>{
    console.log("A new connection was made.." + i);
    socket.on("data",(data)=>{
        console.log(data.toString("utf-8"))
    })
    socket.on("close",()=>{
        console.log("The client closed connection!")
    })
    
    // socket.end()
})

// server.maxConnections=2;

server.listen(PORT,HOSTNAME,()=>{
    console.log(`Server is up and running at` , server.address())
})