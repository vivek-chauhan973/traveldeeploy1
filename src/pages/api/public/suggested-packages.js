import Package from "@/models/Package";



 const packagePublicSuggestedPackage= async (req, res) => {
    try {
        const { packageId} = req.query;

        // Fetch the current package details
        const currentPackage = await Package.findById(packageId).exec();


        if (!currentPackage) {
            return res.status(404).json({ message: "Package not found" });
        }

        // Fetch suggested packages based on categories or location
        const suggestedPackages = await Package.find({
            $or: [
                { category: { $in: currentPackage.category } }, // Suggested by categories
                { location: currentPackage.location } // Suggested by location
            ],
            _id: { $ne: packageId } // Exclude the current package
        })
        .limit(5)
        .exec();

        return res.status(200).json({message:"data found successfully" ,suggestedPackages });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
export default packagePublicSuggestedPackage
