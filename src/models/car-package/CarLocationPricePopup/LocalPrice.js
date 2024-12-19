const { default: mongoose } = require("mongoose");
import "./LocalPickupPoint"
const localPriceSchema=new mongoose.Schema({
    localLocation:{
        type:String,
        trim:true,
        required:true
    },
    location:{
        type:String
    },
    price:{
        type:String
    },
    pickup:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"LocalPickupPoint"
    }]
},{timestamps:true})

const LocalPrice=mongoose.models.LocalPrice||mongoose.model("LocalPrice",localPriceSchema);
export default LocalPrice