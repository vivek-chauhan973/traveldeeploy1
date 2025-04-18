import CarExclusion from "@/models/car-package/package/TourInfo/Exclusion";
import connectToDatabase from "@/utils/db";
 const packageTourinfoExAdd= async (req, res) => {
    await connectToDatabase()
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const { groupName,description} = req.body
        const ExclusionGroupData = await CarExclusion.create({
            groupName,description
        })
        return res.status(201).json({
            message: 'created Exclusion group',
            ExclusionGroupData
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  packageTourinfoExAdd