

import State from "@/models/State";
import { NextApiRequest, NextApiResponse } from "next";

 const packagePublicState=async (req, res) => {
    try {
        const states = await State.find()
        
        return res.status(200).json({ states });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
export default packagePublicState