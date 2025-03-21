
import Car from "@/models/car-package/cars";
import connectToDatabase from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

 const CarListGett= async (req, res) => {
    await connectToDatabase()
    try {
        const cars = await Car.find();

        return res.status(200).json({
            message: 'Cancellation find Successful',
            cars
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  CarListGett