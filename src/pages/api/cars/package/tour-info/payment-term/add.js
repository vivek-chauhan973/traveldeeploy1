import CarPaymentTerm from "@/models/car-package/package/TourInfo/PaymentTerm";
import connectToDatabase from "@/utils/db";
 const packageTourinfoInPaymentAdd= async (req, res) => {
    await connectToDatabase()
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const { groupName,description} = req.body
        const PaymentTermGroupData = await CarPaymentTerm.create({
            groupName,description
        })
        return res.status(201).json({
            message: 'created PaymentTerm group',
            PaymentTermGroupData
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  packageTourinfoInPaymentAdd