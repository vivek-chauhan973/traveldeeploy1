const { default: mongoose } = require("mongoose");
const crouselSchema=new mongoose.Schema({
    path:{
        type:String,
        required:true,
    },
    blogwriter:{
        type:String,
        required:true,
    },
    filename:
    {
        type:String,
        required:true,
    }

},{timestamps:true});

const BlogWriter=mongoose.models.BlogWriter||mongoose.model("BlogWriter",crouselSchema);

export default BlogWriter;