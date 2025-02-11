import connectToDatabase from "@/utils/db";
import jwt from 'jsonwebtoken';
import Cookies from "js-cookie";
import OTPModel from "@/models/Otp";
const verifyOtpApi = async (req, res) => {
    await connectToDatabase();
    if (req.method === 'POST') {
        const { mobile, otp } = req.body;
        try {
            const data = await OTPModel.findOne({ mobile });
            if (!data) {
                return res.status(404).json({ success: false, message: 'No OTP found for this mobile number' });
            }
            const token=jwt.sign({user:data?._id},process.env.Secret_key);
            if (parseInt(otp) === data.otp) {
                const verifiedUser = await OTPModel.findOneAndUpdate(
                    { _id:data?._id},
                    { $set: { isVerified: true ,token:token} },
                    {new:true}
                );
                Cookies.set("token", token, { expires: 1 });
                // console.log("user data of mobile is here -----> ",verifiedUser);
                // console.log("user data of mobile is here -----> ",token);
                return res.status(200).json({ 
                    success: true, 
                    message: 'OTP verified successfully', 
                    data:verifiedUser
                });
            }

            return res.status(400).json({ success: false, message: 'OTP does not match' });
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
