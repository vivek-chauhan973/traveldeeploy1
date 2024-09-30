import FixedDeparturePrice from "@/models/package/FixedDeparturePrice";


const FixedDeparturePriceApi=async (req,res)=>{

    const {packageId}=req.query;

    const {entries,limit}=req.body
    const limitData=limit?.split(",");
    console.log("req body 12213282343274673203-4362789934053892 ::: :: :: :: ",limitData)
   if(!packageId){
    return res.status(301).json({message:"packageId is required"});
   }
   if(req.method==="POST"){
   try {
    const data=await FixedDeparturePrice.findOne({packageId});
    if(!data){
        const response=await FixedDeparturePrice.create({packageId,datePriceArray:entries,limit:limitData});
        return res.status(201).json({message:"data created successfully",response});
    }
    else{
        const response=await FixedDeparturePrice.findOneAndReplace({packageId},{packageId,datePriceArray:entries,limit:limitData});
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