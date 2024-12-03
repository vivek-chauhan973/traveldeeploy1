
import Package from "@/models/Package";

const PriorityPackageList = async (req, res) => {
    const { category } = req.query;
    const categoryArray = Array.isArray(category) ? category : [category];
    try {
        if (!category || category === "null") {
            return res.status(400).json({ message: "Category is required" });
        }
        // console.log("category ------------------23329483294------>",category)
        // const cities = await City.find({ state: locationId }).populate('state').exec();
        // const cityIds = cities.map(city => city._id);
        const packages = await Package.find({ category: { $in: category } })
            .populate('category icons') // Populate category details
            .sort({ priority: -1 }) // Sort by price in descending order // Limit the results to the top 8
            .exec();
        return res.status(200).json({ packages});
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: 'Internal Server Error 1' });
    }
}

export default PriorityPackageList;
