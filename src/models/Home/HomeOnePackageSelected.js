import mongoose from "mongoose";
const HomeOnePackageSelectedSchema=new mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    options:[mongoose.Schema.Types.ObjectId]
},{timestamps:true});
const HomeOnePackageSelected=mongoose.models.HomeOnePackageSelected||mongoose.model("HomeOnePackageSelected",HomeOnePackageSelectedSchema);
export default HomeOnePackageSelected;