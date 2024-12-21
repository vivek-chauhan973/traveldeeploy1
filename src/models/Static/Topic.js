const { default: mongoose } = require("mongoose");


const topicSchema=new mongoose.Schema({
   title:{
    type:String
   },
   description:{
    type:String
   },
   titleIndex:{
    type:Number
   }
    
},
{timestamps:true}
)

const Topic=mongoose.models.Topic||mongoose.model("Topic",topicSchema);
export default Topic;