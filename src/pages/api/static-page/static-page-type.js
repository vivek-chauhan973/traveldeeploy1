import StaticPage from "@/models/Static/Static";
import connectToDatabase from "@/utils/db";


const staticPageApi=async (req,res)=>{
    await connectToDatabase()
    const {name}=req.query;
// console.log("item data is here are as------> ",name)
        try {

            const data=await StaticPage.findOne({name})
            if(!data){
                return res.status(300).json({message:"Something went wrong"})
            }
            return res.status(200).json({message:"Data is created successfully",data})

        } catch (error) {
            return res.status(501).json({message:"Internal Server Error"})
        }
   
}

export default staticPageApi