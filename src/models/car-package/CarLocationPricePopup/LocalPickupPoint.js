const { default: mongoose } = require("mongoose");
const localpickuppointSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    local:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"LocalPrice"
    }
},{timestamps:true})
const LocalPickupPoint=mongoose.models.LocalPickupPoint||mongoose.model("LocalPickupPoint",localpickuppointSchema);
export default LocalPickupPoint