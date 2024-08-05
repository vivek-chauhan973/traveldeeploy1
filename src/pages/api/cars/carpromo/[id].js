import CarPromo from "@/models/car-package/carpromo";

const fetchedData=async (req,res)=>{

    const {id}=req.query;

    if(!id){
       return res.status(301).json({message:"Id is required"});
    }

    try {
       const data=await CarPromo.find({stateId:id}) ;
       if(!data){
        return res.status(404).json({message:"Data is not found"});
       }
       return res.status(200).json({message:"data is found is successfully",data})

    } catch (error) {
       return  res.status(501).json({message:"internal server error"});
    }

}
 export default fetchedData