import Car from "@/models/car-package/cars";
const carApi=async (req,res)=>{
   const {id}=req.query;
   // console.log("id28329432746782534856982798409-9438729---> ",id)
try {
   const data=await Car.findById(id);
   if(!data){
    return res.status(404).json({message:"car not found"});
   }
   return res.status(200).json({message:"car found successfully",data});
} catch (error) {
    return res.status(500).json({message:"Internal server Error"});
}
}
export default carApi;