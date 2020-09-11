const express = require("express");
const router = express.Router()
 
 const{getCategoryById,createCategory,getCategory,getAllCategory,updateCategory,removeCategory}= require("../controllers/category");
 const{isAdmin,isSignedIn,isAuthenticated}= require("../controllers/authentication");
 const{getUserById}= require("../controllers/user");


 router.param("userId", getUserById);
 router.param("categoryId", getCategoryById);


 //routers
 router.post("/category/create/:userId",isSignedIn,isAuthenticated,isAdmin,createCategory)

 router.get("/category/:categoryId",getCategory)
 router.get("/categories",getAllCategory)

//update
 router.put("/category/:categoryId/:userId",isSignedIn,isAuthenticated,isAdmin,updateCategory)

 router.delete("/category/:categoryId/:userId",isSignedIn,isAuthenticated,isAdmin,removeCategory)

 
module.exports =router;