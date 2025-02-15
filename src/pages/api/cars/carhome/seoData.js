import SeoCarHomeData from "@/models/car-package/CarHome/SeoData";
const seoDataApi=async (req,res)=>{

    if(req.method==="POST"){    
    try {
       
        const data=await SeoCarHomeData.find({});
        let dataItem;
        if(data.length!==0){
             dataItem=await SeoCarHomeData.findOneAndReplace({title:data[0]?.title},req.body);
             return res.status(200).json({message:"updated data successfully",dataItem});
        }
        dataItem=await SeoCarHomeData.create(req.body);

        return res.status(201).json({message:"add sucessfully",dataItem});
        
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error"});
    }}
    else{
        try {
       
            const data=await SeoCarHomeData.find({});
            if(!data){
                return res.status(404).json({message:"data page is not found"});
            }
            return res.status(201).json({message:"add sucessfully",data});
            
        } catch (error) {
            return res.status(500).json({message:"Internal Server Error"});
        }
    }

}

export default seoDataApi;