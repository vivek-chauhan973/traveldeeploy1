import CarItineraryFaqHeading from "@/models/car-package/package/ItineraryHeading/heading";
import connectToDatabase from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

 const packageItineraryDelete= async (req, res) => {
    await connectToDatabase()
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }
        const { heading_id } = req.body; 
        await CarItineraryFaqHeading.findByIdAndDelete(heading_id)
        return res.status(200).json({ message: 'faq heading deleted' });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  packageItineraryDelete