import mongoose from "mongoose";
export async function Connect()
{
    // Or:
try {
    await mongoose.connect(process.env.mongo_url)
    const connection=mongoose.connection
    connection.on("connected",()=>{console.log("connected")})
    connection.on("error",(err)=>{console.log(err)})
  } catch (error) {
    handleError(error+"not connected");
  }
}