const express = require('express');
const router = express.Router();
const Menu = require('../models/Menu');



// Here i am writing middleware its use for Logging 
const logrequest = (req,res,next)=>{
  console.log(`${new Date().toLocaleString()}`);
  next();
}
// output  :26/12/2025, 11:24:23 am Request Mode to: /Menu


  router.post('/', logrequest ,async (req,res)=>{
      try{
    const data = req.body;
    const MenuSchema = new Menu(data);
    const response = await MenuSchema.save();
    console.log("Data is saved"); 
    res.status(201).json(response);
      }catch(err){
  console.log(err);
    res.status(500).json({error:'invalid data'});

      }
    })


  

    //post For Menu

router.get('/:NameofDish', logrequest,async (req,res)=>{
  try{
  const NameofDish = req.params.NameofDish;
  if(NameofDish==='samosa'||NameofDish==='aluparatha'||NameofDish==='chicken fry'||NameofDish==='butterchicken'){
   const response = await Menu.find({name:NameofDish});
   console.log('data recived');
   res.status(200).json(response);
  }else{
    res.status(404).json({error:'Invalid request'});
  }
  }catch(err){
    console.log(err);
    res.status(500).json({error:'invalid request'});
  }

})      


    
router.get('/', logrequest ,async (req,res)=>{
   try{
const data = await Menu.find();
  console.log("Data recived Sucessfully"); 
    res.status(200).json(data);
    }catch(err){
       console.log(err);
    res.status(500).json({error:'invalid data'});
    }
})

module.exports = router;