import twilio from 'twilio';
import otpGenerator from 'otp-generator';
import OTPModel from '@/models/Otp';
import connectToDatabase from '@/utils/db';
const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Twilio Account SID
const authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Twilio Auth Token
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const client = twilio(accountSid, authToken);
const sendOptApi=async (req,res)=>{

  await connectToDatabase();

    if (req.method === 'POST') {
        const { mobile } = req.body;

        // Generate a 6-digit OTP
        const otp=otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false,lowerCaseAlphabets:false });
       
        try {
        //   Send OTP via SMS
        await OTPModel.findOneAndUpdate({mobile},{$set:{mobile,otp}},{upsert:true,new:true})
          await client.messages.create({
            body: `Your OTP is ${otp}`,
            from: twilioPhoneNumber,
            to: mobile,
          });
         
          res.status(200).json({ message: 'OTP sent successfully', otp });
        } catch (error) {
          console.error('Error sending OTP:', error);
          res.status(500).json({ message: 'Error sending OTP' ,error});
        }
      } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
      }

}

export default sendOptApi;