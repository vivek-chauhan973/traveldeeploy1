import User from "@/models/User";
import connectToDatabase from "@/utils/db";
import jwt from 'jsonwebtoken';


export default async function handler(req, res) {
    await connectToDatabase()
    console.log("database is connected here as-----> ",process.env.MONGODB_URI)
    if (req.method === 'POST') {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        try {

            const user = await User.findOne({ username });
            if (!user || !(await user.comparePassword(password))) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            const token = jwt.sign({ userId: user._id, username: user.username }, "secretKey", { expiresIn: '1h' });
             // Set the token as a cookie
             res.setHeader('Set-Cookie', `token=${token}; Path=/; HttpOnly;`);
            return res.status(200).json({ message: 'User logged in successfully', token, user });
        } catch (error) {
            console.error(error);
           return  res.status(500).json({ message: 'Internal server error' ,error});
        }
    } else {
        return res.status(405).json({ message: 'Method not allowed' });
    }
}