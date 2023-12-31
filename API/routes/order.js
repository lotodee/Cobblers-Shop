const { verifyTokenAndAuthorization, verifyToken, verifyTokenAndAdmin } = require("./verifyToken")
const Order = require("../models/Order")
const router = require("express").Router()


// CREATE ORDER

router.post("/" , verifyToken,async(req,res)=>{

    const newOrder = new Order(req.body)
    try {
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)
    } catch (error) {
        res.status(500).json(error)
    }

})

//DELETE ORDER

router.delete("/:id" , verifyTokenAndAuthorization , async(req,res)=>{
 const {id} = req.params

 try {
    await Order.findByIdAndDelete(id)
    res.status(200).json("Order has been deleted")
 } catch (error) {
    res.status(500).json(error)
 }
})

//UPDATE ORDER

router.put("/:id" , verifyTokenAndAdmin , async(req,res)=>{
    const {id} = req.params
    try{
        const updatedOrder = await Order.findByIdAndUpdate(id,
            {
             $set:req.body
            },
            {new:true}
            )
            res.status(200).json(updatedOrder)
    }catch(error){
        res.status(500).json(error)
    }
})


//GET USER ORDERS

router.get("/find/:id" , verifyTokenAndAuthorization , async(req,res)=>{
  
    const {id} = req.params
   try {
     const userOrder = await Order.find(id)
     res.status(200).json(userOrder)
   } catch (error) {
     res.status(500).json(error)
   }
 })
 
 //GET ALL

router.get("/" , verifyTokenAndAdmin , async(req,res)=>{
    try {
       const orders = await Order.find() 
       res.status(200).json(orders)
    } catch (error) {
        res.status(500).json(error)
    }
})

//GET MONTHLY INCOME

router.get("/income" ,verifyTokenAndAdmin , async(req,res)=>{

const date = new Date()
const lastMonth = new Date(date.setMonth(date.getMonth()-1))
const previousMonth = new Date(date.setMonth(lastMonth.getMonth()-1))
console.log("st1")
try {
    console.log("st2")
    const data = await Order.aggregate([

        {$match:{createdAt:{$gte:previousMonth}}},
        {
            $project:{
                month:{$month:"$createdAt"},
                sales:"$amount"
            },
        },
        
        {
            $group:{
                _id:"$month",
                total:{$sum:"$sales"}
            }
        }
    ])
    res.status(200).json(data)
} catch (error) {
       res.status(500).json(error)  
}

})


 
module.exports=router