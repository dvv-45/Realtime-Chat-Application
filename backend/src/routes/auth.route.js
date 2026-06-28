import express from "express";

const router=express.Router();


router.get("/signup",(req,res)=>{
    res.send("Signup endpoit");
})


router.get("/login",(req,res)=>{
    res.send("Login endpoit");
})


router.get("/logout",(req,res)=>{
    res.send("logout endpoit");
})

export default router;