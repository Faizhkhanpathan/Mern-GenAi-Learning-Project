const mongoose=require('mongoose');

const mongoURL ='mongodb://127.0.0.1:27017/lerner'
 
// mongoose.connect(mongoURL, {   //
//    useNewUrlParser:true,
//    useUnifiedTopology:true
// })

mongoose.connect(mongoURL);
const db = mongoose.connection;   // this is a bridge between nodejs and mongodb


//EVENT LISTNER

db.on('connected',()=>{
  console.log("Data base connected sucessfull");  
})
db.on('disconnected',()=>{
    console.log("Database disconnected");
})
db.on('error',(err)=>{
    console.log("Error Is In Database",err);
})
module.exports = db;