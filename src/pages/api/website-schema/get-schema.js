import websiteSchemaModel from "@/models/website-function/websiteSchema";
import { NextApiRequest, NextApiResponse } from "next";

const GetSchema=async (req, res) => {
    try {
        const websiteSchema = await websiteSchemaModel.find();

        return res.status(200).json({
            message: 'website Schema find Successful',
            websiteSchema
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default GetSchema