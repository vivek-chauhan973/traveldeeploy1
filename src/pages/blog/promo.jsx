import "../../app/globals.css";
import Image from 'next/image'

export default function Promo () {
    return (
        <>
            <div className="container-wrapper py-3 font-lora">
                <div className="flex justify-end">
                    <input className="border " type="text" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr]">
                    <div>
                        <div className=" py-5 rounded flex flex-col md:flex-row md:items-center gap-5">
                            <div>
                                <Image className="w-[500px] h-[180px] object-cover rounded-xl shadow-md" src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg" alt="" />
                            </div>
                            <div className="px-3">
                                <p className="font-semibold text-2xl pb-3">Lorem ipsum dolor sit.</p>
                                <div className=" line-clamp-2">
                                    <p className="text-para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus nobis repellat magnam, fugit maxime iste, ex est, dicta explicabo non ipsa exercitationem!</p>
                                </div>

                                <div className="flex mt-3 gap-3 mb-3">
                                    <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
                                    <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
                                    <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
                                </div>
                                <button className="font-semibold text-para hover:underline cursor-pointer text-indigo-800">Read More...</button>
                            </div>
                        </div>
                        <div className=" py-5 rounded flex flex-col md:flex-row md:items-center gap-5">
                            <div>
                                <Image className="w-[500px] h-[180px] object-cover rounded-xl shadow-md" src="https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>
                            <div className="px-3">
                                <p className="font-semibold text-2xl pb-3">Lorem ipsum dolor sit.</p>
                                <div className=" line-clamp-2">
                                    <p className="text-para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus nobis repellat magnam, fugit maxime iste, ex est, dicta explicabo non ipsa exercitationem!</p>
                                </div>

                                <div className="flex mt-3 gap-3 mb-3">
                                    <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
                                    <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
                                    <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
                                </div>
                                <button className="font-semibold text-para hover:underline cursor-pointer text-indigo-800">Read More...</button>
                            </div>
                        </div>
                        
                        <div>
                            <div className="flex gap-5 items-center justify-center">
                                <span className="border px-2 rounded-xl hover:text-white hover:bg-black cursor-pointer">Prev</span>
                                <div className="flex gap-2">
                                    <span className="border px-2 rounded-xl hover:text-white hover:bg-black cursor-pointer">1</span>
                                    <span className="border px-2 rounded-xl hover:text-white hover:bg-black cursor-pointer">2</span>
                                    <span className="border px-2 rounded-xl hover:text-white hover:bg-black cursor-pointer">3</span>
                                </div>
                                <span className="border px-2 rounded-xl hover:text-white hover:bg-black cursor-pointer">Next</span>
                            </div>
                        </div>
                    </div>
                    {/* sidebar information code is here down */}
                    <div>

                    </div>
                    
                </div>
            </div>

        </>
    )
}