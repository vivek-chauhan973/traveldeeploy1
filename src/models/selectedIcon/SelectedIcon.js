
import mongoose from "mongoose";
const miniSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    icon:{
        type:String,
        required:true
    }
})
const IconSchema=new mongoose.Schema({
    iconData:[miniSchema],
    package:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Package",
        required: true
    }
},{timestamps:true})

const SelectedIcon=mongoose.models.SelectedIcon||mongoose.model('SelectedIcon',IconSchema);

export default SelectedIcon;