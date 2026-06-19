const express= require("express");
const app= express();
const path= require("path");
const mongoose= require("mongoose")
const methodOverride= require("method-override")
const Listing= require("./listing");
const ejsMate= require("ejs-mate")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(methodOverride("_method"))
app.engine("ejs",ejsMate)
app.use(express.static(path.join(__dirname,"/public")))

main().then((res)=>{
    console.log("connected to mongoose")
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/bk4")
}


app.get("/home",async(req,res)=>{
    let data= await Listing.find({});
    res.render("home.ejs", {data})
})

//show route
app.get("/home/:id",async(req,res)=>{
    let {id}= req.params;
    let listing= await Listing.findById(id);
    res.render("show.ejs",{listing});
})

//edit route
app.get("/home/:id/edit",async(req,res)=>{
    let data= await Listing.findById(req.params.id);
    res.render("edit.ejs",{data});
})

//update route
app.put("/home/:id",async(req,res)=>{
    let {id}= req.params;
    let updateListing= await Listing.findByIdAndUpdate(id,{...req.body.listing})
    res.redirect("/home");
})

//delete route
app.delete("/home/:id",async(req,res)=>{
    let {id}= req.params
    await Listing.findByIdAndDelete(id);
    res.redirect("/home")
})

app.listen(8000,()=>{
    console.log("app is listening at 8000");
})