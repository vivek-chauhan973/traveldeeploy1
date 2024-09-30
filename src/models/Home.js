import mongoose from "mongoose";
const headerFooterSchema=new mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    options:[mongoose.Schema.Types.ObjectId]
},{timestamps:true});
const HomeFooter=mongoose.models.HomeFooter||mongoose.model("HomeFooter",headerFooterSchema);
export default HomeFooter;