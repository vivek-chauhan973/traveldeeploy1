
import CarPackageMap from "@/models/car-package/package/PackageMap";
import connectToDatabase from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

 const packageMapGet= async (req, res) => {
    await connectToDatabase()
    try {
        const PackageGet = await CarPackageMap.find();

        return res.status(200).json({
            message: 'Package SEO find Successful',
            PackageGet
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default packageMapGet