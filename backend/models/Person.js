
const mongoose =require('mongoose');
const passport = require('passport');
//person shema 
const bcrypt = require('bcrypt');

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
    },
    username:{
     type:String,
     required:true
    },
    password:{
        type:String,
        required:true
    }


 })

PersonSchema.pre('save', async function () {
    const person = this;

    if (!person.isModified('password')) return;

    const salt = await bcrypt.genSalt(10);
    person.password = await bcrypt.hash(person.password, salt);
});



PersonSchema.methods.comparePassword = async function(candidatePassword){
    try{
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    }catch(err){
        throw err;
    }
}
 //create person model
 const Person=mongoose.model('Person',PersonSchema);
 module.exports=Person;