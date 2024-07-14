import Inclusion from "@/models/package/TourInfo/Inclusion";
import { NextApiRequest, NextApiResponse } from "next";
 const packageTourinfoInEdit= async (req, res) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const { group_id, groupName, description } = req.body;

        // Find the inclusion group by ID and update it
        const inclusionGroupData = await Inclusion.findByIdAndUpdate(
            group_id,
            { groupName, description },
            { new: true } // Return the updated document
        );

        if (!inclusionGroupData) {
            return res.status(404).json({ message: 'Inclusion group not found' });
        }

        return res.status(200).json({
            message: 'Inclusion group updated successfully',
            inclusionGroupData
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  packageTourinfoInEdit