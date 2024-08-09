import FlightBookingSchema from "@/models/package/FlightBooking";
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req, res) {
    const { packageId } = req.query;
    if (!packageId) {
        return res.status(400).json({ message: 'Package ID is required' });
    }

    switch (req.method) {
        case 'POST':
            return createOrUpdateFlightBookings(req, res, packageId);
        case 'GET':
            return getFlightBookings(req, res, packageId);
        default:
            res.setHeader('Allow', ['POST', 'GET']);
            return res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
}

async function createOrUpdateFlightBookings(req, res, packageId) {
    try {
        const { flights,flightNo,selectedImg } = req.body;

        if (!Array.isArray(flights) || flights.length === 0) {
            return res.status(400).json({ message: 'Flights information is required' });
        }

        const booking = await FlightBookingSchema.findOneAndUpdate(
            { package: packageId },
            { flights ,flightNo:flightNo,selectedImage:selectedImg},
            { upsert: true, new: true }
        );
        return res.status(201).json({ booking });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}

async function getFlightBookings(req, res, packageId) {
    try {
        const booking = await FlightBookingSchema.findOne({ package: packageId }).populate('package');
           
        if (!booking) {
            return res.status(404).json({ message: 'Flight bookings not found for this package' });
        }

        return res.status(200).json({ booking });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
