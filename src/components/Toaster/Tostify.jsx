
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RxCross1 } from "react-icons/rx";
import { useState } from 'react';


const Tostify = () => {
    //for deleted button

    // const handleDelete=()=>{

    //     toast.success("Success Notification !", {
    //         position: "top-center"
    //       });

    // }






    // for edit button
    const [hide, setHide] = useState(true)
    const modalHide = () => {
        setHide(false)
    }
    const EditBtn=()=>{
        toast.success("Edited successfully",{
            position:"top-center"
        })
    }
    return (
<>
{/* for deleted button */}
         {/* <div className="container-wrapper">
             <div>
                 <div className="fixed inset-0 flex items-center justify-center z-50">
                     <div className="absolute inset-0 bg-black opacity-50"></div>
                     <div className="bg-white p-8 rounded-[20px]  shadow-lg z-50">
                         <h2 className="text-xl font-semibold  text-center justify-center mb-3">Delete inclusion</h2>
                         <p className="text-center justify-center ">Are you sure you want to delete this item</p>
                         <div className="flex justify-center mt-4">
                             <button className="mr-5  bg-gray-500 hover:bg-gray-700 text-white font-normal py-3 px-8 rounded-[25px] ">
                                 Cancel
                             </button>
                             
                             <button  onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-normal py-3 px-8 rounded-[25px] ">
                                 Delete
                             </button>

                         </div>
                     </div>
                 </div>
             </div>
             <ToastContainer />
         </div> */}

        {/* //   for edit button */} 
      
        
      {hide && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="bg-white p-10 rounded-[20px] relative shadow-lg z-50">
                        <span className='absolute top-0 right-1 p-2' onClick={modalHide}>
                            <RxCross1 size={20} />
                        </span>
                        <p className="text-center justify-center text-md">Are you want to edit this section?</p>
                        <div className="flex justify-center mt-6">
                            
                            
                            <button  onClick={EditBtn} className="bg-red-500  hover:bg-red-700 text-white font-normal py-3 px-8 rounded-[25px]">
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        
        <ToastContainer/>
        </>
   
    )
}

export default Tostify
// onClick={handleDelete}
//  onClick={() => toggleModal(null)}
