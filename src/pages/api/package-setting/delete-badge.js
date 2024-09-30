import PackageMasterBadge from "@/models/package/PackageBadge";
import { NextApiRequest, NextApiResponse } from "next";
 const packageSettingDelete= async (req, res) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const { badgeId  } = req.body
        const Packagebadge = await PackageMasterBadge.findByIdAndDelete(badgeId)
        return res.status(200).json({
            message: 'badge deleted',
            Packagebadge
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default packageSettingDelete