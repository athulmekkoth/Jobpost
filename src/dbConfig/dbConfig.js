import mongoose from "mongoose";
export async function Connect()
{
    // Or:
try {
    await mongoose.connect(process.env.mongo_url)
    const connection=mongoose.connection
    connection.once("open",()=>{console.log("connected")})
    
  } catch (error) {
    handleError(error+"not connected");
  }
}