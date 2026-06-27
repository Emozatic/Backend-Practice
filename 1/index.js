const express= require("express");
const app= express();
const path= require("path");
const mongoose= require("mongoose");


async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/backend1')
}

main().then(()=>{
    console.log("connected to mongo");
}).catch((err)=>{
    console.log(err);
})



app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))


app.get("/home",(req,res)=>{
    res.render("home.ejs");
})

app.get("/form",(req,res)=>{
    res.render("form.ejs");
})

app.post("/register",(req,res)=>{
    res.send("registered")
    console.log(req.body.username)
})

const port= 8000;
app.listen(port,()=>{
    console.log("app is listening at 8000");
})