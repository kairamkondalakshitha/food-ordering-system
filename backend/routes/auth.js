const jwt=require("jsonwebtoken");

module.exports=(req,res,next)=>{

const token=req.header("Authorization");

if(!token){
    return res.status(401).json({
        message:"No Token"
    });
}

try{

const decoded=jwt.verify(token,process.env.JWT_SECRET);

req.user=decoded;

next();

}catch(err){

return res.status(401).json({
message:"Invalid Token"
});

}

};
const express=require("express");

const router=express.Router();

router.post("/register",(req,res)=>{
res.json({message:"Register API"});
});

router.post("/login",(req,res)=>{
res.json({message:"Login API"});
});

module.exports=router;