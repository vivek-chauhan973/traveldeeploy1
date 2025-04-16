import mongoose from "mongoose"

const headerBandsSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    }
})

const HeaderBand=mongoose.models.HeaderBand||mongoose.model("HeaderBand",headerBandsSchema);

export default HeaderBand