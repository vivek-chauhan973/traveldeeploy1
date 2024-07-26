import Car from "@/models/car-package/cars";
import { NextApiRequest, NextApiResponse } from "next";

 const CarListGet= async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const cars = await Car.find({});
        res.status(200).json({ success: true, data: cars });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    case 'POST':
      try {
        const car = await Car.create(req.body);
        res.status(201).json({ success: true, data: car });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    case 'PUT':
      try {
        const { id } = req.query;
        const car = await Car.findByIdAndUpdate(id, req.body, { new: true });
        if (!car) {
          return res.status(404).json({ success: false, error: "Car not found" });
        }
        res.status(200).json({ success: true, data: car });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    case 'DELETE':
      try {
        const { id } = req.query;
        const deletedCar = await Car.findByIdAndDelete(id);
        if (!deletedCar) {
          return res.status(404).json({ success: false, error: "Car not found" });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
export default  CarListGet
