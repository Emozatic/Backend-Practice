const express= require("express");
const app= express();
//console.log(app);


app.get("/",(req,res)=>{
    res.send("Hello World!");
})

app.get("/html",(req,res)=>{
    let code= "<h1>This is Html generated</h1>"
    res.send(code);
})







const port= 8000;
app.listen(port,()=>{
    console.log("app is listening at 8000");
})