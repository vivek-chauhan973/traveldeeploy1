
import CarPackageMasterBadge from "@/models/car-package/package/PackageBadge";
import { NextApiRequest, NextApiResponse } from "next";

 const packageSettingGet=async (req, res) => {
    try {
        const PackageBadges = await CarPackageMasterBadge.find();

        return res.status(200).json({
            message: 'Badges find Successful',
            PackageBadges
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default packageSettingGet