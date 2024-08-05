
import CarCity from "@/models/CarCity";
import CarCountry from "@/models/CarCountry";
import CarState from "@/models/CarState";
import { middleware } from "@/utils/middleware";
import { NextApiRequest, NextApiResponse } from "next";

 const CarlocationIndex= async (req, res) => {
    try {
        // middleware(req);
        let result
        switch (req.query.type) {
            case 'car-country':
                result = await CarCountry.find()
                break;
            case 'car-state':
                if (req.query.countryId) {
                    result = await CarState.find({ country: req.query.countryId })
                }
                break;
            default:
                if (req.query.stateId) {
                    result = await CarCity.find({ state: req.query.stateId })
                }
                break;
        }
        return res.status(200).json({ result, message: 'Location found successfully' });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
export default CarlocationIndex