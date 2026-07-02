import express from "express";
import path from "path";
import dotenv from "dotenv";
const app=express();
import authRoutes from "./routes/auth.route.js";

dotenv.config();
const __dirname = path.resolve();

const PORT = process.env.PORT || 3000;

app.use("/api/auth",authRoutes);

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(PORT,()=>console.log("Server is ruuning on port: "+PORT));