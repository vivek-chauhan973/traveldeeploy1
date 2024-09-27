import CarPackageState from "@/models/car-package/package/PackageState";
const fetchpromocat=async (req,res)=>{
    // console.log("req12329u92y4732y7843593484984y5934y",req.query)
   const {selectType}= req?.query;

   if(selectType==="all"||selectType===""){
      
    try {
        const responseData=await CarPackageState.find({});
        if(!responseData){
            res.status(404).json({message:"promo data is not found"});
        }
        
        res.status(200).json({message:"promo data is found successfully",responseData});
       } catch (error) {
        res.status(501).json({message:error.message});
       }
   }
   else{
    try {
        const responseData=await CarPackageState.find({selectType});
        // console.log("responseData",responseData);
        if(!responseData){
            res.status(404).json({message:"promo data is not found"});
        }
        
        res.status(200).json({message:"promo data is found successfully",responseData});
       } catch (error) {
        res.status(501).json({message:error.message});
       }
   }
  

}

export default fetchpromocat;