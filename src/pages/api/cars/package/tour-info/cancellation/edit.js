import CarCancellation from "@/models/car-package/package/TourInfo/Cancellation";
 const packageTourinfoCanEdit= async (req, res) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const { group_id, groupName, description } = req.body;

        // Find the Cancellation group by ID and update it
        const CancellationGroupData = await CarCancellation.findByIdAndUpdate(
            group_id,
            { groupName, description },
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