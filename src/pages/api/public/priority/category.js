import City from "@/models/City";
import Package from "@/models/Package";

const PriorityPackageList = async (req, res) => {
    try {
        const {id}=req.query;

        // Fetch and sort packages by price in descending order, limit to top 8
        const packages = await Package.find({category:{$in:id}})
            .populate('category') // Populate category details
            .sort({ priority: -1 }) // Sort by price in descending order
            .limit(8) // Limit the results to the top 8
            .exec();

        return res.status(200).json({ packages });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

export default PriorityPackageList;
