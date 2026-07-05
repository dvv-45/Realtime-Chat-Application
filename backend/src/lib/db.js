import mongoose from "mongoose";
import {ENV} from "./env.js";
export const connectDB = async () => {
    try{
        const conn=await mongoose.connect(ENV.MONGO_URI)
        console.log("MONGO DB CONNECTED:",conn.connection.host)
        }
    catch (error) {
        console.error("MONGO DB CONNECTION ERROR:",error)
        process.exit(1);//1 status code means failure and 0 means success
    }
}