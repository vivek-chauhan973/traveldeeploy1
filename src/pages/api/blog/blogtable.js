import BlogDetail from "@/models/blog/BlogDetail";
import BlogTable from "@/models/blog/Table";

const blogTableApi=async (req,res)=>{
    // console.log("table data is here -----> ",req?.body);
    const {blog,rows,columns}=req.body;
    try {
        const data=await BlogTable.findOne({blog});
        let data1;
        if(!data){
           data1=await BlogTable.create({blog,tableData:rows,tableColumn:columns});
           if(!data1){
            return res.status(301).json({message:"something went wrong"})
           }
           await BlogDetail.findByIdAndUpdate({_id:blog},{$set:{table:data1?._id}});
           return  res.status(201).json({message:"data is created",data1})
        }
        data1=await BlogTable.findOneAndUpdate({blog},{$set:{
            tableData:rows,
            tableColumn:columns,
            blog
        }});
        if(!data1){
            return res.status(301).json({message:"something went wrong"})
           }
           await BlogDetail.findByIdAndUpdate({_id:blog},{$set:{table:data1?._id}});
           return  res.status(201).json({message:"data is created",data1})
        
    } catch (error) {
        return res.status(501).json({message:"Internal Server Error"})
    }
    return res.status(201).json({message:"data is updated"})

}
export default blogTableApi;