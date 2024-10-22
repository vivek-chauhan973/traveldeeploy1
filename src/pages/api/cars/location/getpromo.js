import CarPackageState from "@/models/car-package/package/PackageState";

const fetchPromoDataApi = async (req, res) => {
  const { cityId } = req.query;

  try {
    if (!cityId) {
      return res.status(300).json({ message: "Id is required" });
    }
    const data = await CarPackageState.findOne({ relatedId: cityId });

    if (!data) {
      return res
        .status(404)
        .json({ message: "promo data is not found to corresponding id" });
    }
    return res
      .status(200)
      .json({ message: " promo data is found successfully",data });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default fetchPromoDataApi;
