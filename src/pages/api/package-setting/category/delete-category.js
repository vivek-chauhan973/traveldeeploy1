import PackageMasterCategory from "@/models/package/PackageCategory";
import { NextApiRequest, NextApiResponse } from "next";
 const packageSettingCategoryDelete =async (req, res) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const { categoryId } = req.body
        const Packagecategory = await PackageMasterCategory.findByIdAndDelete(categoryId)
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