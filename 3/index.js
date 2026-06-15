const express= require("express");
const app= express();
const path=require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));


// app.get("/profile/:name",(req,res)=>{

//     console.log(req.params.name);
//     console.log(req.query.city);
//     res.send("done");
// })

app.get("/product/:id",(req,res)=>{

    console.log(req.params.id);
    console.log(req.query.category);
    res.send("done");
})

app.listen(8000,(req,res)=>{
    console.log("app is listening at 8000");
})