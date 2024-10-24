import mongoose from "mongoose";
const bannerSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true

    },
    filename:{
        type:String,
        required:true
    },
    path:{
        type:String,
        required:true
    }
},{timestamps:true})

const CarBanner=mongoose.models.CarBanner||mongoose.model("CarBanner",bannerSchema);

export default CarBanner;