import Car from "@/models/car-package/cars";
import { NextApiRequest, NextApiResponse } from "next";

 const CarIndex= async (req, res) => {
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
    default:
      res.status(400).json({ success: false });
      break;
  }
};
export default  CarIndex