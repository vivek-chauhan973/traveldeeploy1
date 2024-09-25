
import CarPackageMasterCategory from "@/models/car-package/package/PackageCategory";
import { NextApiRequest, NextApiResponse } from "next";
 const packageSettingCategoryAdd= async (req, res) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const { category } = req.body
        const Packagecategory = await CarPackageMasterCategory.create({
            category
        })
        return res.status(201).json({
            message: 'created new category',
            Packagecategory
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default packageSettingCategoryAdd