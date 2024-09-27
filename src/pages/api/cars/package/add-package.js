
import CarPackage from "../../../../models/CarPackage";
import { NextApiRequest, NextApiResponse } from "next";

 const addPackage= async (req, res) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }
        const {priority, name, price, status, location, category,badges ,startcity,uploads, selectedState,packageRating,
            selectedCountry, highlightedPackage} = req.body;
        const images=uploads?.data?.map(item=>item?.path)
        const startcity1=startcity.split(",");
        const missingFields = [];
        if (!name) missingFields.push('name');
        if (!price) missingFields.push('price');
        // if (!status) missingFields.push('status');
        // if (!location) missingFields.push('location');
        // if (!category) missingFields.push('category');
        if (missingFields.length > 0) {
            return res.status(400).json({ message: `Missing required fields: ${missingFields.join(',')}` });
        }
        const url = name.replace(/[^\w\s]/gi, '-').toLowerCase().replace(/\s+/g, '-');
        const packageBasic = await CarPackage.create({priority, name, price, status, url, location, category,badges,startcity:startcity1,uploads:images,country:selectedCountry,state:selectedState,packageRating, highlightedPackage})
        // console.log('Package created', packageBasic)
        return res.status(201).json({ message: 'Package created', packageBasic });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default addPackage