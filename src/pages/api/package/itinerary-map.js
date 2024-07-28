import { NextApiRequest, NextApiResponse } from "next";

 const packageMap= async (req, res) => {

    const { itineraryMap } = req.body;

    return res.status(400).json({ message: 'Package ID is required' });
}
export default  packageMap