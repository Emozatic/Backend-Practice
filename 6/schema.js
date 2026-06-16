const mongoose =require("mongoose");
const Schema= mongoose.Schema;

const userSchema= new Schema({
    name:String,
    posts:Number,
    likes:Number
})

let User= mongoose.model("User", userSchema);
module.exports= User;