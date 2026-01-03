                 //Function in os
 //============================================================

// function add(a,b){   //no semicolar 
//     return a+b;
// }

// ------------------------------------------------------------

// var add=(a,b)=>
//     {return a+b};

// ------------------------------------------------------------
// var add=(a,b)=>a+b;

// --------------------------------------------------------------------------

// var result = add(2,3);
// console.log(result);

// ------------------------------------------------------------------------

// (function(){
//     console.log('Faizh added');
// })();

// ------------------------------------------------------------------------------------
//call backfunction

// function callback(){
//     console.log("Hey Faiz How Are you");
// }
// var add=function(a,b,callback){
    
//     callback();
//    console.log(a+b);  //call back function

// }
// // console.log(add(12,14,callback));

// // function add(a,b){
// //     return a+b;
// // } 
// add(2,3,()=>{
//     console.log("Hey Faiz Are you there");
// })
 // ========================================================================================


//  var fs= require('fs');
//  var os= require('os');

//  var user=os.userInfo();
//  console.log(user.username);
// const notes=require('./notes.js');
// var age=10;
// var result=notes.addnum(age+12,13);
// console.log(result);

// ===========================================================================================
    

//method to share data 

// GET POST PATCH DELETE
// const { default: mongoose } = require('mongoose');
require('dotenv').config();
const express = require('express');
const db = require('./db');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const passport =require('./auth.js');
const { jwtAuthMiddleware } = require('./jwt');
app.use(bodyParser.json());
// import Person from './models/Person';
const Menu =require('./models/Menu');
 app.get('/',(req,res)=>{   //app is a instance of express js 
res.send("Hey Faiz Welcome to my Hotel");
 })
 
 
 app.get('/chicken',(req,res)=>{
res.send('chicken is Here');
 })



app.use(passport.initialize());
const localAuthMiddleware=passport.authenticate('local',{session:false});

const MenuRouter = require('./routers/MenuRoutes');
app.use('/Menu',localAuthMiddleware,MenuRouter);

const PersonRouter = require('./routers/PersonRoutes');  
app.use('/Person',localAuthMiddleware,PersonRouter );

 app.listen(PORT,()=>{   //3000 is like  a room no.
console.log("server is running");
 })


 //body parser
// JSON = send/store data
// Object = use/change data in code

//recive data and do the formate according to our requirement
//req.body  here we mate data 


