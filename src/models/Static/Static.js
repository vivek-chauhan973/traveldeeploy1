const { default: mongoose } = require("mongoose");
const topicSchema=new mongoose.Schema({
  title:{
   type:String
  },
  description:{
   type:String
  },
  filename:[String],  
}
)
const staticPagesSchema=new mongoose.Schema({
    name:{
      type:String,
      required:true
    },
    topics:[topicSchema],
    contentSummary:{
      type:String
    }
},{timestamps:true});

const StaticPage=mongoose.models.StaticPage||mongoose.model("StaticPage",staticPagesSchema);
export default StaticPage;