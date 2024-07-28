import City from "@/models/City";
import Country from "@/models/Country";
import State from "@/models/State";
import { NextApiRequest, NextApiResponse } from "next";

const locationEdit= async (req, res) => {
    try {
        if (req.method !== 'PUT') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }
        const { countryId, stateId, cityId, name } = req.body;

        let result
        switch (req.query.type) {
            case 'country':
                result = await Country.findByIdAndUpdate(countryId, { name })
                break;
            case 'state':
                result = await State.findByIdAndUpdate(stateId, { name })
                break; 
            default:
                result = await City.findByIdAndUpdate(cityId, { name })
                break;
        }
        return res.status(200).json({
            message: req.query.type + ' updated',
            result
        });

    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default locationEdit