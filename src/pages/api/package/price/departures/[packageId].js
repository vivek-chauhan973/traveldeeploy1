import PackageDeparture from "@/models/package/PackageDeparture";
import dbConnect from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

 const packagePriceAddguestDepartureIds= async (req, res) => {
  const { packageId } = req.query;
  await dbConnect();

  if (!packageId) {
    return res.status(400).json({ message: "Package ID is required" });
  }

  if (req.method === "POST") {
    const { prices, agePolicy, notes,departure1 } = req.body;
    const { basePrice, rate, inventory, weightOptional } = prices;

    try {
      const departure = await PackageDeparture.findOneAndUpdate(
        { package: packageId },
        {
          basePrice: parseFloat(basePrice),
          perRate: parseFloat(rate),
          inventory: parseInt(inventory, 10),
          weight: parseFloat(weightOptional),
          agePolicy,
          notes,
          departure1,
        },
        { upsert: true, new: true }
      );

      // console.log("Saved departure data:", departure);
      return res.status(201).json({ departure });
    } catch (error) {
      console.error("Error handling API request:", error);
      return res.status(500).json({ message: error.message });
    }
  } else if (req.method === "GET") {
    try {
      const departure = await PackageDeparture.findOne({ package: packageId });

      if (!departure) {
        return res.status(404).json({ message: "Departure not found" });
      }

      return res.status(200).json(departure);
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
export default  packagePriceAddguestDepartureIds
