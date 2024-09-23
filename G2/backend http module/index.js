// console.log(module);
const fs=require("fs");
// console.log(fs);

// fs.writeFile('newFile.txt', 'Hello, world!', 'utf8', (err) => {
//     if (err) throw err;
//     console.log('File written successfully');
//   })
// fs.appendFile("newFile.txt","\n chitkara university",(err)=>{
//     if(err) throw err;
//     console.log("data appended sucuusfully");
    
// })


// const os=require("os");
// console.log(os.cpus());

const http=require("http");
// console.log(http);
const server= http.createServer((req,res)=>{
    console.log("req hitting");
    console.log(req.url);
    
    res.end("hiiii");

 })

server.listen(8000);
