import CarTourInformation from "@/models/car-package/package/TourInformation";
import CarPackage1 from "@/models/CarPackage";
 const packageTourinformationIds= async (req, res) => {
  const { packageId } = req.query;
  // await dbConnect();

  if (!packageId) {
    return res.status(400).json({ message: "Package ID is required" });
  }

  if (req.method === "POST") {
    const { inclusion, exclusion, cancellation, paymentTerm, needToKnow } = req.body;
    const tourinfo2={tourInclusion:inclusion?._id,tourExclusion:exclusion?._id,tourCancelationPolicy:cancellation?._id,tourNeedToKonow:needToKnow?._id,tourPayment:paymentTerm?._id};

    try {
      const tourInfo = await CarTourInformation.findOneAndUpdate(
        { package: packageId },
        { inclusion, exclusion, cancellation, paymentTerm, needToKnow },
        { upsert: true, new: true }
      );
    const tourInfo1=await CarPackage1.findByIdAndUpdate({_id:packageId},{tourinfo:tourinfo2},{ upsert: true, new: true })
      // console.log("Saved tour information:", tourInfo);

      return res.status(201).json({ tourInfo ,tourInfo1});
    } catch (error) {
      console.error("Error handling API request:", error);
      return res.status(500).json({ message: error.message });
    }
  } else if (req.method === "GET") {
    try {
      const tourInfo = await CarTourInformation.findOne({ package: packageId });

      if (!tourInfo) {
        return res.status(404).json({ message: "Tour information not found" });
      }

      return res.status(200).json(tourInfo);
    } catch (error) {
      console.error("Error handling API request:", error);
      return res.status(500).json({ message: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST", "GET"]);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
export default  packageTourinformationIds
