
import CarFlexibleTime from "@/models/car-package/package/TermsCondition/FlexibleTime";
import connectToDatabase from "@/utils/db";
 const packageTourinfoCanGet= async (req, res) => {
    await connectToDatabase()
    try {
        const CancellationGroupData = await CarFlexibleTime.find();

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