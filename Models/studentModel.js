const mongoose=require('mongoose')

const studentsSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    batch:{
        type:String,
        requird:true

    },
    phone:{
    type:Number,
    requird:true,
    unique:true
    },
    image:{
        type:String,
        requird:true
    },
    teacherId:{
        type:String,
        requird:true
    }
})

const students=mongoose.model('students',studentsSchema)
module.exports=students