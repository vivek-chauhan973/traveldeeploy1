import CarPackage1 from "@/models/CarPackage";
const fetchPromoDataApi = async (req, res) => {
  const { cityId } = req.query;
  try {
    if (!cityId) {
      return res.status(300).json({ message: "Id is required" });
    }
    const data = await CarPackage1.find({ location: cityId }).populate('location').populate('state').populate('country').populate('tourinfo.tourInclusion')
    .populate('tourinfo.tourExclusion')
    .populate('tourinfo.tourPayment').populate('tourinfo.tourCancelationPolicy')
    .populate('tourinfo.tourNeedToKonow').populate("icons").populate("selectedVicle");

    if (!data) {
      return res
        .status(404)
        .json({ message: "promo data is not found to corresponding id" });
    }
    return res
      .status(200)
      .json({ message: " package list data is found successfully",data });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default fetchPromoDataApi;


