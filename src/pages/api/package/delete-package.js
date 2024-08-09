import Package from "@/models/Package";
import { NextApiRequest, NextApiResponse } from "next";

const deletePackage= async (req, res) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }
        
        const { packageList_id } = req.body;  // Extract packageId from the request body

        if (!packageList_id) {
            return res.status(400).json({ message: 'Package ID is required' });
        }

        
        
        // Use findByIdAndDelete with the correct ID
        const result = await Package.findByIdAndDelete(packageList_id);

        if (!result) {
            return res.status(404).json({ message: 'Package not found' });
        }

        return res.status(200).json({ message: 'Package deleted' });
    } catch (error) {
           return res.status(500).json({ message: error.message });
    }
}
export default deletePackage
