const express= require("express");
const app= express();
const path= require("path");
const mongoose= require("mongoose")
const User= require("./schema")


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))
app.use(express.urlencoded({extended:true}));
app.use(express.json())



main().then((res)=>{
    console.log("connected to mongoose")
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/bk3")
}


User.insertOne({name:"Lucky", posts:21, likes:2000}).then((res)=>{
    console.log(res)
})

app.get("/home",async(req,res)=>{
    let data= await User.find({});
    res.render("home.ejs",{data});
})

app.listen(8000,()=>{
    console.log("app is listening at 8000");
})