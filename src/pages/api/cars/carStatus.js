import CarStatus from "@/models/car-package/CarStatus";
const carStatus = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { isActive, preventedDays } = req.body;
      const data = await CarStatus.findOne({});
      let data1;
      if (!data) {
        data1 = await CarStatus.create({
          isActive,
          preventedDays,
        });
        if (!data1) {
          return res.status(300).json({ message: "something went wrong" });
        }
        return res
          .status(201)
          .json({ message: "Data successfully created", data1 });
      }
      data1 = await CarStatus.findOneAndUpdate(
        { _id: data?._id },
        { $set: { isActive, preventedDays } }
      );
      if (!data1) {
        return res.status(300).json({ message: "something went wrong" });
      }
      return res
        .status(201)
        .json({ message: "Data successfully created", data1 });
    } catch (error) {
      return res.status(501).json({ message: "Internal server error" });
    }

  }
  else {
    const data = await CarStatus.findOne({});
    if (!data) {
        return res.status(400).json({ message: "Data not found" }); 
    }
    return res.status(200).json({message: "Data found successfully",data}) 
  }
};

export default carStatus;
