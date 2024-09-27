
import CarItineraryFaqHeading from "@/models/car-package/package/ItineraryHeading/heading";
import { NextApiRequest, NextApiResponse } from "next";
 const packageItineraryAdd= async (req, res) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const { faqheading, editor} = req.body
        const ItineraryFaq = await CarItineraryFaqHeading.create({
            faqheading,editor
        })
        return res.status(201).json({
            message: 'created new category',
            ItineraryFaq
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  packageItineraryAdd