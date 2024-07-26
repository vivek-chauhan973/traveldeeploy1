import PackagePrice from "@/models/package/PackagePrice";
import dbConnect from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

 const packagePriceAddguestIds= async (req, res) => {
  const { packageId } = req.query;
  await dbConnect();

  if (!packageId) {
    return res.status(400).json({ message: "Package ID is required" });
  }

  if (req.method === "POST") {
    console.log("req body  ; ",req.body)
    const {addguest, singleRoom, twinSharingRoom, tripleSharingRoom, quadSharingRoom, infantSharingRoom, childUnderFive, childOverFive } = req.body;

    try {
      const price = await PackagePrice.findOneAndUpdate(
        { package: packageId },
        {
          addguest,
          singleRoom,
          twinSharingRoom,
          tripleSharingRoom,
          quadSharingRoom,
          infantSharingRoom,
          childUnderFive,
          childOverFive,
        },
        { upsert: true, new: true }
      );

      // console.log("Saved price data:", price);
      return res.status(201).json({ price });
    } catch (error) {
      console.error("Error handling API request:", error);
      return res.status(500).json({ message: error.message });
    }
  } else if (req.method === "GET") {
    try {
      const price = await PackagePrice.findOne({ package: packageId });

      if (!price) {
        return res.status(404).json({ message: "Price not found" });
      }

      return res.status(200).json(price);
    } catch (error) {
      console.error("Error handling API request:", error);
      return res.status(500).json({ message: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST", "GET"]);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
export default  packagePriceAddguestIds
