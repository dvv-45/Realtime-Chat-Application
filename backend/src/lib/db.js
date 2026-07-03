import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGO DB CONNECTED:",conn.connection.host)
        }
    catch (error) {
        console.error("MONGO DB CONNECTION ERROR:",error)
        process.exit(1);//1 status code means failure and 0 means success
    }
}