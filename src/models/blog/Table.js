const { default: mongoose } = require("mongoose");

const tableSchema=new mongoose.Schema({
    tableData:[{}],
    tableColumn:[String],
    blog:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"BlogDetail"
    
      },
},{timestamps:true});

const BlogTable=mongoose.models.BlogTable||mongoose.model("BlogTable",tableSchema);
export default BlogTable;