// console.log("2nd file")
// const fs= require("fs");
// fs.writeFileSync("notes.txt", "I am learning node js");
// let data=fs.readFileSync("notes.txt","utf-8")
// console.log(data);
// fs.unlinkSync("notes.txt")


const {greet, sum}= require("./3");
greet("Lucky")
console.log(sum(2,3))