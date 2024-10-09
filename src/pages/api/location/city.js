const { default: City } = require("@/models/City")

const cityFindApi=async (req,res)=>{

    try {
        const result=await City.find({});
        if(!result){
            return res.status(404).json({message:"city is not found"})
        }
        return res.status(404).json({result})
    } catch (error) {
        return res.status(501).json({message:"Internal Server Error"})
    }
}
export default cityFindApi