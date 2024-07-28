import Inclusion from "@/models/package/TourInfo/Inclusion";
import { NextApiRequest, NextApiResponse } from "next";
 const packageTourinfoInAdd= async (req, res) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const { groupName,description} = req.body
        const inclusionGroupData = await Inclusion.create({
            groupName,description
        })
        return res.status(201).json({
            message: 'created Inclusion group',
            inclusionGroupData
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  packageTourinfoInAdd