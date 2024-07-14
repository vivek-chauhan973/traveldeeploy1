import React from 'react'
import { GiWorld } from "react-icons/gi";
import { BsHandbag } from "react-icons/bs";
import { TbCalendarCancel } from "react-icons/tb";
const Book = () => {
  return (
    <div>

      <div className="md:mt-6">
        <div className=" md:grid md:grid-cols-3  bg-[#ffff] w-full md:w-[700px] h-auto shadow-sm rounded-lg p-5  md:h-28 ">
          <div className=" justify-center  flex md:flex-col items-center md:grid grid-col w-full  rounded-lg">

            <span className="py-3 ml-10"><GiWorld size={25} /></span>
            <span>Upcoming Tours (0)</span>
          </div>
          <div className=" justify-center flex md:flex-col  items-center md:grid md:grid-col w-full rounded-lg">
            <span className="ml-10 py-3"><BsHandbag size={25} /></span>
            <span>Completed Tour (1)</span>
          </div>
          <div className="flex  justify-center items-center md:grid md:grid-col w-full  rounded-lg">
            <span className="ml-10 py-3"><TbCalendarCancel size={25} /></span>
            <span>Cancled Tour(∞)</span>

          </div>
        </div>

        <div className="mt-6 bg-[#ffff] md:w-[700px] shadow-sm rounded-lg p-5 ">
          <div className="text-center p-5">
            <h1 className=" text-lg py-3  font-semibold ">This is a good time to go on a holday</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta cupiditate dolores libero quam obcaecati reprehenderit tenetur laudantium voluptatum quas accusantium, veritatis minus at fuga nisi odit iure quibusdam consequatur fugiat.
            </p>
            <button className="bg-blue-500 mt-1 rounded-lg py-2 px-2 border-none text-white">Exlore The Tour</button>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Book