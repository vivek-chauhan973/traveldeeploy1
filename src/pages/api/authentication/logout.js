import OTPModel from '@/models/Otp';
import connectToDatabase from '@/utils/db';
import cookies from 'next-cookies';
import jwt from 'jsonwebtoken';
const verifyOtpApi = async (req, res) => {
    await connectToDatabase();
    if (req.method === 'POST') {
        const allCookies = cookies({ req });
        const token = allCookies?.token;
        try {
            const decoded = jwt.verify(token, process.env.Secret_key);
            const {user}=decoded;
            const data=await OTPModel.findById(user?._id);
            data.otp=undefined
            data.isVerified=undefined
            data.token=undefined
            await data.save()
            return res.status(200).json({ success: true, message: 'User logout successfully' });
        } catch (error) {
            console.error('Error verifying OTP:', error);
            return res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ success: false, message: `Method ${req.method} Not Allowed` });
    }
};

export default verifyOtpApi;
