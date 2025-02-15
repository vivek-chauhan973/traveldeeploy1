/**
 * Updates package information including day-wise information.
 * @param {NextApiRequest} req - The Next.js API request object.
 * @param {NextApiResponse} res - The Next.js API response object.
 * @returns {Promise<void>} - Promise representing the asynchronous operation.
 */

import CarPackageDayWise from "@/models/car-package/package/PackageDayWise";
import CarPackage1 from "@/models/CarPackage";


import { NextApiRequest, NextApiResponse } from "next";

 const packageDayWise= async (req, res) => {
    const { packageId } = req.query;
    const { days, information } = req.body;
    const day=days?.length;
//     console.log("day wise ssss",days)
//  console.log("days aaa",days);
    try {
        const [tourPackage, packageDays] = await Promise.all([
            CarPackage1.findByIdAndUpdate(packageId, { dayWiseInformation: information}),
            CarPackageDayWise.findOneAndUpdate({ package: packageId }, { days }, { upsert: true, new: true }),
            // console.log("days destruct",{days})
        ]);
        const updatedPackage = await CarPackage1.findOneAndUpdate(
            {_id:packageId},
            { $set:{days:day}  },
            { new: true }
          );
        return res.status(201).json({ packageDays, tourPackage ,updatedPackage});
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }

}
export default  packageDayWise