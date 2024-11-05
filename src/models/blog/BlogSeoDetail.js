const { default: mongoose, Mongoose } = require("mongoose");


const BlogSeoDetailSchema=new mongoose.Schema({
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

const BlogSeoDetail=mongoose.models.BlogSeoDetail || mongoose.model("BlogSeoDetail",BlogSeoDetailSchema);
export default BlogSeoDetail;