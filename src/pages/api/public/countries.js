import Country from "@/models/Country"
import { NextApiRequest, NextApiResponse } from "next";

 const packagePublicCountry= async (req, res) => {
    try {
        const countries = await Country.find()
        return res.status(200).json({ countries });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
export default packagePublicCountry