import Booking from "@/models/Booking";
import connectToDatabase from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

const Booking1= async (req, res) => {
    await connectToDatabase()
    try {

        const bookings = await Booking.find()

        return res.status(200).json({ bookings });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default Booking1