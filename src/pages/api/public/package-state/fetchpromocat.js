import PackageState from "@/models/package/PackageState";
const fetchpromocat=async (req,res)=>{

   const {selectType}= req?.query;

   if(selectType==="all"||selectType===""){
      
    try {
        const responseData=await PackageState.find({});
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
        const responseData=await PackageState.find({selectType});
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