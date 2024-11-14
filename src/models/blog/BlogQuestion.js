const { default: mongoose } = require("mongoose");
const blogQuestionSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true
},
information:{
    type:String
},
  blog:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"BlogDetail"

  },
  blogSubQuestion:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"SubQuestions"

  }
},{
    timestamps:true
});

const BlogQuestion=mongoose.models.BlogQuestion || mongoose.model("BlogQuestion",blogQuestionSchema);

export default BlogQuestion;