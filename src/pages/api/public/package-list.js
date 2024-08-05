import City from "@/models/City";
import Package from "@/models/Package"; // Import your Category model
import { NextApiRequest, NextApiResponse } from "next";

 const packagePublicTour= async (req, res) => {
    try {
        const { locationId } = req.query;
        const cities = await City.find({ state: locationId }).populate('state').exec();
        const cityIds = cities.map(city => city._id);
        
        // Fetch packages and populate category details
        const packages = await Package.find({ location: { $in: cityIds } })
            .populate('category') // Populate category details
            .exec();

        return res.status(200).json({ packages, cities });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
export default  packagePublicTour