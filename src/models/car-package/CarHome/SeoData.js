const { default: mongoose } = require("mongoose");

const seoDataSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    canonicalUrl:{
        type:String,
        required:true
    }, description:{
        type:String,
        required:true
    }, keyword:{
        type:String,
        required:true
    },
},{timestamps:true})

const SeoCarHomeData=mongoose.models.SeoCarHomeData||mongoose.model("SeoCarHomeData",seoDataSchema);

export default SeoCarHomeData;

