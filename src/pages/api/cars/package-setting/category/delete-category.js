import CarPackageMasterCategory from "@/models/car-package/package/PackageCategory";
import connectToDatabase from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";
 const packageSettingCategoryDelete =async (req, res) => {
    await connectToDatabase()
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const { categoryId } = req.body
        const Packagecategory = await CarPackageMasterCategory.findByIdAndDelete(categoryId)
        return res.status(200).json({
            message: 'category deleted',
            Packagecategory
        }); 
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  packageSettingCategoryDelete