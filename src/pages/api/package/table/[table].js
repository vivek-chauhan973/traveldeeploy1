import Package from "@/models/Package";
import connectToDatabase from "@/utils/db";

const tableDataApi=async (req,res)=>{
    await connectToDatabase()
    const {table}=req.query;
    const {tableData,tableColumn}=req.body;
    
    if(!table){
        return res.status(301).json({message:"Id is required !!!"});
    }
    try {

        const response=await Package.findByIdAndUpdate({_id:table},{$set:{tableData,tableColumn}},{new:true,upsert:true});

        if(!response){
          return res.status(404).json({message:"data not round "});
        }

        return res.status(200).json({message:"data updated is successfully",response});
        
    } catch (error) {
        
        return res.status(500).json({message:error.message});

    } 
    }
    
    export default tableDataApi;