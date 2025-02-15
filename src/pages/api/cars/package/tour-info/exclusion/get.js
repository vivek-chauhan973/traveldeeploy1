import CarExclusion from "@/models/car-package/package/TourInfo/Exclusion";
 const packageTourinfoExGet= async (req, res) => {
    try {
        const ExclusionGroupData = await CarExclusion.find();

        return res.status(200).json({
            message: 'Exclusion find Successful',
            ExclusionGroupData
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  packageTourinfoExGet