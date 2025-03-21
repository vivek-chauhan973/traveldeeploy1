import Booking from "@/models/Booking";
import connectToDatabase from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

 const AddBooking= async (req, res) => {
    await connectToDatabase()
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        // Destructure the correct properties from req.body
        const {  adult, child, infant, singleRoom, twinRoom, tripleRoom, quardRoom  } = req.body;

        // Create the booking object
        const booking = await Booking.create(
        
        {
            adult,
            child,
            infant,
            singleRoom,
            twinRoom,
            tripleRoom,
            quardRoom,
            // Add other properties as needed
        }
        
        
        );
        
        // console.log(booking)
        return res.status(201).json({ message: 'Booking created', booking });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
};
export default  AddBooking


