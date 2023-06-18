const net = require("net");

const HOSTNAME = "127.0.0.1";
const PORT = 6969;

const server = net.createServer();



let userSockets = []

server.on("connection", async (socket) => {
    console.log("A new connection was made..");

    const clientID = userSockets.length + 1 ;

    userSockets.map(SocketOBJ=>SocketOBJ.socket.write(`User ${clientID} Joined the Chatroom!`));
    
    socket.write(`id-${clientID}`)
    
    socket.on("data",(data)=>{
        const id = data.toString("utf-8").substring(0,data.toString().indexOf("-"));
        const message = data.toString("utf-8").substring(data.toString().indexOf("-message-")+9);

        userSockets.map(SocketOBJ=>{
            SocketOBJ.socket.write(`> User  ${id} : ${message}`)
        })
    })

    socket.on("end",()=>{
        userSockets.map(SocketOBJ=>
            SocketOBJ.socket.write(`User ${clientID} left the chatroom.`));
    })

    await userSockets.push({id:clientID.toString(),socket:socket});

})


// server.maxConnections=2;

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server is up and running at`, server.address())
})
        
            // for (let v = 0; v < userSockets.length; v++) {
            //     userSockets[v].on("data", (data) => {
            //         for (let i = 0; i < userSockets.length; i++) {
            //             userSockets[i].write(data.toString("utf-8"));
            //         }
            //     })
            // }