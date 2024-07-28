
import Car from "@/models/car-package/cars";
import { NextApiRequest, NextApiResponse } from "next";
 const CarListUpdate= async (req, res) => {


  const { method } = req;
  const { id } = req.query;

  if (method !== 'PUT') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const car = await Car.findByIdAndUpdate(id, req.body, { new: true });
    if (!car) {
      return res.status(404).json({ success: false, error: "Car not found" });
    }
    res.status(200).json({ success: true, data: car });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
export default CarListUpdate
