const express =require("express")
const router =express.Router();


const{ getProductById,createProduct,getproduct,photo,deleteproduct,updateproduct,getAllProducts,getAllUniqueCategories}=require("../controllers/product");
const{isAdmin,isSignedIn,isAuthenticated}= require("../controllers/authentication");
const{getUserById}= require("../controllers/user");



router.param("productId", getProductById);
router.param("userId", getUserById);

//create product
router.post("/product/create/:userId",isSignedIn,isAuthenticated,isAdmin,createProduct);

//read 
router.get("/product/:productId",getproduct);
router.get("/product/photo/:productId",photo);

//delete
router.delete("/product/:productId/:userId",isSignedIn,isAuthenticated,isAdmin,deleteproduct);

//update
router.put("/product/:productId/:userId",isSignedIn,isAuthenticated,isAdmin,updateproduct);


router.get("/product",getAllProducts);
router.get("/product/categories",getAllUniqueCategories);


module.exports =router;
