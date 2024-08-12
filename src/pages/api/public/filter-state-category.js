import City from "@/models/City";
import Package from "@/models/Package"; // Import your Package model
import { NextApiRequest, NextApiResponse } from "next";

const filterStateCategory = async (req, res) => {
    try {
        const { locationId, categoryId } = req.query;

        if (!locationId) {
            return res.status(400).json({ message: 'Location ID is required' });
        }

        // Fetch cities based on the state (locationId)
        const cities = await City.find({ state: locationId }).populate('state').exec();

        if (!cities.length) {
            return res.status(404).json({ message: 'No cities found for the given state' });
        }

        const cityIds = cities.map(city => city._id);

        // Build the query for packages
        const packageQuery = { location: { $in: cityIds } };

        // Add category filter if categoryId is provided
        if (categoryId) {
            packageQuery.category = categoryId;
        }

        // Fetch packages based on the location and category filters
        const packages = await Package.find(packageQuery)
            .populate('category') // Populate category details
            .exec();

        return res.status(200).json({ packages, cities });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

export default filterStateCategory;
