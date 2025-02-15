
import CarGroupDepartureTerms from "@/models/car-package/package/TermsCondition/GroupDepartureTerms";
 const packageTourinfoCanGet= async (req, res) => {
    try {
        const CancellationGroupData = await CarGroupDepartureTerms.find();

        return res.status(200).json({
            message: 'Cancellation find Successful',
            CancellationGroupData
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  packageTourinfoCanGet