import CarPackageDeparture from "@/models/car-package/package/PackageDeparture";
import CarPackage1 from "@/models/CarPackage";
import dbConnect from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";
const packagePriceAddguestDepartureIds= async (req, res) => {
const { packageId } = req?.query;
console.log("req------------------> body==============> ",req.body)
// console.log("data18345634278948790353879438673489 -->",departure1)

let save=0;
for(let item of req.body){
if(item?.Save>save){
  save=item?.Save;
}
}
// console.log("saving---------------> ",save)

  await dbConnect();
  if (!packageId) {
    return res.status(400).json({ message: "Package ID is required" });
  }

  if (req.method === "POST") {
  
    try {
       const data1=await CarPackageDeparture.findOne({package:packageId});
       if(data1){
        
        const response=await CarPackageDeparture.findOneAndReplace({package:packageId},{package:packageId,departureData:req.body},{new:true})

        if(response){
          const updatedPackage = await CarPackage1.updateOne(
            {_id:packageId},
            { $set: {highSave:save,fixedDeparturePrices:response?._id } },
            { new: true }
          );

          return res.status(200).json({response})
        }

       }
       const response1=await CarPackageDeparture.create({package:packageId,departureData:req.body});
       if(response1){
        const updatedPackage = await CarPackage1.updateOne(
          {_id:packageId},
          { $set: {highSave:save, fixedDeparturePrices:response1?._id } },
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
      const departure = await CarPackageDeparture.findOne({ package: packageId });

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
