import CarNeedToKnow from "@/models/car-package/package/TourInfo/NeedToKnow";
 const packageTourinfoInNeedAdd= async (req, res) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const { groupName,description} = req.body
        const NeedToKnowGroupData = await CarNeedToKnow.create({
            groupName,description
        })
        return res.status(201).json({
            message: 'created NeedToKnow group',
            NeedToKnowGroupData
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  packageTourinfoInNeedAdd