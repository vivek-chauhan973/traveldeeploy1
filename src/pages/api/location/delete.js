import City from "@/models/City";
import Country from "@/models/Country";
import State from "@/models/State";

import { NextApiRequest, NextApiResponse } from "next";

 const locationDelete= async (req, res) => {
    try {
        if (req.method !== 'PATCH') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }
        const { type, countryId, stateId,cityId } = req.query;

        let result
        switch (type) {
            case 'country':
                result = await Country.findByIdAndDelete(countryId)
                break;
            case 'state':
                result = await State.findByIdAndDelete(stateId)
                break;
            default:
                result = await City.findByIdAndDelete(cityId)
                break;
        }
        return res.status(204).json({
            message: type + ' deleted',
            result
        });

    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  locationDelete