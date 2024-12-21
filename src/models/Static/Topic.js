const { default: mongoose } = require("mongoose");
const topicSchema=new mongoose.Schema({
   title:{
    type:String
   },
   description:{
    type:String
   },
   filename:[String],
   pageId:{

   }
    
},
{timestamps:true}
)

const Topic=mongoose.models.Topic||mongoose.model("Topic",topicSchema);
export default Topic;