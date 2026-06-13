const express= require("express");
const app= express();

const port= 3000;


// app.use((req,res)=>{
//     res.send("hello world")
//     console.log("console")
//     next()      
// })

app.get("/",(req,res)=>{
    res.send("home tab");
})

app.get("/home/:id",(req,res)=>{
    console.log(req.params.id);
})

app.get("/home",(req,res)=>{
    console.log(req.query.q);
})


app.listen(port,()=>{
    console.log("app is listening at 3000");
})