import mongoose from "mongoose";
const carPromoSchema=new mongoose.Schema({
    stateId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"CarState",
        required:true
    },
    promoText:{
        type:String
    },
    imagepath:{
        type:String,
        required:true
    },
    faq:[{
        title:{
         type:String,
         required:true
        } ,
        information:{
         type:String,
         required:true
        }
     }]


},{timestamps:true})


const CarPromo=mongoose.models.CarPromo||mongoose.model("CarPromo",carPromoSchema);
export default CarPromo