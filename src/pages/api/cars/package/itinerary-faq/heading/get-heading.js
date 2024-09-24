import CarItineraryFaqHeading from "@/models/car-package/package/ItineraryHeading/heading";
import { NextApiRequest, NextApiResponse } from "next";

 const packageItineraryGet= async (req, res) => {
    try {
        const FaqHeading = await CarItineraryFaqHeading.find();

        return res.status(200).json({
            message: 'faq heading find Successful',
            FaqHeading
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  packageItineraryGet