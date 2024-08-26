import { Message } from "@mui/icons-material"

const logoutApi =(req,res)=>{
try {
    res.setHeader('Set-Cookie', 'token=; Path=/; Max-Age=0; HttpOnly;');

    // Send a response back
    res.status(200).json({ message: 'Logged out successfully' });
} catch (error) {
    return res.status(500).json({Message:'internal server error'})
}
}

export default logoutApi