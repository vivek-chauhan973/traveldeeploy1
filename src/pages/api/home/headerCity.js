import City from "@/models/City";
const headerCityApi=async (req,res)=>{
    const {id}=req.query;
    try {
        if(!id){
            return res.status(301).json({message:"Id is required"});
        }
        const data=await City.find({state:id});
        if(data.length===0){
            return res.status(401).json({message:"There is no city found related state"});
        }

        return res.status(200).json({message:"data is found",data});
        
    } catch (error) {
        return res.status(501).json({message:"Internal Server Error"});
    }

}

export default headerCityApi;