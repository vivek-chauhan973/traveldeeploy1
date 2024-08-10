const tableDataApi=async (req,res)=>{

    const {table}=req.query;
    const {tableData,tableColumn}=req.body;
    return res.status(200).json({message:"ok"});
    }
    
    export default tableDataApi;