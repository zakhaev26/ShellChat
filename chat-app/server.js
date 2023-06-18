const net = require("net");

const HOSTNAME = "127.0.0.1";
const PORT = 6969;

const server = net.createServer();



let userSockets = []

server.on("connection", async (socket) => {
    console.log("A new connection was made..");

    await userSockets.push(socket);

    // for (let v = 0; v < userSockets.length; v++) {
    //     userSockets[v].on("data", (data) => {
    //         for (let i = 0; i < userSockets.length; i++) {
    //             userSockets[i].write(data.toString("utf-8"));
    //         }
    //     })
    // }

    socket.on("data",(data)=>{
        userSockets.map(s=>{
           s.write(data.toString("utf-8"))
        })
    })
})


// server.maxConnections=2;

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server is up and running at`, server.address())
})