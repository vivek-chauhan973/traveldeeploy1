import City from "@/models/City";
import Country from "@/models/Country";
import State from "@/models/State"

import { NextApiRequest, NextApiResponse } from "next";

 const locationAdd= async (req, res) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const { country, state, selectedCountry, selectedState, city } = req.body;

        let url
        let result 
        switch (req.query.type) {
            case 'country':
                url = country.replace(/[^\w\s]/gi, '-').toLowerCase().replace(/\s+/g, '-');
                result = await Country.create({ name: country, url })
                break;
            case 'state':
                url = state.replace(/[^\w\s]/gi, '-').toLowerCase().replace(/\s+/g, '-');
                result = await State.create({ name: state, url, country: selectedCountry })
                break;
            default:
                url = city.replace(/[^\w\s]/gi, '-').toLowerCase().replace(/\s+/g, '-');
                result = await City.create({ name: city, url, state: selectedState })
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
export default  locationAdd