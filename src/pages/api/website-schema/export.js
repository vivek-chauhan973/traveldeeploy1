import websiteSchemaModel from "@/models/website-function/websiteSchema";
import { NextApiRequest, NextApiResponse } from "next";

const Export =async (req, res) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const {schemaName, schemaCode} = req.body
        const websiteSchema = await websiteSchemaModel.create({
            schemaName,
            schemaCode

        })
        return res.status(201).json({
            message: 'upadated color successfullty',
            websiteSchema
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default Export