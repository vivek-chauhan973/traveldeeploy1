import Package from "@/models/Package"
import { NextApiRequest, NextApiResponse } from "next";

 const packageGet= async (req, res) => {

    try {
        const packages = await Package.find().populate({path:"location"}).populate({path:"country"}).populate({path:"state"}).populate('tourinfo.tourInclusion')
        .populate('tourinfo.tourExclusion')
        .populate('tourinfo.tourPayment').populate('tourinfo.tourCancelationPolicy')
        .populate('tourinfo.tourNeedToKonow').populate("fixedDeparturePrices").populate('category')  // Populate the array of category references
        .lean()
        return res.status(200).json({ packages });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
export default  packageGet