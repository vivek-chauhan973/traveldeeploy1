import CarPackageMasterCategory from "@/models/car-package/package/PackageCategory";
import { NextApiRequest, NextApiResponse } from "next";

 const packageSettingCategoryGet= async (req, res) => {
    try {
        const packageCategories = await CarPackageMasterCategory.find({});

        return res.status(200).json({
            message: 'Categories found successfully',
            data: packageCategories
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  packageSettingCategoryGet