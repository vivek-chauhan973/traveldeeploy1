import CarPackageHighlight from "@/models/car-package/package/PackageHighlight";
import CarPackage1 from "@/models/CarPackage";
const packageInfoIds= async (req, res) => {
    const { packageId } = req.query;
    const { highlights, about } = req.body;

    try {
        const [tourPackage, packageHighlights] = await Promise.all([
            CarPackage1.findByIdAndUpdate(packageId, { about }),
            CarPackageHighlight.findOneAndUpdate({ package: packageId }, { highlights }, { upsert: true, new: true })
        ]);
        // console.log(highlights, about)
        return res.status(201).json({ packageHighlights, tourPackage });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }

}
export default packageInfoIds