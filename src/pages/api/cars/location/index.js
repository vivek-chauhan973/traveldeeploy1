const { default: City } = require("@/models/City")

const cityFindApi=async (req,res)=>{
     const {city}=req.query;
    try {
        const result=await City.find({url:city});
        if(!result){
            return res.status(404).json({message:"city is not found"})
        }
        return res.status(404).json({result})
    } catch (error) {
        return res.status(501).json({message:"Internal Server Error"})
    }
}
export default cityFindApi