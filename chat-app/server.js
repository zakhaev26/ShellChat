const net =require("net");

const HOSTNAME = "127.0.0.1";
const PORT  =  6969;

const server = net.createServer();

let i = 0 

server.on("connection",(socket)=>{
    console.log("A new connection was made.." + i);
    i++;
    socket.end()
})

server.listen(PORT,HOSTNAME,()=>{
    console.log(`Server is up and running at` , server.address())
})