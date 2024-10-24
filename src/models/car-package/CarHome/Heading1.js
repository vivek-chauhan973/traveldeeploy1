const { default: mongoose } = require("mongoose");

const seoDataSchema=new mongoose.Schema({
    heading1:{
        type:String,
        required:true
    },
    description1:{
        type:String,
        required:true
    }
},{timestamps:true})

const Heading1=mongoose.models.Heading1||mongoose.model("Heading1",seoDataSchema);

export default Heading1;

