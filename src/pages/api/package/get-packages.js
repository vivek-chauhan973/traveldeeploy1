import Package from "@/models/Package"
import { NextApiRequest, NextApiResponse } from "next";

 const packageGet= async (req, res) => {
    try {
        const packages = await Package.find().populate('location').sort('-updatedAt')
        return res.status(200).json({ packages });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
export default  packageGet