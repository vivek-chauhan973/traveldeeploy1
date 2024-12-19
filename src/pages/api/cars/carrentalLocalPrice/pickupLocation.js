import LocalPickupPoint from "@/models/car-package/CarLocationPricePopup/LocalPickupPoint";
import LocalPrice from "@/models/car-package/CarLocationPricePopup/LocalPrice";
const carApi = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { name, local } = req.body;
      const resdata = await LocalPickupPoint.create({
        name,
        local,
      });
      if (!resdata) {
        return res
          .status(300)
          .json({ message: "something went wrong from beckend" });
      }
      await LocalPrice.findOneAndUpdate({_id:local},{$push:{pickup:resdata?._id}})
      return res
        .status(201)
        .json({ message: "data is saved successfully", resdata });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  } else if (req.method === "PUT") {
    const { id } = req.query;
    if (!id) {
      return res.status(300).json({ message: "id is required !!!!" });
    }
    try {
      const { name, local } = req.body;

      const resdata = await LocalPickupPoint.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            name,
            local,
          },
        }
      );
      if (!resdata) {
        return res
          .status(300)
          .json({ message: "something went wrong from beckend" });
      }
      return res
        .status(201)
        .json({ message: "data is saved successfully", resdata });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  } 
  else if(req.method==="DELETE"){
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ message: "ID is required!" });
    }

    try {
      // Find the pickup point
      const resdata = await LocalPickupPoint.findOne({ _id: id });
      if (!resdata) {
        return res.status(404).json({ message: "Pickup location not found." });
      }

      // Find the associated local price data
      const localPricedata = await LocalPrice.findById(resdata?.local);
      if (!localPricedata) {
        return res.status(404).json({ message: "Price location not found." });
      }

      // Filter out the pickup location ID
      const newLocalPrice = localPricedata?.pickup?.filter(
        (item) => item.toString() !== id
      );

      // Update the local price data
      await LocalPrice.findByIdAndUpdate(localPricedata?._id, {
        $set: { pickup: newLocalPrice },
      });

      // Delete the pickup location
      const deletedData = await LocalPickupPoint.findByIdAndDelete(id);
      if (!deletedData) {
        return res.status(500).json({ message: "Failed to delete pickup location." });
      }

      return res.status(200).json({ message: "Successfully deleted pickup location." });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }
  else {
    try {
        const { id } = req.query;
        const data = await LocalPickupPoint.find({ local: id });
        if (data?.length === 0) {
          return res.status(400).json({ message: "no package are found" });
        }
        return res.status(200).json({ data });
        
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error });
    }
   
  }
};

export default carApi;
