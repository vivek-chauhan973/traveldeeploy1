import mongoose from "mongoose";
const carHomeSchema=new mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    options:[mongoose.Schema.Types.ObjectId]
},{timestamps:true});
const CarHome=mongoose.models.CarHome||mongoose.model("CarHome",carHomeSchema);
export default CarHome;