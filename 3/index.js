const express= require("express");
const app= express();
const path=require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));
app.use(express.json());


// app.get("/profile/:name",(req,res)=>{

//     console.log(req.params.name);
//     console.log(req.query.city);
//     res.send("done");
// })

// app.get("/product/:id",(req,res)=>{

//     console.log(req.params.id);
//     console.log(req.query.category);
//     res.send("done");
// })

// app.get("/home",(req,res)=>{
//     let name= "Lucky";
//     res.render("home.ejs", {name})
// })

// app.get("/data",(req,res)=>{
//     res.render("home.ejs",{
//         name:"Lucky",
//         age:21,
//         skills:["art", "code", "edit"]
//     })
// })

let users=["Lucky", "Rahul"];
app.get("/home", (req,res)=>{
    res.send(users);
})

app.post("/home",(req,res)=>{
    users.push(req.body.name);
    console.log(users.body)
    res.send(users);
})

app.delete("/home/:name",(req,res)=>{
    let username= req.params.name;
    users.filter((users)=>{
        return users!==username;
    })
    res.redirect(users)
})
app.listen(8000,(req,res)=>{
    console.log("app is listening at 8000");
})