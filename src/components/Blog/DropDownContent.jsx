import Link from 'next/link'
import React from 'react'
import { useRouter } from "next/router";  
const DropDownContent = () => {
    const router = useRouter();
    const isActive = (path) => {
        return router.pathname === path;
      };
  return (
    <div className='border-2 px-4 py-1 rounded-md z-50 bg-white '>
      
      <Link href="/haridwar">
          <p
        
            className={`relative px-3 group my-3 text-gray-500 hover:text-blue-500 ${isActive("/haridwar") ? "text-blue-500 border-b-2 border-blue-500" : ""}`}
          >
            Haridwar
            <span className="absolute left-0 -bottom-2  w-full h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            
          </p>
        </Link>
        <Link href="/shashank">
          <p
       
            className={`relative px-3 group text-gray-500 my-3  hover:text-blue-500 ${isActive("/shashank") ? "text-blue-500 border-b-2 border-blue-500" : ""}`}
          >
            Shashank
            <span className="absolute left-0 -bottom-2 w-full h-1  bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          
          </p>
        </Link>
        <Link href="/haridwar">
          <p
          
            className={`relative px-3 group text-gray-500 my-3 hover:text-blue-500 ${isActive("/pradhumn") ? "text-blue-500 border-b-2 border-blue-500" : ""}`}
          >
            Pradhumn
            <span className="absolute left-0 -bottom-2 w-full h-1  bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          
          </p>
        </Link>
        <Link href="/haridwar">
          <p
          
            className={`relative px-3 group text-gray-500 my-3 hover:text-blue-500 ${isActive("/pradhumn") ? "text-blue-500 border-b-2 border-blue-500" : ""}`}
          >
            Pradhumn
            <span className="absolute left-0 -bottom-2 w-full h-1  bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          
          </p>
        </Link>
        <Link href="/haridwar">
          <p
          
            className={`relative px-3 group text-gray-500 my-3 hover:text-blue-500 ${isActive("/pradhumn") ? "text-blue-500 border-b-2 border-blue-500" : ""}`}
          >
            Pradhumn
            <span className="absolute left-0 -bottom-2 w-full h-1  bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          
          </p>
        </Link>
       
    </div>
  )
}

export default DropDownContent