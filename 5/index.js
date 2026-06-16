const express= require("express");
const app= express();
const path= require("path");
const mongoose= require("mongoose");

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.urlencoded({extended:true}));
app.use(express.json())

main().then((res)=>{
    console.log("db connected successfully")
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/bk2")
}

const studentSchema= new mongoose.Schema({
    name:String,
    age:Number,
})
const Student= mongoose.model("Student", studentSchema)

const stud1= new Student({
    name:"rocky",
    age:23
})
// stud1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err)
// })
// Student.insertMany([{
//     name:"rahul",
//     age:22
// },{
//     name:"Happy",
//     age:19
// }]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

// Student.findOne({name:"Happy"}).then((res)=>{
//     console.log(res)
// })

Student.deleteMany({name:"Happy"}).then((res)=>{
    console.log(res)
})
app.listen(8000,()=>{
    console.log("app is listening at 8000");
})