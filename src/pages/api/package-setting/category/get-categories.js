import PackageMasterCategory from "@/models/package/PackageCategory";
import connectToDatabase from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

 const packageSettingCategoryGet= async (req, res) => {
    await connectToDatabase()
    try {
        const packageCategories = await PackageMasterCategory.find();

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