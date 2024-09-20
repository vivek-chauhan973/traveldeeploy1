import Package from "@/models/Package";
import SelectedIcon from "@/models/selectedIcon/SelectedIcon";

const selectedIconApi=async (req,res)=>{

    const {iconId}=req.query;
    
    try {

        const data=await SelectedIcon.findOne({package:iconId});
        // console.log("req.body ",req.body)
        if(!data){
            const data1=await SelectedIcon.create({iconData:req.body,package:iconId});
           
            if(!data1){
                return res.status(301).json({message:"Something went wrong"});
            }
            await Package.findByIdAndUpdate({_id:iconId},{$set:{icons:data1?._id}});
            return res.status(201).json({message:"data is successfully created",data1});
        }

        const data2=await SelectedIcon.findOneAndReplace({package:iconId},{iconData:req.body,package:iconId});
        if(!data2){
            return res.status(301).json({message:"Something went wrong"});
        }
        await Package.findByIdAndUpdate({_id:iconId},{$set:{icons:data2?._id}});
        return res.status(201).json({message:"data is successfully created",data2});
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error"});
    }

}

export default selectedIconApi;