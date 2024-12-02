import Country from "@/models/Country";

const india=async (req,res)=>{
    
    try {
        const  state=await Country.findOne({ url: req.query.locationUrl })
        return res.status(200).json(state);
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }

}
export default india;