import CarPackage1 from "@/models/CarPackage";
import CarSelectedIcon from "@/models/selectedIcon/CarSelectedIcon";


const selectedIconApi=async (req,res)=>{

    const {iconId}=req.query;
    
    try {

        const data=await CarSelectedIcon.findOne({package:iconId});
        // console.log("req.body ",req.body)
        if(!data){
            const data1=await CarSelectedIcon.create({iconData:req.body,package:iconId});
           
            if(!data1){
                return res.status(301).json({message:"Something went wrong"});
            }
            await CarPackage1.findByIdAndUpdate({_id:iconId},{$set:{icons:data1?._id}});
            return res.status(201).json({message:"data is successfully created",data1});
        }

        const data2=await CarSelectedIcon.findOneAndReplace({package:iconId},{iconData:req.body,package:iconId});
        if(!data2){
            return res.status(301).json({message:"Something went wrong"});
        }
        await CarPackage1.findByIdAndUpdate({_id:iconId},{$set:{icons:data2?._id}});
        return res.status(201).json({message:"data is successfully created",data2});
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error"});
    }

}

export default selectedIconApi;