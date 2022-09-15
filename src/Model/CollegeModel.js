const mongoose=require('mongoose')
const collegeSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    fullName:{                           
        type:String,
        required:true,
        trim: true
    },
    logoLink:{
        type:String,
        required:true,
        trim:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model('collegeModel',collegeSchema)

