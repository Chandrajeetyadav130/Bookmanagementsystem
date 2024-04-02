const express=require("express")
const mongoose=require("mongoose")
const router=require("./Routes/bookRoutes")
const books=require('./Routes/bookRoutes')
var cors = require('cors');
require("dotenv").config()
const app=express()
let corsAllow={
    origin:"http://localhost:3000",
    methods:"PUT,GET,POST,PATCH,DELETE,HEAD",
    Credential:true
}
app.use(express.json(corsAllow))
app.use(cors());

app.use("/api/firstap1",books)
app.listen(process.env.PORT,()=>{
    console.log(`Server is listen at port number ${process.env.PORT}`)
})
mongoose.connect(process.env.dbUri,{

}).then(()=>{
    console.log("db connecton successful")
}).catch((error)=>{
    console.log(error)
})
// mongoose.connect("mongodb://localhost:27017/bookmanagementsystem",{

// }).then(()=>{
//     console.log("db connecton successful")
// }).catch((error)=>{
//     console.log(error)
// })
