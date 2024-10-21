import City from "@/models/City";
import Package from "@/models/Package";

const PriorityPackageList = async (req, res) => {
    try {
        const { locationId } = req.query;
        const cities = await City.find({ state: locationId }).populate('state').exec();
        const cityIds = cities.map(city => city._id);

        // Fetch and sort packages by price in descending order, limit to top 8
        let packages = await Package.find({ location: { $in: cityIds } })
            .populate('category') // Populate category details
            .sort({ priority: -1 }) // Sort by price in descending order
            .limit(8) // Limit the results to the top 8
            .exec();
        if(packages.length==0){
            packages = await Package.find({ location: locationId })
            .populate('category') // Populate category details
            .sort({ priority: -1 }) // Sort by price in descending order
            .limit(8) // Limit the results to the top 8
            .exec();
            return res.status(200).json({ packages });
        }

        return res.status(200).json({ packages, cities });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

export default PriorityPackageList;
