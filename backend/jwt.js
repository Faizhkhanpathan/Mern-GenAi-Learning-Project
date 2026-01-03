// Notes are also here

// jwt (JSON web tokens)

// jwts consists of three parts headers,payload and signature

//header  : - we write jwt token type  and algorithm
//  singnature see:-integry verify (header+payload+secrate key)

// signup :- user create 
//signup :-  user login

// ===============================================================================

//jwt.sign() :- to create a token  //payload //serectOrprivateKey



//jwt.verify() :- check the token this is correct or not


// ===============================================================================




// our hotel app flow 
// 1. singup Route (/signup)
// 2. login Route (/login)



// // ===================================================================================================


const jwt =require('jsonwebtoken');
const jwtAuthMiddleware= (req,res,next) =>{
    const token =req.headers.authorization.split(' ')[1];
    if(!token) return res.status(401).json({error: 'Unauthorized'});
    try{
        const decoded =jwt.verify(token, process.env.JWT_SECRET);   //Decoded (very short): 👉 Token ke andar ka original data mil jana Example:JWT → decode → { id, username }
        req.user = decoded
        next();

    }catch(err){
        console.log(err);
        res.status(401).json({error : 'Invalid token'});
    }


}

const generateToken = (userData) => {
    return jwt.sign(userData, process.env.JWT_SECRET);

}
module.exports={jwtAuthMiddleware,generateToken}
// explanation of this code 


// =================================================================================================================
// Below line-by-line explanation hai simple Hinglish + example ke saath 👇

// 📄 File: jwtAuthMiddleware.js
// const jwt = require('jsonwebtoken');


// 👉 jsonwebtoken package import
// ➡ JWT verify / decode karne ke liye

// const jwtAuthMiddleware = (req, res, next) => {


// 👉 Middleware function

// req → client request

// res → response

// next → next middleware / route ko control dena

// const token = req.headers.authorization?.split(' ')[1];


// 👉 Token extract kar rahe hain

// 🧠 How?

// Client header bhejta hai:

// Authorization: Bearer eyJhbGciOiJIUzI1Ni...


// req.headers.authorization → "Bearer eyJhbGciOiJIUzI1Ni..."

// .split(' ') → ["Bearer", "token"]

// [1] → actual token

// if (!token) return res.status(401).json({ error: 'Unauthorized' });


// 👉 Agar token nahi mila ❌
// ➡ User login nahi hai
// ➡ 401 Unauthorized return

// try {


// 👉 Error handling start

// const decoded = jwt.verify(token, process.env.JWT_SECRET);


// 👉 Token verify ho raha hai

// Token fake ya expired ❌ → error

// Token valid ✅ → decoded data milega

// 🧠 Example decoded data:
// {
//   id: "123",
//   username: "faiz",
//   iat: 123456,
//   exp: 123999
// }

// req.user = decoded;


// 👉 User ka data request ke saath attach
// ➡ Ab next routes me use kar sakte ho

// Example:

// req.user.username

// next();


// 👉 Middleware success
// ➡ Next route ko allow

// } catch (err) {


// 👉 Agar token invalid / expired

// res.status(401).json({ error: 'Invalid token' });


// 👉 Galat token → access denied ❌

// module.exports = jwtAuthMiddleware;


// 👉 Middleware export
// ➡ Routes me use karne ke liye

// ✅ Route me use ka example
// const jwtAuthMiddleware = require('./jwt');

// app.get('/profile', jwtAuthMiddleware, (req, res) => {
//     res.send(`Welcome ${req.user.username}`);
// });

// 🧠 One-line yaad rakhna

// JWT middleware = entry gate jo token check karta hai 🚪🔐