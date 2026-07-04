import express from "express";
import path from "path";
const app=express();
import authRoutes from "./routes/auth.route.js";
import {connectDB} from "./lib/db.js";
import {ENV} from "./lib/env.js";
app.use(express.json());//req.body
dotenv.config();
const __dirname = path.resolve();

const PORT = ENV.PORT || 3000;



app.use("/api/auth",authRoutes);

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}
app.listen(PORT,()=>{
    console.log("Server is running on port: "+PORT);
    connectDB();
});