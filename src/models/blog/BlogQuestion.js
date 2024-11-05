const { default: mongoose } = require("mongoose");
const miniquestionSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    information:{
        type:String
    }
})

const blogQuestionSchema=new mongoose.Schema({
  questions:[ miniquestionSchema ]
},{
    timestamps:true
});

const BlogQuestion=mongoose.models.BlogQuestion || mongoose.model("BlogQuestion",blogQuestionSchema);

export default BlogQuestion;