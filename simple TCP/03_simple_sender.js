const net = require("net");


// const socket = net.createConnection({host: "127.0.0.1",port: 3099},() => {
//         socket.write("A simple message coming from simple sender!");
//         socket.end()
//     }
// )


const socket = net.createConnection({host: "127.0.0.1",port: 3099},() => {
    const buff = Buffer.alloc(3);;
    //creating buffers
    buff[0]=69
    buff[1]=71
    buff[2]=70
    
    socket.write(buff);
    socket.end()
}
)