import FixedDeparturePrice from "@/models/package/FixedDeparturePrice";


const FixedDeparturePriceApi=async (req,res)=>{

    const {packageId}=req.query;

    const entries=req.body
   if(!packageId){
    return res.status(301).json({message:"packageId is required"});
   }
   if(req.method==="POST"){
   try {
    const data=await FixedDeparturePrice.findOne({packageId});
    if(!data){
        const response=await FixedDeparturePrice.create({packageId,datePriceArray:entries});
        return res.status(201).json({message:"data created successfully",response});
    }
    else{
        const response=await FixedDeparturePrice.findOneAndReplace({packageId},{packageId,datePriceArray:entries});
        return res.status(200).json({message:"data updated successfully",response});
    }
   } catch (error) {
    return res.status(501).json({message:error.message});
   }
}
else{
    try {
        const data=await FixedDeparturePrice.findOne({packageId});
        if(!data){
            return res.status(404).json({message:"data not found"});
        }
        return res.status(200).json({message:"data is found successfully",data});
    } catch (error) {
        return res.status(501).json({message:error.message});
    }
}
}

export default FixedDeparturePriceApi;