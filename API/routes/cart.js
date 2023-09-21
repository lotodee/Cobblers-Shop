const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken")
const Cart = require("../models/Cart")
const { findById } = require("../models/Product")

const router = require("express").Router()

//CREATE CART

router.post("/" , verifyToken , async(req,res)=>{

const newCart = new Cart(req.body)

try {
    const savedCart = await newCart.save()
    res.status(200).json(savedCart)
} catch (error) {
    res.status(500).json(error)
}

})

//UPDATE CART

router.put("/:id" ,verifyTokenAndAuthorization , async(req,res)=>{

    const {id} = req.params

    try {
        const updatedCart = await Cart.findByIdAndUpdate(id,{
            $set:req.body,
        },
        {new:true})
        res.status(200).json(updatedCart)
    } catch (error) {
        res.status(500).json(error)
    }

})

//DELETE CART 

router.delete("/:id" , verifyTokenAndAuthorization , async(req,res)=>{
    const id=req.params;
    try{
await Cart.findByIdAndDelete(id)
res.status(200).json("Cart has been deleted")
    }catch(err){
        res.status(500).json(err)
    }

})

//GET USER CART
router.get("/find/:userId" , verifyTokenAndAuthorization , async(req,res)=>{
  
   const {userId} = req.params
  try {
    const userCart = await Cart.findOne(userId)
    res.status(200).json(userCart)
  } catch (error) {
    res.status(500).json(error)
  }
})


//GET ALL

router.get("/" , verifyTokenAndAdmin , async(req,res)=>{
    try {
       const carts = await Cart.find() 
       res.status(200).json(carts)
    } catch (error) {
        res.status(500).json(error)
    }
})
module.exports=router