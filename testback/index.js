const express=require("express");
const app=express();

const port=8000;

app.get("/",  (req,res)=>{
    return res.send("home page");
});
app.get("/login",  (req,res)=>{
    return res.send("you are going to login");
});
app.get("/signup",  (req,res)=>{
    return res.send("you are going to signup");
});


const admin=(req,res) => {
    return res.send("you are in admin panel dashboard");
};
const isAdmin=(req,res,next)=>{
    console.log("isAdmin is runing");
    next();
};

const isLogged=(req,res,next)=>{
    console.log("isLogged checked");
    next();
};

app.get("/admin",isLogged,isAdmin,admin);





app.get("/hitesh",  (req,res)=>{
    return res.send("hitesh uses instagram");
});
app.get("/signout",  (req,res)=>{
    return res.send("you are signout");
});

app.listen(port, () => {
    console.log("server is running");
});
