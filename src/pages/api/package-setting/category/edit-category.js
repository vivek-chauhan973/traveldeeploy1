import PackageMasterCategory from "@/models/package/PackageCategory";
import { NextApiRequest, NextApiResponse } from "next";
 const packageSettingCategoryEdit =async (req, res) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const { category, category_id } = req.body
        const Packagecategory = await PackageMasterCategory.findByIdAndUpdate(category_id, {
            category
        })
        return res.status(200).json({
            message: 'category updated',
            Packagecategory
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  packageSettingCategoryEdit