const Listing= require("./listing");
const mongoose= require("mongoose");
const Schema= mongoose.Schema;
let initData= require("./data")

main().then((res)=>{
    console.log("connected to mongoose")
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/bk4")
}

const initData1= async()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("DB changed");

}
initData1();