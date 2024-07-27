import { MdOutlineAddCircle } from "react-icons/md";
import Layout from "@/components/admin/Layout";
import { AppProvider } from "@/components/admin/context/Package/AddGuest";
import { useState } from "react";


const fetchCars = () => {

  return (
    <AppProvider>
      <Layout>
        <div>
          <div>
            <p className='font-semibold text-[28px] mb-10'>New Country Add</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <div className='border p-4 rounded-md bg-white'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <label htmlFor="country">Country:</label>
                  <input className=' border ml-2 rounded-md h-8 px-2 focus:border-primary outline-none'
                  />
                </div>
                <button>
                  <MdOutlineAddCircle size={35} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </Layout>
    </AppProvider>
  )
}

export default fetchCars