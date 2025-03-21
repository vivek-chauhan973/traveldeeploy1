

import CarCancellation from "@/models/car-package/package/TourInfo/Cancellation";
import connectToDatabase from "@/utils/db";
  const packageTourinfoCanAdd= async (req, res) => {
    await connectToDatabase()
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const { groupName,description} = req.body
        const CancellationGroupData = await CarCancellation.create({
            groupName,description
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