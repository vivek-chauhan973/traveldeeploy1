import PackageMasterBadge from "@/models/package/PackageBadge";
import { NextApiRequest, NextApiResponse } from "next";

 const packageSettingAdd= async (req, res) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const { badge } = req.body
        const PackageBadge = await PackageMasterBadge.create({
            badge
        })
        return res.status(201).json({
            message: 'created new badge',
            PackageBadge
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default packageSettingAdd