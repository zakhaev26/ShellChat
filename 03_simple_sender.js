const net = require("net");


const socket = net.createConnection({
    host: "127.0.0.1",
    port: 3099
},
    () => {
        socket.write("A simple message coming from")
    }
)


