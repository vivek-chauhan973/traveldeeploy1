import CarInclusion from "@/models/car-package/package/TourInfo/Inclusion";
import connectToDatabase from "@/utils/db";
 const packageTourinfoInGet=async (req, res) => {
    await connectToDatabase()
    try {
        const inclusionGroupData = await CarInclusion.find();

        return res.status(200).json({
            message: 'Inclusion find Successful',
            inclusionGroupData
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  packageTourinfoInGet