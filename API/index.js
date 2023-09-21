const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const userRoutes = require("./routes/user")
const productRoutes = require("./routes/product") 
const orderRoutes = require("./routes/order")
const cartRoutes = require("./routes/cart")
const authRoutes = require("./routes/auth")
const stripeRoutes = require("./routes/stripe")
 const mongoUrl = process.env.MONGODB_URL
 const port = process.env.PORT
const cors = require("cors")
app.use(cors())
 app.use(express.json())
//connnecting to mongoose

mongoose.connect(mongoUrl).then(()=>{
    console.log("connected to database succesfully")
}).catch((err)=>{console.log(err)})

app.use("/api/user",userRoutes)
app.use("/api/products",productRoutes)
app.use("/api/cart",cartRoutes)
app.use("/api/order",orderRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/checkout",stripeRoutes)

app.listen(port || 5000,()=>{
    console.log('server is running on port 5000')
})
