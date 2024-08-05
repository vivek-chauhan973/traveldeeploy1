

import CarCity from "@/models/CarCity";
import CarCountry from "@/models/CarCountry";
import CarState from "@/models/CarState";
import { NextApiRequest, NextApiResponse } from "next";

 const CarlocationAdd= async (req, res) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const { country, state, selectedCountry, selectedState, city } = req.body;
   console.log("req body ::",req.body);
        let url
        let result 
        switch (req.query.type) {
            case 'car-country':
                url = country.replace(/[^\w\s]/gi, '-').toLowerCase().replace(/\s+/g, '-');
                result = await CarCountry.create({ name: country, url })
                break;
            case 'car-state':
                url = state.replace(/[^\w\s]/gi, '-').toLowerCase().replace(/\s+/g, '-');
                result = await CarState.create({ name: state, url, country: selectedCountry })
                break;
            default:
                url = city.replace(/[^\w\s]/gi, '-').toLowerCase().replace(/\s+/g, '-');
                result = await CarCity.create({ name: city, url, state: selectedState })
                break;
        }

        return res.status(201).json({
            message: req.query.type + ' created',
            result
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  CarlocationAdd