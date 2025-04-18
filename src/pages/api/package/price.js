import Package from "@/models/Package";
import PackagePrice from "@/models/package/PackagePrice";
import connectToDatabase from "@/utils/db";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

 const packagePrice= async (req, res) => {
    await connectToDatabase()
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const { packageId, singleRoom, twinSharingRoom, tripleSharingRoom, quadSharingRoom, infantSharingRoom, childOverFive, childUnderFive,adults,addguest } = req.body;
 if (!mongoose.Types.ObjectId.isValid(packageId)) {
    return res.status(400).json({ message: "Package ID is required" });
  }
        let price = await PackagePrice.findOne({ package: packageId });
        
        if (!price) {
            price = new PackagePrice({
                package: packageId,
                singleRoom,
                twinSharingRoom,
                tripleSharingRoom,
                quadSharingRoom,
                childOverFive,
                childUnderFive,
                infantSharingRoom,
                adults
            }); 
        } else {
            price.singleRoom = singleRoom;
            price.twinSharingRoom = twinSharingRoom;
            price.tripleSharingRoom = tripleSharingRoom;
            price.quadSharingRoom = quadSharingRoom;
            price.childOverFive = childOverFive;
            price.childUnderFive = childUnderFive;
            price.infantSharingRoom = infantSharingRoom;
            price.adults = adults;
        }

        await price.save();

        return res.status(201).json({ message: 'Package price saved', price });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default packagePrice