import Car from "@/models/car-package/cars";
import { NextApiRequest, NextApiResponse } from "next";

 const CarListAdd= async (req, res) => {
    console.log("req body -----> ",req.body);
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const { name, capacity, ac, seatingCapacity, vehicleType, category, imageUrl } = req.body;
        const newCar = new Car({ name, capacity, ac, seatingCapacity, vehicleType, category, imageUrl });
        return res.status(201).json({
            message: 'created Cancellation group',
            newCar
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  CarListAdd