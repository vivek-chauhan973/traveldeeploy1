
import Car from "@/models/car-package/cars";
import { NextApiRequest, NextApiResponse } from "next";

 const CarListDelete=async (req, res) => {


  const { method } = req;
  const { id } = req.query;

  if (method !== 'DELETE') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try { 
    const deletedCar = await Car.findByIdAndDelete(id);
    if (!deletedCar) {
      return res.status(404).json({ success: false, error: "Car not found" });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
export default  CarListDelete