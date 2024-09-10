import GroupDepartureTerms from "@/models/package/TermsCondition/GroupDepartureTerms";
import { NextApiRequest, NextApiResponse } from "next";

 const packageTourinfoCanGet= async (req, res) => {
    try {
        const CancellationGroupData = await GroupDepartureTerms.find();

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