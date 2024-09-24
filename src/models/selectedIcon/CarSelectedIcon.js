
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
        type: String,
        required: true
    }
},{timestamps:true})

const CarSelectedIcon=mongoose.models.CarSelectedIcon||mongoose.model('CarSelectedIcon',IconSchema);

export default CarSelectedIcon;