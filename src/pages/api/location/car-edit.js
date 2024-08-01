
import CarCity from "@/models/CarCity";
import CarCountry from "@/models/CarCountry";
import CarState from "@/models/CarState";
import { NextApiRequest, NextApiResponse } from "next";

const CarlocationEdit= async (req, res) => {
    try {
        if (req.method !== 'PUT') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }
        const { countryId, stateId, cityId, name } = req.body;

        let result
        switch (req.query.type) {
            case 'car-country':
                result = await CarCountry.findByIdAndUpdate(countryId, { name })
                break;
            case 'car-state':
                result = await CarState.findByIdAndUpdate(stateId, { name })
                break; 
            default:
                result = await CarCity.findByIdAndUpdate(cityId, { name })
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
export default CarlocationEdit