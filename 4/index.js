const express= require("express");
const app= express();
const path= require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))
app.use(express.urlencoded({extended:true}));
app.use(express.json())

let data=[
    {
        id:1,
        username:"lucky",
        posts:["a life in a hell", "devil in a heaven"],
        like:200,
    },

    {
        id:2,
        username:"rocky",
        posts:["a life in sea", "devil in my mind"],
        like:100,
    },

]
app.get("/home", (req,res)=>{
    res.render("home.ejs",{data});
})

app.post("/home/register", (req,res)=>{
    let{username,password}= req.body;
    console.log(req.body);
    res.send(req.body.username)
})

app.get("/edit/:id",(req,res)=>{
    res.render("editForm.ejs")
})

app.post("/home",(req,res)=>{
    console.log(req.body)
    
    res.send("aa gya")
})

app.listen(8000,()=>{
    console.log("app is listening at 8000");
})