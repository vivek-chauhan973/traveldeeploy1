import CarPackage1 from "@/models/CarPackage";


const CarPackages = async (req, res) => {
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
  //    console.log("req.body kndkndjfksvfd;;;",req.body)
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
      const data = await CarPackage1.create({
        id: packageId,
        location: location,
        title: title,
        carprice: parseFloat(price),
        description: description,
        map: mapCode,
        inclusion: inclusion, // This should be an array of strings
        exclusion: exclusion, // This should be an array of strings
        readbook: readBeforeBook, // This should be an array of strings
      });
      if (!data) {
        return res.status(301).json({ message: "something went wrong" });
      }
      return res
        .status(201)
        .json({ message: "package created successfully", data });
    } catch (error) {
      return res.status(501).json({ message:error.message });
    }
  } else {
    try {
      const data = await CarPackage1.find({}).populate("id");
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
