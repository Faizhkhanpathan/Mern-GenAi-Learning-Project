       //here is full of auththentication

const passport =require('passport');
const LocalStrategy =  require('passport-local').Strategy;
const Person =require('./models/Person');

passport.use(new LocalStrategy(async(username,password,done)=>{
    try{
  console.log('Recived credentails:',username,password);
    const user = await Person.findOne({username : username});
    if(!user){
       return  done(null,false,{ message : 'User not found'});
    }
const isPasswordMatched = user.comparePassword(password);
       if(isPasswordMatched){
        return done(null,user); 
       }else{
        return done(null,false,{message:'Incorrect password'});
       }
    }
    catch(err){
      return done(err);
    }
  
 }))

 module.exports=passport;