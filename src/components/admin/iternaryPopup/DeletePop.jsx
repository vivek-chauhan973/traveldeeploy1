import React, { useState } from 'react'

const DeletePop = ({index,handleRemoveHighlight,setDeletePopup}) => {
   
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="bg-white p-8 rounded-[20px]  shadow-lg z-50">
        <h2 className="text-xl font-semibold  text-center justify-center mb-3">Delete inclusion</h2>
        <p className="text-center justify-center ">Are you sure you want to delete this item</p>
        <div className="flex justify-center mt-4">
            {/* <button onClick={() => toggleModal(null)} className="mr-5 bg-gray-500 hover:bg-gray-700 text-white font-normal py-3 px-8 rounded-[25px] ">
                Cancel
            </button> */}
             <button onClick={()=>{setDeletePopup(false)} } className=" bg-slate-200 hover:bg-red-700 text-white font-normal py-3 px-8 rounded-[25px] mx-2 ">
                Cancel
            </button>
            <button onClick={()=>{handleRemoveHighlight(index);setDeletePopup(false)} } className="bg-red-500 hover:bg-red-700 text-white font-normal py-3 px-8 rounded-[25px] ">
                Delete
            </button>
           
        </div>
    </div>
</div>
  )
}

export default DeletePop