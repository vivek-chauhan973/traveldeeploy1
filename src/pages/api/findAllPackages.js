import City from "@/models/City";
import Package from "@/models/Package";
 // Import your Category model
import SelectedIcon from "@/models/selectedIcon/SelectedIcon";
import { NextApiRequest, NextApiResponse } from "next";

 const packagePublicTour= async (req, res) => {
    try {
        // Fetch packages and populate category details
        let packages = await Package.find({})
            .populate('category').populate("icons") // Populate category details
            .exec();
        return res.status(200).json({ packages });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
export default  packagePublicTour
 
