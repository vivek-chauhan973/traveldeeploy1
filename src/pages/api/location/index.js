import City from "@/models/City";
import Country from "@/models/Country";
import State from "@/models/State"
import { middleware } from "@/middleware";
import { NextApiRequest, NextApiResponse } from "next";

 const locationIndex= async (req, res) => {
    try {
        
        let result
        switch (req.query.type) {
            case 'country':
                result = await Country.find()
                break;
            case 'state':
                if (req.query.countryId) {
                    result = await State.find({ country: req.query.countryId })
                }
                break;
            default:
                if (req.query.stateId) {
                    result = await City.find({ state: req.query.stateId })
                }
                break;
        }
        return res.status(200).json({ result, message: 'Location found successfully' });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
export default locationIndex