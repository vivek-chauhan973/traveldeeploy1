import User from "@/models/User";
import connectToDatabase from "@/utils/db";
import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from "next"
import cookie from 'cookie';
connectToDatabase()

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;
        console.log("email and password is here :: ------->  ",username+" ->>>-- "+password)
        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        try {

            const user = await User.findOne({ username });
         console.log("user",await user.comparePassword(password))
            if (!user || !(await user.comparePassword(password))) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            const token = jwt.sign({ userId: user._id, username: user.username }, "secretKey", { expiresIn: '1h' });
             // Set the token as a cookie
    res.setHeader('Set-Cookie', cookie.serialize('token', token, {
        httpOnly: true,
        secure: false, // Set to true in production (with HTTPS)
        maxAge: 3600,
        sameSite: 'strict',
        path: '/',
    }));
            res.status(200).json({ message: 'User logged in successfully', token, user });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message:error.message});
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}