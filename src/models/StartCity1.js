import mongoose from "mongoose";

const startCitySchema1=new mongoose.Schema({
    city:{
        type:[String],
        default:[]
    },
    packageId:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:true})

const StartCity1=mongoose.models.StartCity1 ||mongoose.model('StartCity1',startCitySchema1);
export default StartCity1;