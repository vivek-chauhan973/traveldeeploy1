import CarLimitedTime from "@/models/car-package/package/TermsCondition/LimitedTime";
import connectToDatabase from "@/utils/db";
 const packageTourinfoCanEdit= async (req, res) => {
    await connectToDatabase()
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const { group_id, groupName} = req.body;

        // Find the Cancellation group by ID and update it
        const CancellationGroupData = await CarLimitedTime.findByIdAndUpdate(
            group_id,
            { groupName},
            { new: true } // Return the updated document
        );

        if (!CancellationGroupData) {
            return res.status(404).json({ message: 'Cancellation group not found' });
        }

        return res.status(200).json({
            message: 'Cancellation group updated successfully',
            CancellationGroupData
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  packageTourinfoCanEdit