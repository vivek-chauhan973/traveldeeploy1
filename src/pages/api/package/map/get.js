import PackageMap from "@/models/package/PackageMap";
import connectToDatabase from "@/utils/db";
 const packageMapGet= async (req, res) => {
    await connectToDatabase()
    try {
        const PackageGet = await PackageMap.find({});

        return res.status(200).json({
            message: 'Package SEO find Successful',
            PackageGet
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default packageMapGet