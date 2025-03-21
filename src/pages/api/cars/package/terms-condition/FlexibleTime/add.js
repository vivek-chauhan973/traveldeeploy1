import CarFlexibleTime from "@/models/car-package/package/TermsCondition/FlexibleTime";
import connectToDatabase from "@/utils/db";
  const packageTourinfoCanAdd= async (req, res) => {
    await connectToDatabase()
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const { groupName} = req.body
        const CancellationGroupData = await CarFlexibleTime.create({
            groupName
        })
        return res.status(201).json({
            message: 'created Cancellation group',
            CancellationGroupData
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  packageTourinfoCanAdd