
import SiteColor from "@/models/Sitecolor";
import connectToDatabase from "@/utils/db";

const websiteColor= async (req, res) => {
    await connectToDatabase()
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const { button } = req.body
        const siteColor = await SiteColor.create({
            button
        })
        return res.status(201).json({
            message: 'upadated color successfullty',
            siteColor
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  websiteColor