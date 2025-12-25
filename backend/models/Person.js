
const mongoose =require('mongoose');
//person shema 
 const PersonSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        enum:["developer","software","hardware","Aiml"],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
   type:String,
   required:true,
   unique:true
    },
    address:{
        type:String,
        required:true
    },
    Salary:{
       type:Number,
        required:true
    }
 })


 //create person model
 const Person=mongoose.model('Person',PersonSchema);
 module.exports=Person;