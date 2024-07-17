import StartCity1 from "../../../../models/StartCity1";
const StartCityApi=async (req,res)=>{
const {startcity}=req.query;
console.log("packageId74236321439654969131391",startcity);
    const {city}=req.body;
    const city1=city?.split(",");
    if(!startcity){
        // connectToDatabase
        return res.status(404).json({message:"city data not found related to the packageId"});
    }
    if(req.method==="POST"){
        try {
            
       const startCityData=await StartCity1.create({city:city1,packageId:startcity}) ;
    //    console 
    await startCityData.save();
       if(!startCityData){
         return res.status(301).json({message:"something went wrong"});
       }   
       return res.status(201).json({message:"city data successfully created",startCityData});
        } catch (error) {
            
            return res.status(500).json({message:error.message});
        }
    }
    else{
        try {
              const cityData=await StartCity1.findOne({packageId:startcity});
              return res.status(200).json({message:"data found",cityData});
        } catch (error) {
            
            return res.status(500).json({message:"Internal server Error"});
        }
    
    
    
    }
  
   
}
export default StartCityApi
