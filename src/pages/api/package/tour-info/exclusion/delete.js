import Exclusion from "@/models/package/TourInfo/Exclusion";
import { NextApiRequest, NextApiResponse } from "next";

 const packageTourinfoExDelete= async (req, res) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }
        const { group_id } = req.body; 
        await Exclusion.findByIdAndDelete(group_id)
        return res.status(200).json({ message: 'Exclusion deleted',group_id });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  packageTourinfoExDelete