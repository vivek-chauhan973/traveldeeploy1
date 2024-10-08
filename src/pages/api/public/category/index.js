import PackageMasterCategory from "@/models/package/PackageCategory";

const fetchCategory=async (req,res)=>{

    const {category}=req.query;

    if(!category){
        return res.status(301).json({message:"category is required "})
    }

    try {
        const data=await PackageMasterCategory.findOne({category:category});
        if(!data){
            return res.status(404).json({message:"Category is not found "}) 
        }
        return res.status(404).json({category:data}) 
    } catch (error) {
        return res.status(501).json({message:"Internal Server Error"})
    }




}

export default fetchCategory