import NeedToKnow from "@/models/package/TourInfo/NeedToKnow";
import { NextApiRequest, NextApiResponse } from "next";
 const packageTourinfoInNeedEdit= async (req, res) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const { group_id, groupName, description } = req.body;

        // Find the NeedToKnow group by ID and update it
        const NeedToKnowGroupData = await NeedToKnow.findByIdAndUpdate(
            group_id,
            { groupName, description },
            { new: true } // Return the updated document
        );

        if (!NeedToKnowGroupData) {
            return res.status(404).json({ message: 'NeedToKnow group not found' });
        }

        return res.status(200).json({
            message: 'NeedToKnow group updated successfully',
            NeedToKnowGroupData
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default packageTourinfoInNeedEdit