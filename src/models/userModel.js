import mongoose, { mongo } from "mongoose";
const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"please provide username"],
        unique:true
    },
    email:{
        type:String,
        required:[true,"please provide password"],
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
 const User=mongoose.model.Users || mongoose.model("Users",UserSchema)
 export default User;