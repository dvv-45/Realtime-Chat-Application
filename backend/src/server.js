import express from "express";
import dotenv from "dotenv";
const app=express();
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

app.use("/api/auth",authRoutes);

app.listen(PORT,()=>console.log("Server is ruuning on port: "+PORT));