
require('dotenv').config(); 
const mongoose=require('mongoose');
// const mongoURL='mongodb+srv://FAIZHHHKHAN786:FHRASKHAN@cluster0.upogdzi.mongodb.net/lerner?retryWrites=true&w=majority'
// mongoose.connect(mongoURL, {   //
//    useNewUrlParser:true,
//    useUnifiedTopology:true
// })

// ✅ DEFINE mongoURL properly
const mongoURL = process.env.MONGODB_URL;   // this is a bridge between nodejs and mongodb

mongoose.connect(mongoURL);
//EVENT LISTNER
const db = mongoose.connection;

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