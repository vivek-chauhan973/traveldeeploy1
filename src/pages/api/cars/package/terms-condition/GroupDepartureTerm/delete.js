
import CarGroupDepartureTerms from "@/models/car-package/package/TermsCondition/GroupDepartureTerms";
import connectToDatabase from "@/utils/db";
 const packageTourinfoCanDelete= async (req, res) => {
    await connectToDatabase()
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }
        const { group_id } = req.body; 
        await CarGroupDepartureTerms.findByIdAndDelete(group_id)
        return res.status(200).json({ message: 'Cancellation deleted',group_id });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  packageTourinfoCanDelete