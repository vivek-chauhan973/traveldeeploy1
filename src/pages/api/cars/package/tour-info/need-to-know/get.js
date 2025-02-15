import CarNeedToKnow from "@/models/car-package/package/TourInfo/NeedToKnow";
 const packageTourinfoInNeedGet= async (req, res) => {
    try {
        const NeedToKnowGroupData = await CarNeedToKnow.find();

        return res.status(200).json({
            message: 'NeedToKnow find Successful',
            NeedToKnowGroupData
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  packageTourinfoInNeedGet