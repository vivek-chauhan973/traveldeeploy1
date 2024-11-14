import mongoose from "mongoose";
import "../package/PackageCategory";
import  "./BlogQuestion";
import  "./BlogSeoDetail";
const BlogDetailSchema=new mongoose.Schema({
    blogType:{
        type:String,
        required:true
    },
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
    },
    category: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "PackageMasterCategory",
        },
      ],
    blogQuestions:[
        {type:mongoose.Schema.Types.ObjectId,
        ref:"BlogQuestion"}
    ],
    blogSeo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"BlogSeoDetail"
    }

},{timestamps:true})

const BlogDetail=mongoose.models.BlogDetail||mongoose.model("BlogDetail",BlogDetailSchema);

export default BlogDetail;