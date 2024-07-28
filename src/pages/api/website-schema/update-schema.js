import websiteSchemaModel from "@/models/website-function/websiteSchema";
import { NextApiRequest, NextApiResponse } from "next";

const UpdateSchema= async (req, res) => {
    try {
        if (req.method !== 'PUT') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const { id, schemaName, schemaCode } = req.body;

        if (!id) {
            return res.status(400).json({ message: 'Schema ID is required for updating' });
        }

        const existingSchema = await websiteSchemaModel.findById(id);

        if (!existingSchema) {
            return res.status(404).json({ message: 'Schema not found' });
        }

        existingSchema.schemaName = schemaName;
        existingSchema.schemaCode = schemaCode;

        await existingSchema.save();

        return res.status(200).json({
            message: 'Schema updated successfully',
            websiteSchema: existingSchema
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
};
export default UpdateSchema 