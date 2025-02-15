import CarPackage1 from "@/models/CarPackage";

const deletePackage= async (req, res) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }
        
        const { packageList_id } = req.body;  // Extract packageId from the request body

        if (!packageList_id) {
            return res.status(400).json({ message: 'Package ID is required' });
        }

        console.log("Deleting package with ID: ", packageList_id);
        
        // Use findByIdAndDelete with the correct ID
        const result = await CarPackage1.findByIdAndDelete(packageList_id);

        if (!result) {
            return res.status(404).json({ message: 'Package not found' });
        }

        return res.status(200).json({ message: 'Package deleted' });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default deletePackage
