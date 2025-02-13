
import Layout from '@/components/admin/Layout'
import React from 'react'
import Image from 'next/image'

const index = () => {
  return (

    <Layout>
      <div>
        <h1 className="text-xl font-bold mb-4">Setting</h1>
      </div>
      <div className='md:flex gap-5 justify-between'>
        <div className='w-96 bg-slate-50 p-4 pt-5 rounded shadow'>
          <div className='flex flex-col'>
            <div className='m-auto'>
              <div className='bg-slate-100 w-[300px] h-[260px] rounded mb-2 overflow-hidden'>
                <Image src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
              <input type="file" className="block w-full text-sm text-slate-500
                file:mr-4 file:py-1 file:px-2
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100
              "/>
            </div>
          </div>
          <div className=' mt-3'>
            <div className='m-auto gap-5  '>
              <div>
                <label className='font-semibold text-black/70 text-para' htmlFor="">First Name</label>
                <input type="text" className='  border w-full  rounded-md h-8 px-2 focus:border-black/55 outline-none text-para' />
              </div>
              <div>
                <label className='font-semibold text-black/70 text-para' htmlFor="">Last Name </label>
                <input type="text" className='  border w-full  rounded-md h-8 px-2 focus:border-black/55 outline-none text-para' />
              </div>
            </div>
            <button className='text-white bg-black  w-full rounded-full py-1  text-light mt-2'>Add</button>
          </div>
        </div>
        {/* right side */}
        <div className='grow rounded '>
          <div className='bg-white p-4 rounded'>
            <div className='border-b mb-4'>
              <p className='font-semobold'>Basic Setting</p>
            </div>
            <div className='flex items-center gap-2 mb-2'>
              <label className=' text-black/70 text-para w-56' htmlFor="">Site Title</label>
              <input type="text" className='  border w-full grow  rounded-md h-7 px-2 focus:border-black/55 outline-none text-para' />
            </div>
            <div className='flex items-center gap-2 mb-2'>
              <label className=' text-black/70 text-para w-56' htmlFor="">Tagline</label>
              <input type="text" className='  border w-full grow  rounded-md h-7 px-2 focus:border-black/55 outline-none text-para' />
            </div>
            <div className='flex items-center gap-2 mb-2'>
              <label className=' text-black/70 text-para w-56' htmlFor="">Permalink Structure</label>
              <input type="text" className='  border w-full grow  rounded-md h-7 px-2 focus:border-black/55 outline-none text-para' />
            </div>
            <div className='flex  gap-2 mb-2'>
              <label className=' text-black/70 text-para  w-40' htmlFor="">Site Icon</label>
              <div className='flex justify-center items-center gap-5'>
                <div className='bg-slate-600 w-28 h-20 rounded overflow-hidden'></div>
                <input type="file" className="block w-full text-sm text-slate-500
                file:mr-4 file:py-1 file:px-2
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100
                "/>
              </div>
            </div>
            <div className='flex items-center gap-2 mb-2'>
              <label className=' text-black/70 text-para w-56' htmlFor=""></label>
              <button type="button" className='  border w-full grow  rounded-md h-7  bg-black/90 text-white text-sm' >Save Changes</button>
            </div>

          </div>
          <div className='w-full h-52 bg-white mt-5 rounded p-4 '>
            <div className='border-b mb-4'>
              <p className='font-semobold'>Account Setting</p>
            </div>
            <div className='flex items-center gap-2 mb-2'>
              <label className=' text-black/70 text-para w-56' htmlFor="">Username</label>
              <input type="text" className='  border w-full grow  rounded-md h-7 px-2 focus:border-black/55 outline-none text-para' />
            </div>
            <div className='flex items-center gap-2 mb-2'>
              <label className=' text-black/70 text-para w-56' htmlFor="">Password</label>
              <input type="text" className='  border w-full grow  rounded-md h-7 px-2 focus:border-black/55 outline-none text-para' />
            </div>
            <div className='flex items-center gap-2 mb-2'>
              <label className=' text-black/70 text-para w-40' htmlFor=""></label>
              <div  className=' text-sm self-start' >
                <span>Forget Password?</span>
              </div>
            </div>
            <div className='flex items-center gap-2 mb-2'>
              <label className=' text-black/70 text-para w-56' htmlFor=""></label>
              <button type="button" className='  border w-full grow  rounded-md h-7  bg-black/90 text-white text-sm' >Save Changes</button>
            </div>

          </div>
        </div>
      </div>
      <div className='mt-5'>
        <hr className='border border-slate-400' />
      </div>
      <div>

      </div>
    </Layout>

  )
}

export default index