const mongoose=require("mongoose")
const bookScema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        require:true
    },
    title:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("Book",bookScema)