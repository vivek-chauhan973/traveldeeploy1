import State from "@/models/State"
import connectToDatabase from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

 const packagePublicState=async (req, res) => {
    await connectToDatabase()
    try {
        const states = await State.find().populate('country')
        
        return res.status(200).json({states });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
export default packagePublicState
