import OTPModel from '@/models/Otp';
import DBConnection from '@/utils/dbConfig';

const verifyOtpApi = async (req, res) => {
    await DBConnection();

    if (req.method === 'POST') {
      const {mobile}=req.body;
        try {
            const data = await OTPModel.findOneAndDelete({ mobile});
            if (!data) {
                return res.status(404).json({ success: false, message: 'No OTP found for this mobile number' });
            }
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
