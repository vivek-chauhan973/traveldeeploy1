import HomeFooter from "@/models/Home";
import PackageMasterCategory from "@/models/package/PackageCategory";
import State from "@/models/State";
import Car from "@/models/car-package/cars";
import Package from "@/models/Package";
import City from "@/models/City";
import PackageState from "@/models/package/PackageState";
import DestinationHeader from "@/models/Home/DestinationHeader";

const destinationHeader=async (req,res)=>{
  const {category,selectedOptions,formData}=req.body;
  if(req.method==="POST"){
    if(category==="" || selectedOptions?.length===0){
      return res.status(301).json({message:"category and selectedoptions both are required"});
    }
    try {
      const {title,
        subtitle,
        description}=formData;
      const data=await DestinationHeader.findOne({category});
      if(data){
          const res1=await DestinationHeader.findOneAndReplace({category},{category,options:selectedOptions,title,
            subtitle,
            description});
          if(!res1){
               return res.status(303).json({message:"data can't be replaced"});
          }
          return res.status(200).json({message:"data  replaced successfully ",res1});
      }
      const response=await DestinationHeader.create({category,options:selectedOptions,title,
        subtitle,
        description});
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
      const response = await DestinationHeader.find().populate("options").lean();
      const populatedResponse=await Promise.all(response?.map(async (item,i)=>{
        const options = await Promise.all(item.options.map(async (id) => {
        if(item.category==="category1"){
          return PackageState.findById(id).exec();
        }
        if(item.category==="category2"){
          return PackageState.findById(id).exec();
        }
        if(item.category==="category3"){
          return PackageMasterCategory.findById(id).exec();
        }
        if(item.category==="category4"){
          return Car.findById(id).exec();
        }
        if(item.category==="category5"){
          return Package.findById(id).exec();
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