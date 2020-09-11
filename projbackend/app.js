const mongoose = require("mongoose");
require('dotenv').config()
const express =require("express");
const app=express();
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");
const cors=require("cors");

//routes
const authRoutes=require("./routes/authentication");
const userRoutes=require("./routes/user");
const categoryRoutes=require("./routes/category");
const productRoutes=require("./routes/product");
const orderRoutes=require("./routes/order");
const paymentBRoutes=require("./routes/paymentBRoutes");







//db connection
mongoose.connect(process.env.DATABASE,
 {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true}).then(() => {
     console.log("DB is connected")
 })


 //middleware
 app.use(bodyParser.json());
 app.use(cookieParser());
 app.use(cors());

 //port
const port=process.env.PORT || 8000;

//routes

app.use("/api",authRoutes);
app.use("/api",userRoutes);
app.use("/api",categoryRoutes);
app.use("/api",productRoutes);
app.use("/api",orderRoutes);
app.use("/api",paymentBRoutes);





//server
app.listen(port, () => {
    console.log(`app is running at ${port}`);
});