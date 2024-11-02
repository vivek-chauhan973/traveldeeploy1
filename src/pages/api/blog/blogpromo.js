import BlogPromo from "@/models/blog/BlogPromo";


const bogpromoApi=async (req,res)=>{
    const {title,canonicalUrl,description,keyword}=req.body;
   if(req.method==="POST"){ try {
        let data1=await BlogPromo.findOne();
        let data;
        if(!data1){
            data=await BlogPromo.create({title,canonicalUrl,description,keyword});
            return res.status(201).json({message:"data is successfully created",data:data})
        }
        data=await BlogPromo.findByIdAndUpdate({_id:data1?._id},{
            $set:{title,canonicalUrl,description,keyword}
        })
        return res.status(200).json({message:"data is successfully updated",data:data})
        
    } catch (error) {
        return res.status(501).json({message:"Internal Server Error"});
    }
}else{
    try {
        let data1=await BlogPromo.find();

        if(!data1){
           return res.status(404).json({message:"no such product is found"});
        }
        return res.status(200).json({message:"data is found successfully",data:data1})
        
    } catch (error) {
        return res.status(501).json({message:"Internal Server Error"}); 
    }
  
}

}
export default bogpromoApi;