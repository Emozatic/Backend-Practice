const mongoose= require("mongoose");
const Schema= mongoose.Schema;

let chatsSchema= new Schema({
    from:{
        type:String,
    },
    to:{
        type:String,
    },
    msg:{
        type:String,
    },
    
})

const Chat= mongoose.model("Chat",chatsSchema)
module.exports= Chat;