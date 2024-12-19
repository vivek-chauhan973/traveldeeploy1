import LocalPickupPoint from "@/models/car-package/CarLocationPricePopup/LocalPickupPoint";
import LocalPrice from "@/models/car-package/CarLocationPricePopup/LocalPrice";

const carApi = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { localLocation } = req.body;
      const data = localLocation?.trim()?.split("-");
      const resdata = await LocalPrice.create({
        localLocation,
        location: data?.[0],
        price: data?.[1],
      });
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
  } else if (req.method === "PUT") {
    const { id } = req.query;
    if (!id) {
      return res.status(300).json({ message: "id is required !!!!" });
    }
    try {
      const { localLocation } = req.body;
      const data = localLocation?.trim()?.split("-");
      const resdata = await LocalPrice.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            localLocation,
            location: data?.[0],
            price: data?.[1],
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
  else if(req.method === "DELETE"){
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ message: "ID is required!" });
    }
    try {
      const itemData = await LocalPrice.findById(id);
      if (!itemData) {
        return res
          .status(404)
          .json({ message: "No local location found." });
      }

      const pickupIds = itemData?.pickup || [];

      // Delete all associated pickup points
      if (pickupIds.length > 0) {
        await Promise.all(pickupIds.map((pickupId) => LocalPickupPoint.findByIdAndDelete(pickupId)));
      }

      // Delete the LocalPrice item
      const deletedItem = await LocalPrice.findByIdAndDelete(id);
      if (!deletedItem) {
        return res
          .status(500)
          .json({ message: "Something went wrong in deleting local location." });
      }

      return res
        .status(200)
        .json({ message: "Local location item deleted successfully." });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }
  else {
    const data = await LocalPrice.find({});
    if (data?.length === 0) {
      return res.status(400).json({ message: "no package are found" });
    }
    return res.status(200).json({ data });
  }
};

export default carApi;
