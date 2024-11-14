import BlogQuestion from "@/models/blog/BlogQuestion";
import SubQuestions from "@/models/blog/SubQuestions";
const blogquestionApi = async (req, res) => {
  const {quesId}=req.query;
  if (req.method === "DELETE") {
   try {
    const data=await BlogQuestion.findById({_id:quesId});
    if(!data){
      return res.status(404).json({message:"Question is not found related Id !!"});
    }
    await SubQuestions.findByIdAndDelete({_id:data?.blogSubQuestion});
    await BlogQuestion.findByIdAndDelete({_id:quesId});
    return res.status(200).json({message:"question is deleted successfully"});
    
   } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
   }
  
  }
};

export default blogquestionApi;
