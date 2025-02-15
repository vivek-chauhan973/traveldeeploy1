import CarPackage1 from "@/models/CarPackage";
 const packageGet= async (req, res) => {

    try {
        const packages = await CarPackage1.find({}).populate({path:"location"}).populate({path:"country"}).populate({path:"state"}).populate('category')  // Populate the array of category references
        .exec()
        return res.status(200).json({ packages });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
export default  packageGet