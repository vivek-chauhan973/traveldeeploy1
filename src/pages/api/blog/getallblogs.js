import BlogDetail from "@/models/blog/BlogDetail";
const fetchAllBlogApi=async (req,res)=>{
const {selectType}=req.query;
    try {
        const data=await BlogDetail.find({blogType:selectType}).populate("blogQuestions category");
        if(!data){
            res.status(404).json({message:"blogs are not found"})
        }
        res.status(200).json({message:"blogs found sucessfully",data});
        
    } catch (error) {
        res.status(501).json({message:"Internal server error"});
    }

}

export default fetchAllBlogApi;