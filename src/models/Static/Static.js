const { default: mongoose } = require("mongoose");
import  "./Topic";
const staticPagesSchema=new mongoose.Schema({
    name:{
      type:String,
      required:true
    },
    topics:[{type:mongoose.Schema.Types.ObjectId,
        ref:"Topic"
    }]
    ,
    deletedtopics:[Number]
},{timestamps:true});

const StaticPage=mongoose.models.StaticPage||mongoose.model("StaticPage",staticPagesSchema);
export default StaticPage;