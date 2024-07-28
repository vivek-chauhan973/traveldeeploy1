import "../../app/globals.css";
import { IoMdArrowDropdown } from "react-icons/io";

import Image from 'next/image'
 const ItineraryBanner=()=>{
    return(
        <>
            <div className="mb-10">
                <div>
                    <Image className="w-full h-80 object-cover" src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className="container-wrapper py-5">
                    <p className="text-lg mb-2">Lorem, ipsum dolor.</p>    
                    <p className="text-para line-clamp-3">Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia odio necessitatibus iure dolor ad enim eum, officia eaque perferendis expedita harum neque, vel repudiandae aliquid obcaecati accusamus praesentium eius magnam laboriosam impedit consequuntur labore. Libero alias eos quos, voluptatem accusantium illo, commodi tenetur reprehenderit dicta error ratione ullam, consequatur quasi.</p>
                    <div className="flex gap-2 items-center justify-end">

                    <p className="text-right text-blue">Read more </p> 
                    <span><IoMdArrowDropdown className="text-blue"/></span>   
                    </div>
                </div>

                <hr className="container-wrapper border-slate-300" />                
            </div>
        </>
    )
}
export default ItineraryBanner