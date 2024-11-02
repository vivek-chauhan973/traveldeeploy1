import mongoose from "mongoose";
const bannerSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true

    },
    filename:{
        type:String,
        required:true
    },
    description:{
         type:String,
         required:true
    },
    videoPath:{
        type:String,
        required:true
    }
},{timestamps:true})

const BlogPromoBanner=mongoose.models.BlogPromoBanner||mongoose.model("BlogPromoBanner",bannerSchema);

export default BlogPromoBanner;