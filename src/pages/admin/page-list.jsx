import React, { useEffect, useState } from "react";
import Layout from "@/components/admin/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube, faArrowRightLong, faMagnifyingGlass, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const getAllPost=async ()=>{
  return await((await fetch('/api/static-page')).json())
} 
const Pagelist = () => {
  const [currentItems,setCurrentItems]=useState([])

  useEffect(()=>{
    getAllPost().then(res=>setCurrentItems(res?.data||[]))
  },[])

  const deleteItem=async (id)=>{
     const res=await fetch(`/api/static-page?id=${id}`,{method:"DELETE"});
     if(res?.ok){
      getAllPost().then(res=>setCurrentItems(res?.data||[]))
      alert("item deleted successfully");
     }
     else{
      alert("something went wrong from front end side");
     }
  }
  return (

        <Layout>
        <div>
        </div>
        <div className="w-30 overflow-auto">
          <div className="p-4 min-w-[768px] overflow-x-auto">
            <div className="flex justify-between items-center pb-5">
              <div className="flex items-center gap-5 text-primary pb-3">
                <FontAwesomeIcon icon={faCube} className="text-2xl" />
                <p className="text-[24px] text-black">All Post</p>
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  className=" text-teal-700 text-xl"
                />
              </div>
            </div>
            <table className="bg-[#FFFBF5] shadow-md table-auto w-full border-collapse border rounded-lg outline outline-[0.5px] overflow-hidden p-10 ">
              <thead>
                <tr className="border rounded">
                  
                  <th className="py-2 bg-slate-600 text-white border text-[15px] px-2">
                   Page Name
                  </th>
                
                  <th className="py-2 bg-slate-600 text-white border text-[15px] px-2">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems?.map((itinerary) => (
                  <tr className="border-b" key={itinerary?._id}>
                    <td className="py-4 pl-4 text-center border-x capitalize">
                      {itinerary?.name}
                    </td>
                    <td className="py-4 flex justify-center items-center gap-3">
                      <button onClick={() => deleteItem(itinerary?._id)}>
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="font1 hover:text-primary cursor-pointer"
                        
                      />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>

  )
}

export default Pagelist