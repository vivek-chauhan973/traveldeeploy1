import OTPModel from "@/models/Otp";


const verifyOtpApi = async (req, res) => {
    if (req.method === 'POST') {
        const { mobile, otp } = req.body;

        try {
            const data = await OTPModel.findOne({ mobile });
            if (!data) {
                return res.status(404).json({ success: false, message: 'No OTP found for this mobile number' });
            }

            if (parseInt(otp) === data.otp) {
                const verifiedUser = await OTPModel.findOneAndUpdate(
                    { mobile },
                    { $set: { isVerified: true } },
                    { new: true }
                );

                // Return data for client-side cookie setting
                return res.status(200).json({ 
                    success: true, 
                    message: 'OTP verified successfully', 
                    verifiedUser: {
                        mobile: verifiedUser.mobile,
                        isVerified: verifiedUser.isVerified,
                    }
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
