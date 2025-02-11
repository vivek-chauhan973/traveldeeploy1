import jwt from 'jsonwebtoken';
import OTPModel from '@/models/Otp';
import connectToDatabase from '@/utils/db';
const getUserApi=async (req,res)=>{

  await connectToDatabase();
  const {token}=req.query;
  const {user}=jwt.verify(token,process.env.Secret_key)
        try {
       const data= await OTPModel.findOne({_id:user})
         if(!data){
           return res.status(200).json({ message: 'user not found'}); 
         }
         return  res.status(200).json({ message: 'user not found', data });
        } catch (error) {
          console.error('Error sending OTP:', error);
          res.status(500).json({ message: 'Error sending OTP' ,error});
        }
}

export default getUserApi;