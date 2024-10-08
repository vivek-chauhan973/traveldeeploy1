// pages/api/applyPriceHike.js

import CarPackage from "../../../../models/CarPackage";
import CarPriceHike from "@/models/car-package/package/PriceHike";


const handler=async(req, res)=> {
  const {packageId}=req.query;
  // console.log("packageId---------------------> ",packageId) ;
  if (req.method === 'POST') {
   
    if (!packageId) {
      return res.status(400).json({ error: 'Package ID is required' });
    }

    try {
      // Save or update the price hike in the database
      const data=await CarPriceHike.findOne({packageId});
      if(data){
        const packageData=await CarPackage.findByIdAndUpdate({_id:packageId},{$set:{priceHike:data?._id}},{upsert:true,new:true});
        const priceHikeData=await CarPriceHike.findOneAndReplace({packageId:packageId},{packageId,priceHiKe:req?.body},{upsert:false})
        if(!packageData){
          return res.status(404).json({ error: 'Package not found' });
        }
        return res.status(200).json({ error: 'data created and updated successfully',packageData,response:priceHikeData });
      }

      const response=await CarPriceHike.create({packageId,priceHiKe:req?.body})
      if(response){

        const packageData=await CarPackage.findByIdAndUpdate({_id:packageId},{$set:{priceHike:response?._id}},{upsert:true,new:true})

        if(!packageData){
          return res.status(404).json({ error: 'Package not found' });
        }
        return res.status(200).json({ error: 'data created and updated successfully',packageData,response });
         
      }
      else{
        return res.status(301).json({ error: 'somthing went wrong' });
      }
      
    } catch (error) {
     return res.status(500).json({ error: 'Failed to apply price hike' });
    }
  } else {
    try {
      const response=await CarPriceHike.findOne({packageId});
      if(!response){
        return res.status(404).json({ message: 'package is not found' });
      }
      res.status(200).json({ message: 'package found successfully',response });
      
    } catch (error) {
      return res.status(500).json({message:error.message})
    } 
  }
}
export default handler;