const express = require('express');
const router = express.Router();
const Person = require('../models/Person');
const { model } = require('mongoose');
const { generateToken } = require('../jwt');
const logrequest = (req,res,next)=>{
  console.log(`${new Date().toLocaleString()}`);
  next();
}
router.post('/signup',logrequest,async (req,res)=>{
    try{
 const data=req.body;
    const newPerson = new Person(data);
    const response= await  newPerson.save();
    console.log('Data is saved');
    const token = generateToken(response.username);
    console.log("Token is:",token);
    res.status(201).json({response:response,token:token});

    }catch(error){
    console.log('Error saving data:', error.message);
    res.status(500).json({error: error.message});
}
   
     // newPerson.name=data.name;
    // newPerson.age=data.age;
    // newPerson.Number=data.Number;
  
        }
    )


// If we update the data then we use put and patch


    

// here we write the code to get the work parameter 

router.get('/:WorkType',logrequest, async (req,res)=>{
   try{
     const WorkType = req.params.WorkType;
   if(WorkType==='developer'||WorkType==='software'||WorkType==='hardware'||WorkType==='Aiml'){
const response = await Person({work:WorkType});
res.status(200).json(response);
}else{
res.status(404).json({error:'i found the error'});

   }
   }catch(err){
       console.log(err);
    res.status(500).json({error:'invalid data'});
    }
   
})


router.put('/:id',logrequest,async (req,res)=>{
  try{
    const Personid = req.params.id;
    const updatePersonId = req.body;
    const response = await Person.findByIdAndUpdate(Personid,updatePersonId,{
      new:true, //Return the update document
      runValidators:true
    })
    console.log('Data updated sucessfully');
    res.status(200).json(response);
    //if response is not anything
      if(!response){
        res.status(404).json({error:'Invalid update id '});
      }
  }catch(err){
    console.log(err);
    res.status(500).json({err:'Invalid request'});
  }

})

// delete id    
router.delete('/:id', logrequest,async (req,res)=>{
  try{
  const PersonId=req.params.id;
   const response = await Person.findOneAndDelete(PersonId);
   console.log("data delete sucessfully");
   res.status(200).json(response);
   if(!response){
     res.status(404).json({error:'Invalid update id '});
   }}
   catch(err){
    console.log(err);
    res.status(500).json({err:'Invalid request'});
  }
})





    router.get('/', logrequest,async (req,res)=>{
      try{
      const data = await Person.find();
      console.log('data recive sucessfully');
      res.status(200).json(data);
       }
       catch(err){
         console.log(err);
         res.status(501).json({error:'Invalid request'});
       }
      
    })
  module.exports = router;