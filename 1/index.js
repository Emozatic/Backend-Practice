const express= require("express");
const app= express();
const path= require("path");
const mongoose= require("mongoose");


async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/backend1')
}

main().then(()=>{
    console.log("connected to mongoDB");
}).catch((err)=>{
    console.log(err);
})



app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))


const newSchema= new mongoose.Schema({
    name:String,
    age:Number,
});
let Student= mongoose.model("Student",newSchema);

const stud1= new Student({
    name:"Lucky",
    age:20
})

// stud1.save().then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

// Student.insertMany([
//     {
//         name:"Rocky",
//         age:18
//     },
//     {
//         name:"Rahul",
//         age:22
//     }
// ]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

// Student.find().then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

// Student.findByIdAndDelete("6a3fc4a35ec420b0dfd4df68").then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

const port= 8000;
app.listen(port,()=>{
    console.log("app is listening at 8000");
})