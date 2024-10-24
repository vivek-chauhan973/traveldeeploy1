const { default: mongoose } = require("mongoose");
const crouselSchema=new mongoose.Schema({
    path:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    filename:
    {
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true,
    }

},{timestamps:true});

const CarCrousel=mongoose.models.CarCrousel||mongoose.model("CarCrousel",crouselSchema);

export default CarCrousel;