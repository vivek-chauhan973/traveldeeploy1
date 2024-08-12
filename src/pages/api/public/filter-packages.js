// Import necessary modules and models
import Package from "@/models/Package";
import City from "@/models/City";
import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

// Export default API endpoint handler function
const packagePublicFilter = async (req, res) => {
    try {
        const { locationId, priceMin, priceMax, cityId, categoryId,minDay,maxDay } = req.query;
        const isValidObjectId = mongoose.Types.ObjectId.isValid;
        if (cityId && !isValidObjectId(cityId)) {
            return res.status(400).json({ message: 'Invalid cityId' });
        }
        const query = [];

        if (priceMin || priceMax) {
            const priceQuery = {};
            if (priceMin) priceQuery.$gte = Number(priceMin);
            if (priceMax) priceQuery.$lte = Number(priceMax);
            query.push({ price: priceQuery });
        }
        
        if (minDay !== undefined || maxDay !== undefined) {
            const daysQuery = {};
            if (minDay !== undefined) daysQuery.$gte = Number(minDay);
            if (maxDay !== undefined) daysQuery.$lte = Number(maxDay);
            query.push({ days: daysQuery });
        }
        
        if (cityId) {
            query.push({ location: cityId });
        }
        
        if (categoryId) {
            query.push({ category: categoryId });
        }
        // Fetch cities based on locationId
        const cities = await City.find({ state: locationId }).populate('state').exec();
        const cityIds = cities.map(city => city._id);
        const packages = await Package.find({ $and: query })
            .populate('location')
            .populate('category')
            .exec();
// Return JSON response with packages and cities
        return res.status(200).json({ packages, cities });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message:error.message });
    }
};

export default packagePublicFilter;


// get api check in post man
// http://localhost:3000/api/public/filter-packages?locationId=66843f717e4a028ea1787cc2&categoryId=66754fe1e2b4f2ac1aaf1e12&priceMin=1000&priceMax=5000
