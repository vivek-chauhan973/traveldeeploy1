import mongoose from "mongoose";

const fixedDeparturePriceSchema=new mongoose.Schema({
    packageId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Package"
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

const FixedDeparturePrice=mongoose.models.FixedDeparturePrice|| mongoose.model("FixedDeparturePrice",fixedDeparturePriceSchema)
export default FixedDeparturePrice;