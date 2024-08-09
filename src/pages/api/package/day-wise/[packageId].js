/**
 * Updates package information including day-wise information.
 * @param {NextApiRequest} req - The Next.js API request object.
 * @param {NextApiResponse} res - The Next.js API response object.
 * @returns {Promise<void>} - Promise representing the asynchronous operation.
 */

import Package from "@/models/Package";
import PackageDayWise from "@/models/package/PackageDayWise";
import { NextApiRequest, NextApiResponse } from "next";

 const packageDayWise= async (req, res) => {
    const { packageId } = req.query;
    const { days, information } = req.body;
    const day=days?.length;

    try {
        const [tourPackage, packageDays] = await Promise.all([
            Package.findByIdAndUpdate(packageId, { dayWiseInformation: information}),
            PackageDayWise.findOneAndUpdate({ package: packageId }, { days }, { upsert: true, new: true }),
      
        ]);
        const updatedPackage = await Package.findOneAndUpdate(
            {_id:packageId},
            { $set:{days:day}  },
            { new: true }
          );
        return res.status(201).json({ packageDays, tourPackage ,updatedPackage});
    } catch (error) {
      
        return res.status(500).json({ message: error.message });
    }

}
export default  packageDayWise