const router = require("express").Router()
const Product = require("../models/Product.js")

const { verifyTokenAndAdmin } = require("./verifyToken")
//CREATE PRODUCT

router.post("/" , verifyTokenAndAdmin,async(req,res)=>{
    
    const newProduct = new Product({
        title:req.body.title,
        desc:req.body.desc,
        img:req.body.img,
        categories:req.body.categories,
        size:req.body.size,
        color:req.body.color,
        price:req.body.price
    })


        console.log(newProduct)
 const savedProduct = await newProduct.save()

 res.status(200).json(savedProduct)
 console.log(savedProduct)

    
  
})

//UPDATE  PRODUCT
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      console.log({ updatedProduct });
      res.status(200).json({ updatedProduct });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  
//DELETE

router.delete("/:id" ,verifyTokenAndAdmin ,async(req,res)=>{

    try{
        const {id} = req.params.id
    
        await Product.findByIdAndDelete(id)
        res.status(200).json("Product has been deleted")

    }catch(err){
        res.status(500).json(err)
    }
   
})

//GET PRODUCT
router.get("/find/:id" , verifyTokenAndAdmin , async(req,res)=>{
   
const {id} = req.params

    try{
        const singleProduct  = await Product.findById(id)
        res.status(200).json(singleProduct)
    }catch(Err){
        res.status(500).json(Err)
    }
    

})

//GET ALL PRODUCTS 

router.get("/" , async(req,res)=>{
    const qNew = req.query.new;
    const qCategory = req.query.category;
    
console.log("stage 1")
    try {
       let products;

       if(qNew){
        products = await Product.find().sort({createdAt: -1}).limit(2)
     
       }else if(qCategory){

        products = await Product.find({
        
            categories:{
                $in:[qCategory],
            }
        });
  
    
       }else{
        products=await Product.find();
       }
       res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports=router