import CarPackage from "@/models/car-package/carPackage";

const CarPackages=async (req,res)=>{
   
    const {packageId,
        title,
        price,
        description,
        inclusion,
        exclusion,
        readBeforeBook,mapCode}=req.body;
//    console.log("req.body kndkndjfksvfd;;;",req.body)
    if([packageId,
        title,
        price,
        description,
        inclusion,
        exclusion,
        mapCode,
        readBeforeBook].some(item=>item===""||item===0)){
            return res.status(301).json({message:"each field is required"});
        }
        if(req.method==="POST"){
    try {
      const data= await CarPackage.create({id:packageId,title,carprice:price,description,map:mapCode,inclusion,exclusion,readbook:readBeforeBook})
      if(!data){
        res.status(301).json({message:"somethimg went wrong"});
      }
      return res.status(201).json({message:"car package successfully created",data}); 

        
    } catch (error) {
        res.status(501).json({message:"Internal Server Error"});
    }
        }
        else{

            try {

                const data=await CarPackage.find({}).populate("id");
                if(!data){
                    res.status(404).json({message:"data not found"});
                }
                res.status(200).json({message:"data found successfully",data});
                
            } catch (error) {
                res.status(501).json({message:"Internal Server Error"});
            }
        }
}

export default CarPackages;