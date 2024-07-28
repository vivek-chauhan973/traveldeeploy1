import React from 'react'
import Image from 'next/image'

const BlogTable = () => {
  return (
    <div className='m-2 '>
      <div className='flex justify-between gap-3 items-center bg-white rounded p-2'>
        <div className='rounded'>
          <Image className=' w-20 overflow-hidden rounded ' src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="1920"   height="1280" alt="" />
        </div>
        <div className='max-w-96'>
          <p className='text-md font-semibold'>Lorem ipsum dolor sit amet.</p>
          <div className='line-clamp-1'>
            <p className='text-light text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus quam at nostrum!</p>
          </div>
        </div>
        <div className='flex justify-start  flex-col'>
          <span className='text-xs'>12 jan 2024 </span>
          <span className='text-xs'>1:10 pm</span>
        </div>
      </div>
    </div>
  )
}

export default BlogTable