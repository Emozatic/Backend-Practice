const express= require("express");
const app= express();
const path= require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))

app.get("/home/:value", (req,res)=>{
    let {value}= req.params;
    res.render("home.ejs",{num:value});
})

app.get("/home/username/:username", (req,res)=>{
    let listname= ["lucky", "ravi", "vikas"]
    let {username}= req.params;
    res.render("home.ejs",{username, listname});
})
app.listen(8000,(req,res)=>{
    console.log("app is listening at 8000")
})