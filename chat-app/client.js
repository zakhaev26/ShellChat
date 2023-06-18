 const { clear } = require("console");
const net = require("net");
const readline = require("readline/promises")
 
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const clearline = (dir)=>{
    
    return new Promise ((resolve,reject)=>{
        process.stdout.clearLine(dir,()=>{
            resolve();
    });
});
}

const moveCursor = (dx,dy)=>{
    return new Promise((resolve ,reject)=>{
        process.stdout.moveCursor(dx,dy,()=>{
            resolve();
        })
    })    
}


 const client = net.createConnection({host:"127.0.0.1",port:6969},async ()=>{
    console.log("Connection created")

    const ask = async () =>{
        const message = await rl.question("Enter a message  > ");   
        if (message == '') ask();
        await moveCursor(0,-1)
        await clearline(0);//clears the current line cursor is currently in ..
        client.write(message);
        
    };
    
    ask();

    client.on("data",async (data)=>{
        console.log();
        await moveCursor(0,-1)
        await clearline(0);
        console.log(data.toString("utf-8"));
        ask();
    })
    

})

// client.on("data",async (data)=>{
//     await moveCursor(0,-1)
//     await clearline(0);
//     console.log(data.toString("utf-8"));
//     ask();
// })


//  client.on("close",()=>{
//     console.log("Connection Closed.")
//  })

 
//  client.on("end",()=>{
//     console.log("Connection Ended.")
//  })
