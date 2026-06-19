const express= require("express");
const app= express();
const ExpressError= require("./ExpressError");




// app.use((req,res,next)=>{
//     console.log("middleware this side")
//     req.time= new Date(Date.now()).toString();
//     console.log(req.time, req.hostname, req.method)
//     next();
// })

// let giveAccess= "1234";
// app.use((req,res,next)=>{
//     let pass= req.query.pass;
//     if(pass===giveAccess){
//         next();
//     }
//     else{
//         res.send("Access Denied");
//     }
// })

//custom error handling
const checkToken=app.use("/home",(req,res,next)=>{
    console.log("chal gya hoon")
    let token=1234;
    let {qtoken}= req.query
    if(token==qtoken){
        next();
    }
    else{
        throw new ExpressError(401,"Access Denied");
    }
});

app.get("/home",checkToken,(req,res)=>{
    console.log("welcome");
    res.send("welcome");
})

app.listen(8000,()=>{
    console.log("app is listening at 8000");
})