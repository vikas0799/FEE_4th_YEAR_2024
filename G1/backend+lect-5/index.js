const express=require("express");
const app=express();


app.get("/",(req,res)=>{
    console.log("home page");
    res.send("home page responce");
    
})


app.get("/cat/:id",(req,res)=>{
    console.log("cat page",req.params);
    const {id}=req.params;
    res.send(`cat page responce with dynamic id = ${id}`);

    
})
app.get("/user/:profile/:picId/:commentId",(req,res)=>{
    console.log("first",req.params);
    // const {id}=req.params;
    res.send(` first ${req.params}`);    
})
app.get("/user/id",(req,res)=>{
    console.log("third" ,req.params);
    // const {id}=req.params;
    res.send(`third  ${req.params}`);    
})

app.get("/user/:id",(req,res)=>{
    console.log("second" ,req.params);
    // const {id}=req.params;
    res.send(`second  ${req.params}`); 
    
    // http://localhost:8000/user/fruite?apple=red 
    console.log(req.query);
})


app.get("/user/id",(req,res)=>{
    console.log("third" ,req.params);
    // const {id}=req.params;
    res.send(`third  ${req.params}`);    
})

app.get("/find",(req,res)=>{
    console.log("four" ,req.params);
    console.log(req.query);
    
    // const {id}=req.params;
    res.send(`four  ${req.params} is a url and ${req.query}`);    
})




// app.all is use for any type req(get,put,ptach...) and * is use any type of route
app.all("*",(req,res)=>{
    // console.log("wrong req or wrong route");
    console.log(req.params);
    
    res.send("wrong req or wrong route")
})

app.listen(8000,()=>{
console.log("server is running on 8000 port");
})