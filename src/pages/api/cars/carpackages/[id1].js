import CarPackage1 from "@/models/CarPackage";


const CarPackages = async (req, res) => {
  const { id1 } = req.query;
  const {
    packageId,
    title,
    price,
    description,
    inclusion,
    exclusion,
    readBeforeBook,
    mapCode,
    location,
  } = req.body;

  if (!id1) {
    return res.status(301).json({ message: "packageId is required" });
  }
  if (
    [
      packageId,
      title,
      price,
      description,
      inclusion,
      exclusion,
      mapCode,
      readBeforeBook,
      location,
    ].some((item) => item === "" || item === 0)
  ) {
    return res.status(301).json({ message: "each field is required" });
  }
  if (req.method === "POST") {
    try {
      const data = await CarPackage1.findByIdAndUpdate(
        { _id: id1 },
        {
          id: packageId,
          title,
          carprice: price,
          description,
          location,
          map: mapCode,
          inclusion,
          exclusion,
          readbook: readBeforeBook,
        },
        { new: true }
      );
      if (!data) {
        res.status(301).json({ message: "somethimg went wrong" });
      }
      return res
        .status(201)
        .json({ message: "car package successfully created", data });
    } catch (error) {
      res.status(501).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "DELETE") {
    try {
      const data = await CarPackage1.findByIdAndDelete(id1); // Use the ID directly
      if (!data) {
        return res.status(404).json({ message: "Item not found" });
      }
      return res
        .status(200)
        .json({ message: "Item deleted successfully", data });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    try {
      const data = await CarPackage1.find({ _id: id1 }).populate("id").populate({
        path: "location",
        select:"name",
        populate: {
          path: "state",
          select:"name",
          populate: {
            path: "country",
            select: "name",
          },
        },
      });
      if (!data) {
        res.status(404).json({ message: "data not found" });
      }
      res.status(200).json({ message: "data found successfully", data });
    } catch (error) {
      res.status(501).json({ message: "Internal Server Error" });
    }
  }
};

export default CarPackages;
