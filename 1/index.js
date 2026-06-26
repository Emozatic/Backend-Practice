const express= require("express");
const app= express();




app.set("view engine","ejs");
//console.log(app);


app.get("/",(req,res)=>{
    res.send("Hello World!");
})

app.get("/html",(req,res)=>{
    let code= "<h1>This is Html generated</h1>"
    res.send(code);
})

app.get("/home/:name",(req,res)=>{
    console.log(req.params.name);
    console.log(req.query);
})



const port= 8000;
app.listen(port,()=>{
    console.log("app is listening at 8000");
})