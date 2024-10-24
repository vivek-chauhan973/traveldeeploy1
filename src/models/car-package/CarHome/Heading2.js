const { default: mongoose } = require("mongoose");

const seoDataSchema=new mongoose.Schema({
    heading2:{
        type:String,
        required:true
    },
    description2:{
        type:String,
        required:true
    }
},{timestamps:true})

const Heading2=mongoose.models.Heading2||mongoose.model("Heading2",seoDataSchema);

export default Heading2;

