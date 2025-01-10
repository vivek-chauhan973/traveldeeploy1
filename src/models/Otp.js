import mongoose  from "mongoose";
const otpSchema=new mongoose.Schema({
    mobile:{
        type:String,
        required:true
    },
    otp:{
        type:Number,
        required:true
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isGoogleVerified:{
        type:Boolean,
        default:false
    }
})
const OTPModel=mongoose.models.OTPModel||mongoose.model("OTPModel",otpSchema);
export default OTPModel;