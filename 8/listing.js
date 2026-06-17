const mongoose= require("mongoose");

const Schema= mongoose.Schema;

let listingSchema= new Schema({
    title:String,
    description:String,
    image:{
        type:String,
        filename:String,
        

    },
    price:Number,
    location:String,
    country:String
})

let Listing= mongoose.model("Listing", listingSchema);
module.exports= Listing;