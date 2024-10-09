import mongoose from "mongoose";
const HomeOnePackageSelectedSchema=new mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    options:[mongoose.Schema.Types.ObjectId],
    title:{
        type:String,
        required:true
    },
    subtitle:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{timestamps:true});
const HomeOnePackageSelected=mongoose.models.HomeOnePackageSelected||mongoose.model("HomeOnePackageSelected",HomeOnePackageSelectedSchema);
export default HomeOnePackageSelected;