import Layout from "@/components/admin/Layout"
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import { AppProvider } from "@/components/admin/context/Package/AddGuest";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube, faArrowRightLong, faEdit, faCirclePlus, faTrash, faCancel, faSave, faXmark } from "@fortawesome/free-solid-svg-icons";
import BlogSeo from "@/components/admin/blog/BlogSeo";

export default function BlogMaster() {

  return (
    <>
      <AppProvider>
        <Layout>
          <div>
            <div className="flex items-center gap-5 text-primary py-5">
              <FontAwesomeIcon icon={faCube} className="text-2xl" />
              <p className="md:text-[28px] text-xl text-black">Blog Master</p>
              <FontAwesomeIcon
                icon={faArrowRightLong}
                className=" text-teal-700 text-xl"
              />
            </div>
            <div className=" grid grid-cols-1 xl:grid-cols-2 gap-5 rounded">
              <BlogSeo/> 
            </div>
          </div>
        </Layout>
      </AppProvider >
    </>
  )
}