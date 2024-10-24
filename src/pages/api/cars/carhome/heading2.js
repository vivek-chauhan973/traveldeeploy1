
import Heading2 from "@/models/car-package/CarHome/Heading2";

const heading2Api=async (req,res)=>{

    if(req.method==="POST"){    
    try {
       
        const data=await Heading2.find({});
        let dataItem;
        if(data.length!==0){
             dataItem=await Heading2.findOneAndReplace({heading2:data[0]?.heading2},req.body);
             return res.status(200).json({message:"updated data successfully",dataItem});
        }
        dataItem=await Heading2.create(req.body);

        return res.status(201).json({message:"add sucessfully",dataItem});
        
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error"});
    }}
    else{
        try {
       
            const data=await Heading2.find({});
            if(!data){
                return res.status(404).json({message:"data page is not found"});
            }
            return res.status(201).json({message:"add sucessfully",data});
            
        } catch (error) {
            return res.status(500).json({message:"Internal Server Error"});
        }
    }

}

export default heading2Api;