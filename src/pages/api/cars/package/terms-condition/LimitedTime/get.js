import CarLimitedTime from "@/models/car-package/package/TermsCondition/LimitedTime";
import connectToDatabase from "@/utils/db";
 const packageTourinfoCanGet= async (req, res) => {
    await connectToDatabase()
    try {
        const CancellationGroupData = await CarLimitedTime.find();

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