import dbConnect from "@/utils/db";
import CarPackageMap from "@/models/car-package/package/PackageMap";

 const packageMapIds= async (req, res) => {
  const { packageId } = req.query;
  await dbConnect();

  if (!packageId) {
    return res.status(400).json({ message: "Package ID is required" });
  }

  if (req.method === "POST") {
    const { mapCode } = req.body;

    try {
      const map = await CarPackageMap.findOneAndUpdate(
        { package: packageId }, // Ensure 'package' matches your schema field
        { mapCode },
        { upsert: true, new: true ,strict: false }
      );

      // console.log("Saved data:", map);

      return res.status(201).json({ map });
    } catch (error) {
      console.error("Error handling API request:", error);
      return res.status(500).json({ message: error.message });
    }
  } else if (req.method === "GET") {
    try {
      const code = await CarPackageMap.findOne({ package: packageId });

      if (!code) {
        return res.status(404).json({ message: "Package Map not found" });
      }

      return res.status(200).json(code);
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
export default packageMapIds