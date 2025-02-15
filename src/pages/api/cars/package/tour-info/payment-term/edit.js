import CarPaymentTerm from "@/models/car-package/package/TourInfo/PaymentTerm";
 const packageTourinfoInPaymentEdit= async (req, res) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const { group_id, groupName, description } = req.body;

        // Find the PaymentTerm group by ID and update it
        const PaymentTermGroupData = await CarPaymentTerm.findByIdAndUpdate(
            group_id,
            { groupName, description },
            { new: true } // Return the updated document
        );

        if (!PaymentTermGroupData) {
            return res.status(404).json({ message: 'PaymentTerm group not found' });
        }

        return res.status(200).json({
            message: 'PaymentTerm group updated successfully',
            PaymentTermGroupData
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  packageTourinfoInPaymentEdit