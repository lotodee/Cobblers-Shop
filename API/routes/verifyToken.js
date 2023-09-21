const jwt = require("jsonwebtoken")



const verifyToken =async (req,res,next)=>{
 


        const authHeader = req.headers.token
        if(authHeader){
            //split the token
            const token = authHeader.split(" ")[1]
            console.log('verifying')
await jwt.verify(token , process.env.SECRET ,(err ,user)=>{
    if(err)
        return res.status(403).json("Token Invalid")
    
    req.user= user;
    console.log(req.user)
    next()
     
})
        }else{
return res.status(401).json("You are not authenticated")
        }


  
}

const verifyTokenAndAuthorization = (req,res,next)=>{

    verifyToken(req,res,()=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
     
    next()
   
    }

    else{
        res.status(403).json("You are foerbidden")
    }
})
}




const verifyTokenAndAdmin = (req,res,next)=>{
 
    verifyToken(req,res,()=>{
    if(req.user.isAdmin){
     
    next()
   
    }

    else{
        res.status(403).json("You are foerbidden")
    }
})
}
module.exports ={verifyToken, verifyTokenAndAuthorization ,verifyTokenAndAdmin}