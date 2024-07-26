import User from "@/models/User";
import connectToDatabase from "@/utils/db";
import bcrypt from 'bcrypt';

connectToDatabase()

export default async function handler(req, res) {
    // console.log("singup req",req)
    if (req.method === 'POST') {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        try {

            const existingUser = await User.findOne({ username });

            if (existingUser) {
                return res.status(400).json({ message: 'Username already exist' })
            }
            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = new User({
                username,
                password: hashedPassword,
            });

            await newUser.save();

            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}