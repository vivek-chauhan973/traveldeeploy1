import PackageTerms from "@/models/package/TermsCondition/PackageTerms";
import { NextApiRequest, NextApiResponse } from "next";

 const packageTourinfoCanGet= async (req, res) => {
    try {
        const CancellationGroupData = await PackageTerms.find();

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