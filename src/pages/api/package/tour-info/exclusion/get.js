import Exclusion from "@/models/package/TourInfo/Exclusion";
import { NextApiRequest, NextApiResponse } from "next";

 const packageTourinfoExGet= async (req, res) => {
    try {
        const ExclusionGroupData = await Exclusion.find();

        return res.status(200).json({
            message: 'Exclusion find Successful',
            ExclusionGroupData
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  packageTourinfoExGet