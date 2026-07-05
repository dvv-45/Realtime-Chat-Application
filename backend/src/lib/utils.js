import jwt from "jsonwebtoken"
import {ENV} from "./env.js";
export const generateToken=(userId,res)=>{
    const token =jwt.sign({userId:userId},ENV.JWT_SECRET,{
        expiresIn:"7d"
    });
    res.cookie("jwt",token,{
        maxAge:7*24*60*60*1000,//MS
        httpOnly:true,//Prevent XSS attacks:cross-site scripting
        sameSite:"strict",//Prevent CSRF attacks:cross-site request forgery
        secure:ENV.NODE_ENV==="development"?false:true,
    });
    return token;
}; 