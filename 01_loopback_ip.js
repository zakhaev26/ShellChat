const http = require("http");


const port = 4080 ;
const hostname ='127.0.0.1';
const wifi_interface = '192.168.1.6';

const server =http.createServer((req,res)=>{
    const data = {
        message : "Hi Mom"
    }
    res.setHeader =("Content-Type","application/json")
    res.setHeader =("Connection","close")
    res.statusCode = 200;
    res.end(JSON.stringify(data));
})

server.listen(port,wifi_interface, ()=>{
    console.log(`Server is up and running @  http://${wifi_interface}:${port}`)
})


//Turn on your mobile hotspot and connect laptop and another device , let say a tab to that network 
//MOBILE ACTS AS A ROUTER AND SWITCH
//THIS PROVIDES THE LAPTOP A NEW IP ADDRESS!