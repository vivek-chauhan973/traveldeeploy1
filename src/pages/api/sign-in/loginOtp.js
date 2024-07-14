import { NextApiRequest, NextApiResponse } from "next";

 const loginOtp= async (req, res) => {
    return res.status(400).json({ message: 'Package ID is required' });
}
export default  loginOtp
