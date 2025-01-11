import mongoose  from "mongoose";
const otpSchema=new mongoose.Schema({
    mobile:{
        type:String,
    },
    otp:{
        type:Number,
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isGoogleVerified:{
        type:Boolean,
        default:false
    },
    email:{
        type:Number
    }
})
const OTPModel=mongoose.models.OTPModel||mongoose.model("OTPModel",otpSchema);
export default OTPModel;