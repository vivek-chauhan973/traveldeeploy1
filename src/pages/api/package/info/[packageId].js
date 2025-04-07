import Package from "@/models/Package";
import PackageHighlight from "@/models/package/PackageHighlight";
import connectToDatabase from "@/utils/db";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

const packageInfoIds= async (req, res) => {
    await connectToDatabase()
    const { packageId } = req.query;
    const { highlights, about } = req.body;

     if (!mongoose.Types.ObjectId.isValid(packageId)) {
        return res.status(400).json({ message: "Package ID is required" });
      }

    try {
        const [tourPackage, packageHighlights] = await Promise.all([
            Package.findByIdAndUpdate(packageId, { about }),
            PackageHighlight.findOneAndUpdate({ package: packageId }, { highlights }, { upsert: true, new: true })
        ]);
        // console.log(highlights, about)
        return res.status(201).json({ packageHighlights, tourPackage });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }

}
export default packageInfoIds