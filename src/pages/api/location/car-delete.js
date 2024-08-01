

import CarCity from "@/models/CarCity";
import CarCountry from "@/models/CarCountry";
import CarState from "@/models/CarState";
import { NextApiRequest, NextApiResponse } from "next";

 const  CarlocationDelete= async (req, res) => {
    try {
        if (req.method !== 'PATCH') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }
        const { type, countryId, stateId,cityId } = req.query;

        let result
        switch (type) {
            case 'car-country':
                result = await CarCountry.findByIdAndDelete(countryId)
                break;
            case 'car-state':
                result = await CarState.findByIdAndDelete(stateId)
                break;
            default:
                result = await CarCity.findByIdAndDelete(cityId)
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
export default  CarlocationDelete