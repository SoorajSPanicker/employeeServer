const mongoose=require('mongoose')
//admin
const employeeSchema=new mongoose.Schema({
    fname:{
        type:String,
      
        trim:true,
        required:true
    },
    lname:{
        type:String,
      
        trim:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        trim:true,
        required:true
    },
    mobile:{
        type:String,
        unique:true,
        trim:true,
        required:true,
        minlength:10,
        maxlength:13
    },
    gender:{
        type:String,
        
        trim:true,
        required:true
    },
    status:{
        type:String,
        
        trim:true,
        required:true
    },
    profile:{
        type:String,
        
        trim:true,
        required:true
    },
    location:{
        type:String,
        
        trim:true,
        required:true
    }

    
})
const employees=new mongoose.model('employees',employeeSchema)
module.exports=employees
