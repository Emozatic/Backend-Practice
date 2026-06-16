const express= require("express");
const app= express();
const path= require("path");
const mongoose= require("mongoose")
let Chats= require("./chats")
const methodOverride= require("method-override")


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(methodOverride("_method"))



main().then((res)=>{
    console.log("connected to mongoose")
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/bk3")
}

// Chats.insertOne({from:"Lucky", to:"Rocky", msg:"Kaise ho"}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

app.get("/home",async(req,res)=>{
    let chat= await Chats.find({});
    console.log(chat);
    res.render("home.ejs",{chat});
})

app.get("/home/new",(req,res)=>{
    res.render("new.ejs")
})


app.post("/home",async(req,res)=>{
    let {from, to, msg}= req.body;
    let chat = new Chats({
        from:from,
        to:to,
        msg:msg
    });
    chat.save().then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
    res.redirect("/home")
})

app.get("/home/edit/:id",async(req,res)=>{
    let id= req.params.id;
    let chats= await Chats.findById(id);
    console.log(chats);
    res.render("edit.ejs", {chats});
})

app.put("/home/:id", async(req,res)=>{
    let id= req.params.id;
    let {msg}= req.body;
    console.log(msg)
    let updatedChat= await Chats.findByIdAndUpdate(id,{msg:msg});
    res.redirect("/home");
})

app.delete("/home/delete/:id",async(req,res)=>{
    let {id} = req.params;
    let deleteChat= await Chats.findByIdAndDelete(id);
    console.log(deleteChat);
    res.redirect("/home");

})

app.listen(8000,()=>{
    console.log("app is listening at 8000")
})