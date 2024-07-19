import React from 'react'




export const PromoBanner = () => {
    return (
        <>
            <div>
                <div className=" container-wrapper skeleton bg-slate-200 shadow-sm rounded-lg p-5 h-full w-full mx-auto">
                    <div className="animate-pulse h-full space-y-4 md:space-x-4">
                        <div className=" rounded bg-slate-100 h-40 w-full "></div>
                        <div className="flex-1 space-y-6 py-2 mb-5 ">
                            <div className="h-2 bg-slate-100 rounded"></div>
                            <div className="space-y-3 mt-2 ">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-100 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-100 rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-slate-100 rounded"></div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-100 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-100 rounded col-span-1"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



//  Home page Skeleton
   

export const Home=()=>{
    return(

        <>
             {/*  home page skeleton */}

             <div className=" mt-9 container-wrapper  bg-slate-200  shadow-sm rounded-lg p-5 md:h-[400px] h-[510px] w-full mx-auto">
                <div className="animate-pulse  space-y-4 md:space-x-4">
                    <div className=" grid-flow-col    md:grid md:grid-cols-2 rounded  bg-slate-200 h-56 w-full">
                        <div className=" mt-16  h-40 ml-9  w-48 grid grid-cols-3 ">
                            <div className="  h-2 md:w-72 w-60 mt-3  bg-slate-100 rounded col-span-3"></div>
                            <div className=" h-2 md:w-52 w-56   bg-slate-100 rounded col-span-2"></div>
                            <div className=" h-2 md:w-48 w-48   bg-slate-100 rounded col-span-2"></div>
                            <div className=" h-2 w-48   bg-slate-100 rounded col-span-2"></div>
                            <div className=" h-2 w-48   bg-slate-100 rounded col-span-2"></div>
                            <div className=" h-10  w-32  mt-7  bg-slate-100 rounded-[17px] col-span-2"></div>
                        </div>
                        <div className="">
                            <div className=" md:h-80  h-56 w-full py-10 mt-7  bg-slate-100 rounded-[17px] col-span-2"></div>
                        </div>

                    </div>

                </div>
            </div>
            <br />
            <div className="  container-wrapper mt-96 bg-slate-200  shadow-sm rounded-lg p-5 h-full w-full mx-auto" >

                <div className=" grid md:grid grid-cols-2 gap-4   lg:grid-cols-4">
                    <div className=" md:h-60 h-40 md:w-60 w-36  bg-slate-100 rounded-[17px] "></div>
                    <div className="  md:h-60 h-40 md:w-60 w-36  bg-slate-100 rounded-[17px] "></div>
                    <div className=" md:h-60 h-40 md:w-60 w-36   bg-slate-100 rounded-[17px] "></div>
                    <div className=" md:h-60 h-40 md:w-60 w-36   bg-slate-100 rounded-[17px] "></div>
                </div>

            </div>
            <br />
            <div className=" mt-9 container-wrapper  bg-slate-200  shadow-sm rounded-lg p-5 md:h-[400px] h-[510px] w-full mx-auto">
                <div className="animate-pulse  space-y-4 md:space-x-4">
                    <div className=" grid-flow-col md:grid md:grid-cols-2 rounded  bg-slate-200 h-56 w-full">

                        <div className=" mt-16  h-40 ml-9  w-48 grid grid-cols-3 ">

                            <div className="  h-2   md:w-72 w-60  mt-3  bg-slate-100 rounded col-span-3"></div>
                            <div className=" h-2 w-52   bg-slate-100 rounded col-span-2"></div>
                            <div className=" h-2 w-48   bg-slate-100 rounded col-span-2"></div>
                            <div className=" h-2 w-48   bg-slate-100 rounded col-span-2"></div>
                            <div className=" h-2 w-48   bg-slate-100 rounded col-span-2"></div>

                            <div className=" h-10  w-32  mt-7  bg-slate-100 rounded-[17px] col-span-2"></div>

                        </div>
                        <div>
                            <div className=" md:h-80  h-56 w-full py-10 mt-7  bg-slate-100 rounded-[17px] col-span-2"></div>
                        </div>
                    </div>

                </div>
            </div>

            {/* home page skeletn done */}


        </>
    )
}




// filtering skeleton 
export const PromoFilter = () => {
    return (
        <>
            <div>
                <div className=" skeleton bg-slate-200 shadow-sm rounded-lg p-5 h-full w-full mx-auto">
                    <div className="animate-pulse h-full space-y-10 md:space-y-0 md:space-x-4">
                        
                        <div className="flex-1 space-y-6 py-2 mb-5 ">
                            <div className="h-2 bg-slate-100 rounded"></div>
                            <div className="space-y-3 mt-3 ">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-100 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-100 rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-slate-100 rounded"></div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-100 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-100 rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-slate-100 rounded"></div>
                            </div>
                        </div>
                        <div className="flex-1 space-y-6 py-2 mb-5 ">
                            <div className="h-2 bg-slate-100 rounded"></div>
                            <div className="space-y-3 mt-3 ">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-100 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-100 rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-slate-100 rounded"></div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-100 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-100 rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-slate-100 rounded"></div>
                            </div>
                        </div>
                        <div className="flex-1 space-y-6 py-2 mb-5 ">
                            <div className="h-2 bg-slate-100 rounded"></div>
                            <div className="space-y-3 mt-3 ">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-100 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-100 rounded col-span-1"></div>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-100 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-100 rounded col-span-1"></div>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-100 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-100 rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-slate-100 rounded"></div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-100 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-100 rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-slate-100 rounded"></div>
                            </div>
                        </div>
                        <div className="flex-1 space-y-6 py-2 mb-5 ">
                            <div className="h-2 bg-slate-100 rounded"></div>
                            <div className="space-y-3 mt-3 ">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-100 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-100 rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-slate-100 rounded"></div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-100 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-100 rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-slate-100 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}





// promo list skelton
export const PromoList = () => {
    return (
        <div className=''>
            <div className=" container-wrapper flex flex-col gap-4 w-2/3">
                
                <div className="skeleton h-4 "></div>
                <div className="skeleton h-4 "></div>
                <div className="skeleton h-4 "></div>
                <div className="skeleton h-4 "></div>
                <div className="skeleton h-4 "></div>
                <div className="skeleton h-4 "></div>
                <div className="skeleton h-4 "></div>
            </div>

        </div>
    )
}

// Promo Link skeleton
export const PromoLink = () => {
    return (
        <>
            <div>
                <div className=" container-wrapper skeleton bg-transparent shadow-sm rounded-lg p-5 h-full w-full mx-auto">
                    <div className="animate-pulse h-full space-y-4 md:space-x-4">
                        
                        <div className="flex-1 space-y-6 py-2 mb-5 ">
                            <div className="h-2 skeleton bg-slate-200 rounded"></div>
                            <div className="space-y-3 mt-2 ">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-slate-200 rounded"></div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </>
    )
}


// Car rental home skelton

export const CarRentalHoeSkelton = () => {
    return (
        <>
             {/* first page */}
             <div className="mt-5">
                    <div className=" container-wrapper skeleton bg-slate-200 shadow-sm rounded-lg p-5 md:h-[440px] h-52 w-full mx-auto ">
                        <div className="animate-pulse h-full space-y-4 md:space-x-4">
                            <div className=" rounded bg-slate-100 h-2 md:w-40 w-24 md:ml-4 mt-14  "></div>
                            <div className=" rounded bg-slate-100 h-2 md:w-52 w-36 "></div>
                            <div className=" rounded bg-slate-100 h-12 w-72 xl:block hidden"></div>
                            <div className=" rounded bg-slate-100 h-20 w-1/2 xl:block hidden"></div>
                        </div>
                    </div>
                </div>
                {/* second Page */}
                <div className="mt-5 mb-5">
                    <div className=" container-wrapper skeleton bg-slate-200 shadow-sm rounded-lg p-5 h-[440px] w-full mx-auto">
                        <div className="animate-pulse h-full space-y-4 md:space-x-4 mr-5 ">

                            <div className=" rounded bg-slate-100 h-2 md:w-48 w-24 md:ml-4 mt-5 mb-7"></div>
                            <div className=" rounded bg-slate-100 h-2 w-full "></div>
                            <div className=" rounded bg-slate-100 h-2 w-full "></div>
                            <div className=" rounded bg-slate-100 h-2 w-full "></div>
                            <div className=" rounded bg-slate-100 h-2 w-full "></div>
                            <div className=" rounded bg-slate-100 h-2 w-full xl:hidden block"></div>
                            <div className=" rounded bg-slate-100 h-2 w-full xl:hidden block"></div>
                            <div className=" rounded bg-slate-100 h-2 w-full xl:hidden block"></div>
                            <div className=" rounded bg-slate-100 h-2 w-full xl:hidden block"></div>
                            <div className=" rounded bg-slate-100 h-2 w-full xl:hidden block"></div>
                            
                            <div className=" grid md:grid grid-cols-2 md:gap-12 gap-4  lg:grid-cols-4 ">
                                <div className=" md:h-60 h-32 md:w-60 w-32  bg-slate-100 rounded-[17px] "></div>
                                <div className="  md:h-60 h-32 md:w-60 w-32  bg-slate-100 rounded-[17px] "></div>
                                <div className=" md:h-60 h-32 md:w-60 w-32   bg-slate-100 rounded-[17px] xl:block hidden "></div>
                                <div className=" md:h-60 h-32 md:w-60 w-32   bg-slate-100 rounded-[17px] xl:block hidden"></div>
                            </div>
                            
                        </div>
                    </div>
                </div>
        </>
    )
}