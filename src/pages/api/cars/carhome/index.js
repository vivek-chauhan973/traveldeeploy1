import CarHome from "@/models/car-package/CarHome";
import CarPackageState from "@/models/car-package/package/PackageState";
import CarPackage1 from "@/models/CarPackage";
const destinationHeader=async (req,res)=>{
  const {category,selectedOptions}=req.body;
  if(req.method==="POST"){
    if(category==="" || selectedOptions?.length===0){
      return res.status(301).json({message:"category and selectedoptions both are required"});
    }
    try {
      const data=await CarHome.findOne({category});
      if(data){
          const res1=await CarHome.findOneAndReplace({category},{category,options:selectedOptions});
          if(!res1){
               return res.status(303).json({message:"data can't be replaced"});
          }
          return res.status(200).json({message:"data  replaced successfully ",res1});
      }
      const response=await CarHome.create({category,options:selectedOptions});
      if(!response){
          return res.status(302).json({message:"something went wrong"})
      }
      return res.status(201).json({message:"entry created successfully ",response})
    } catch (error) {
      return res.status(500).json({message:error.message})
    }
  }
  else{
    try {
      const response = await CarHome.find().populate("options").lean();
      const populatedResponse=await Promise.all(response?.map(async (item,i)=>{
        const options = await Promise.all(item.options.map(async (id) => {
        if(item.category==="category1"){
          return CarPackageState.findById(id).exec();
        }
        if(item.category==="category2"){
          return CarPackage1.findById(id).populate("location").exec();
        }
        
      }));
    
    return {
      ...item,
      options: options.filter(o => o !== null) // Filter out any null values
    };
  }))

  if (populatedResponse.length === 0) {
    return res.status(404).json({ message: "No data found" });
  }

  return res.status(200).json({ message: "Data found successfully", data: populatedResponse });
  
    } catch (error) {
      console.error('Error fetching data:', error);
      return res.status(500).json({ message: "Server error", error: error.message });
    }
  }
}
export default destinationHeader