import Booking from "@/models/Booking"
import connectToDatabase from "@/utils/db";

 const Index= async (req, res) => {
    await connectToDatabase()
    try {
        const bookings = await Booking.find()
        return res.status(200).json({ bookings });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
export default  Index