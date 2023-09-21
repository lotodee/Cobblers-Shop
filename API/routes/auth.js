const router = require("express").Router()
const User = require("../models/User")
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

//REGISTER
router.post("/register" , async(req,res)=>{

    try {
        if(!req.body || !req.body.username   ){
            return res.status(401).json("missing fields")

    } 
      
    const newUser =  new User({
        username:req.body.username,
         email:req.body.email,
         password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.SECRET
          ).toString()
    })
    const savedUser = await newUser.save()
    res.status(200).json(savedUser)
    console.log(savedUser)
}catch (error) {
  console.log({error})
        res.status(500).json({error})
    }
})


//LOGIN

router.post("/login", async (req, res) => {
    try {
      const { username } = req.body;
      console.log(username);
  
      if (!req.body || !req.body.username) {
        return res.status(401).json("missing fields");
      } else {
        const user = await User.findOne({ username });
  
        if (!user) {
          return res.status(401).json("user not found");
        } else {
          const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.SECRET
          ).toString(CryptoJS.enc.Utf8)
          const OriginalPassword = hashedPassword
  
          if (OriginalPassword !== req.body .password) {
            return res.status(401).json("incorrect");
          }else{
            const accessToken = jwt.sign({
              id:user.id,
              isAdmin:user.isAdmin
            },process.env.SECRET,
            {expiresIn:"3d"})
              const {password , ...others} = user._doc;
          return res.status(200).json({...others,accessToken});
          
          }
         
        }
      
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  });
  
module.exports=router