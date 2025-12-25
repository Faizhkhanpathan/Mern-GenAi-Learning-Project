const mongoose = require('mongoose');
const MenuSchema= new mongoose.Schema({
name:{
    type:String,
    enum:['samosa','aluparatha','chicken fry','butterchicken'],
    required:true
},
category:{
    type:String,
    required:true
},
price:{
    type:Number,
    required:true
},
available:{
    type:Boolean,
    required:true
},
rating:{
    type:Number,
    required:true
},
restaurant:{
    type:String,
    required:true
}

})

const Menu = mongoose.model('Menu',MenuSchema);
module.exports = Menu;