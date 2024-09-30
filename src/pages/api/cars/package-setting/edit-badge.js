
import CarPackageMasterBadge from "@/models/car-package/package/PackageBadge";
import { NextApiRequest, NextApiResponse } from "next";
 const packageSettingEdit= async (req, res) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const { badge, badge_id } = req.body
        const Packagebadge = await CarPackageMasterBadge.findByIdAndUpdate(badge_id, {
            badge
        })
        return res.status(200).json({
            message: 'badge updated',
            Packagebadge
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  packageSettingEdit