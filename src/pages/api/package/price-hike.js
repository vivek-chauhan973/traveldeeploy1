// pages/api/applyPriceHike.js
import Package from '@/models/Package';
import PriceHike from '@/models/package/PriceHike';

const handler=async(req, res)=> {
  const {packageId}=req.query;
  const { startDate,endDate,priceIncrease,isActive,svg} = req.body;
     const price=parseInt(priceIncrease);
  if (req.method === 'POST') {
   
    if (!packageId) {
      return res.status(400).json({ error: 'Package ID is required' });
    }

    try {
      // Save or update the price hike in the database
      const response=await PriceHike.create({packageId, startDate,endDate,priceIncrease:price,isActive,svg})
      if(response){

        const packageData=await Package.findByIdAndUpdate({_id:packageId},{$set:{priceHike:response?._id}},{upsert:true,new:true})

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
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
export default handler;
