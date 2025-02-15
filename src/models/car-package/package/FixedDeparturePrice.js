import mongoose from "mongoose";

const fixedDeparturePriceSchema=new mongoose.Schema({
    packageId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"CarPackage1"
    },
    datePriceArray:[{
        date:{
            type:String,
            required:true
        },
        price:{
            type:String,
            required:true
        }
    }],
    limit:[]
},{timestamps:true})

const CarFixedDeparturePrice=mongoose.models.CarFixedDeparturePrice|| mongoose.model("CarFixedDeparturePrice",fixedDeparturePriceSchema)
export default CarFixedDeparturePrice;