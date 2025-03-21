import websiteSchemaModel from "@/models/website-function/websiteSchema";
import connectToDatabase from "@/utils/db";
const GetSchema=async (req, res) => {
    await connectToDatabase()
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