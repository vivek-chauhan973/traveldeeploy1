import mongoose from "mongoose";
const headerDestinationHeader=new mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    options:[mongoose.Schema.Types.ObjectId]
},{timestamps:true});
const DestinationHeader=mongoose.models.DestinationHeader||mongoose.model("DestinationHeader",headerDestinationHeader);
export default DestinationHeader;