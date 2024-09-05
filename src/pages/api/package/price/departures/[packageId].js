import Package from "@/models/Package";
import PackageDeparture from "@/models/package/PackageDeparture";
import dbConnect from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";
 const packagePriceAddguestDepartureIds= async (req, res) => {
  const { packageId } = req?.query;
  const {departure1,data}=req.body;
  const data1=data?.filter(item=>item.hasOwnProperty("Weight")==true);
let Weight=1;
if(data1?.length!==0){
  Weight=2;
}
else{
  Weight=1;
}
// console.log("data18345634278948790353879438673489 -->",departure1)
  await dbConnect();
  if (!packageId) {
    return res.status(400).json({ message: "Package ID is required" });
  }

  if (req.method === "POST") {
  
    try {
       const data1=await PackageDeparture.findOne({package:packageId});
       if(data1){
        
        const response=await PackageDeparture.findOneAndReplace({package:packageId},{package:packageId,departure1:departure1,departureData:data},{new:true})

        if(response){
          const updatedPackage = await Package.updateOne(
            {_id:packageId},
            { $set: { addguest: departure1,fixedfixeddepartureweightedprice:Weight,fixedDeparturePrices:response?._id } },
            { new: true }
          );

          return res.status(200).json({response})
        }

       }
       const response1=await PackageDeparture.create({package:packageId,departure1:departure1,departureData:data});
       if(response1){
        const updatedPackage = await Package.updateOne(
          {_id:packageId},
          { $set: { addguest: departure1,fixedfixeddepartureweightedprice:Weight,fixedDeparturePrices:response1?._id } },
          { new: true }
        );

        return res.status(200).json({response1})
      }
    } catch (error) {
      console.error("Error handling API request:", error);
      return res.status(500).json({ message: error.message });
    }
  } else if (req.method === "GET") {
    try {
      const departure = await PackageDeparture.findOne({ package: packageId });

      if (!departure) {
        return res.status(404).json({ message: "Departure not found" });
      }

      return res.status(200).json(departure);
    } catch (error) {
      console.error("Error handling API request:", error);
      return res.status(500).json({ message: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST", "GET"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }
};
export default  packagePriceAddguestDepartureIds
