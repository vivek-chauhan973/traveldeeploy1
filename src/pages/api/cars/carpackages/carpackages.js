import CarPackage from "@/models/car-package/carPackage";

const CarPackages=async (req,res)=>{
   const url="hello"
    const {packageId,
        title,
        price,
        description,
        inclusion,
        exclusion,
        readBeforeBook,mapCode, location}=req.body;
//    console.log("req.body kndkndjfksvfd;;;",req.body)
    if([packageId,
        title,
        price,
        description,
        inclusion,
        exclusion,
        mapCode,
        readBeforeBook,location].some(item=>item===""||item===0)){
            return res.status(301).json({message:"each field is required"});
        }
        if(req.method==="POST"){
            // console.log("jdkssssssssssssssssssssssssssssssssssssssssssssssssssss")
    try {
      const data= await CarPackage.create({id:packageId,title,url,carprice:price,description,location,map:mapCode,inclusion,exclusion,readbook:readBeforeBook})
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