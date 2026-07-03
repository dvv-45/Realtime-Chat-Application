import express from "express";
import {signup} from "../controllers/auth.controller.js";
const router=express.Router();


router.post("/signup",signup)


router.get("/login",(req,res)=>{
    res.send("Login endpoit");
})


router.get("/logout",(req,res)=>{
    res.send("logout endpoit");
})

export default router;