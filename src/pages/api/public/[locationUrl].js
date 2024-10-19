import City from "@/models/City";
import Country from "@/models/Country";
import State from "@/models/State"
import { NextApiRequest, NextApiResponse } from "next";

 const packagePublicUrl= async (req, res) => {
    try {
        let state = await State.findOne({ url: req.query.locationUrl })
        if(!state){
            state=await City.findOne({ url: req.query.locationUrl })
            return res.status(200).json(state);
        }
        return res.status(200).json(state);
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
export default  packagePublicUrl