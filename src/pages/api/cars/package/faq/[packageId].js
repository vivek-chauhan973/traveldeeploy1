/**
 * Updates package information including day-wise information.
 * @param {NextApiRequest} req - The Next.js API request object.
 * @param {NextApiResponse} res - The Next.js API response object.
 * @returns {Promise<void>} - Promise representing the asynchronous operation.
 */

import CarPackageFaqWise from "@/models/car-package/package/PackageFaq";
import connectToDatabase from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";
 const packageFaq= async (req, res) => {
  const { packageId } = req.query;
  // await dbConnect();
  await connectToDatabase()
  if (!packageId) {
    return res.status(400).json({ message: "Package ID is required" });
  }
  if (req.method === "POST") {
    const { days } = req.body;
    // console.log("days show is here", days);

    try {
      const faq = await CarPackageFaqWise.findOneAndUpdate(
        { package: packageId },
        { days },
        { upsert: true, new: true }
      );

      // console.log("Saved data:", faq);

      return res.status(201).json({ faq });
    } catch (error) {
      console.error("Error handling API request:", error);
      return res.status(500).json({ message: error.message });
    }
  } else if (req.method === "GET") {
    try {
      const faq = await CarPackageFaqWise.findOne({ package: packageId });

      if (!faq) {
        return res.status(404).json({ message: "FAQ not found" });
      }

      return res.status(200).json(faq);
    } catch (error) {
      console.error("Error handling API request:", error);
      return res.status(500).json({ message: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST", "GET"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }
};
export default packageFaq