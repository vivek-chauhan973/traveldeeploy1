import websiteSchemaModel from "@/models/website-function/websiteSchema";
import connectToDatabase from "@/utils/db";
 const websiteDeleteSchema=async (req, res) => {
    await connectToDatabase()
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }
        const { schema_id } = req.body; 
        await websiteSchemaModel.findByIdAndDelete(schema_id)
        return res.status(200).json({ message: 'Schema Booking deleted' });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  websiteDeleteSchema