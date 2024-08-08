import React from 'react'

const SpacialityTour = () => {
  return (
    <div className=" flex ml-52 flex-col min-w-[700px] h-full bg-gray-100 rounded-md mt-4" >
      <div className='ml-5  mt-4 h-32 object-contain'>
        <h4 className=' font-semibold w-full text-lg'>POPULAR & AVAILABLE TOURS</h4>
        <div className=" grid grid-cols-3 grid-rows-3 ">
          <div>
            <p>Chandratal</p>
            <p>Dalhouse</p>
            <p>Kaza</p>
          </div>
          <div>
            <p>Chandratal</p>
            <p>Dalhouse</p>
            <p>Kaza</p>
          </div>
          <div>
            <p>Chandratal</p>
            <p>Dalhouse</p>
            <p>Kaza</p>
          </div>
        </div>
      </div>
      <div className='ml-5  h-[150px]  object-contain'>
        <h4 className=' font-semibold w-full text-lg '>UPCOMING TOURS</h4>
        <div className=" grid grid-cols-3 grid-rows-3  " >
          <div>
            <p>Chandratal</p>
            <p>Dalhouse</p>
            <p>Kaza</p>

          </div>
          <div>
            <p>Chandratal</p>
            <p>Dalhouse</p>
            <p>Kaza</p>
          </div>
          <div>
            <p>Chandratal</p>
            <p>Dalhouse</p>
            <p>Kaza</p>

          </div>
        </div>
      </div>
    </div>

  )
}

export default SpacialityTour