let mongoose=require("mongoose")

let userEnquireSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    phone:
    {
        type:String,
        require:true
    },
    message:
    {
        type:String,
        require:true
    }
})

let enquiryModel=mongoose.model("enquiryTable",userEnquireSchema)
module.exports=enquiryModel;