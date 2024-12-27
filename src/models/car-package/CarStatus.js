import mongoose from "mongoose";

const statusSchema = new mongoose.Schema({
    isActive : {
        type : Boolean,
        default : false,
    },
    preventedDays : {
        type : Number,
        default : 0,
        min : 0,
    }
},{timestamps:true});

const CarStatus = mongoose.models.CarStatus || mongoose.model("CarStatus", statusSchema);

export default CarStatus;