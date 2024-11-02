const { default: mongoose, Mongoose } = require("mongoose");


const blogpromoSchema=new mongoose.Schema({
    title:{
        type:String,
    },
    canonicalUrl:{
        type:String
    },
    description:{
        type:String,
    },
    keyword:{
        type:String
    }
},{})

const BlogPromo=mongoose.models.BlogPromo || mongoose.model("BlogPromo",blogpromoSchema);
export default BlogPromo;