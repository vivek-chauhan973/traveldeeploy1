import Category from '@/components/admin/blog/Category'
import { AppProvider } from '@/components/admin/context/Package/AddGuest';
import Layout from '@/components/admin/Layout';
import React from 'react'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { LuPackagePlus } from 'react-icons/lu'
const category = () => {
  return (
    <>
      <AppProvider>
        <Layout>
          <div>
            <div className="flex items-center gap-5 text-primary pb-3">
              <LuPackagePlus size={28} className="font-semibold" />
              <p className="text-[24px] text-black">Blog Master</p>
              <HiOutlineArrowNarrowRight size={28} className=" text-teal-700" />
            </div>
          </div>
        </Layout>
      </AppProvider>
    </>
  )
}

export default category