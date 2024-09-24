// console.log("hello");
const express=require("express");
// console.log(express);


const app=express();
// console.log(app);

// app.use((req,res)=>{
//     console.log("request hitting..........");
//     console.log(req);
// })

app.get("/dash",(req,res)=>{
    console.log(req);
    console.log(res);
    res.end("hiiii dashboard........");
})
// 0-1024 reserve tota 65k
app.listen(8000,()=>{
    console.log("server is running on 8000");
    
})





