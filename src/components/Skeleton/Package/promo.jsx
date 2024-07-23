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

export const CarRentalHomeSkelton = () => {
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

                        <div className=" rounded bg-slate-100 h-4 md:w-48 w-24 md:ml-4 mt-5 mb-7"></div>
                        <div className=" rounded bg-slate-100 h-2 w-full "></div>
                        <div className=" rounded bg-slate-100 h-2 w-full "></div>
                        <div className=" rounded bg-slate-100 h-2 w-full "></div>
                        <div className=" rounded bg-slate-100 h-2 w-full "></div>
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


// Car-rental car-promo skeleton 

export const CarPromoSkeleton = () => {
    return (
        <>
            {/* first page */}
                <div className="mt-5 grid md:grid-cols-4 md:pr-14">
                    <div className=" container-wrapper skeleton bg-slate-200 shadow-sm rounded-lg p-5 md:h-[400px] h-[440px] max-w-[785px] mx-auto col-span-3">
                        <div className="animate-pulse h-full space-y-4 md:space-x-4">
                            {/* Upper Section */}
                            <div className="flex md:gap-14 gap-5">
                                <div className=" rounded-md bg-slate-100 md:h-48 h-32 md:w-60 w-60"></div>
                                <div className="mr-5 xl:block hidden">                           
                                    <div className=" rounded bg-slate-100 h-3 md:w-44 w-20 mb-3 mt-5"></div>
                                    <div className=" rounded bg-slate-100 h-2 md:w-40 w-16 mb-5"></div>
                                    <div className=" rounded bg-slate-100 md:h-8 h-6 md:w-56 w-24 mb-5"></div>
                                    <div className=" rounded bg-slate-100 md:h-6 h-4 md:w-44 w-20"></div>
                                </div>
                                <div className="xl:block hidden">
                                    <div className=" rounded bg-slate-100 h-2 md:w-48 w-20 mb-3 mt-14"></div>
                                    <div className=" rounded bg-slate-100 h-3 md:w-36 w-16 mb-4"></div>
                                    <div className=" rounded bg-slate-100 h-8  md:w-40 w-20"></div>
                                </div>
                            </div>
                            {/* lower section */}
                            <div className="flex md:flex-row flex-col ">
                                <div className="md:mr-10  mt-10 mb-5">
                                    <div className=" rounded bg-slate-100 h-3 md:w-40 w-44 mb-3"></div>
                                    <div className=" rounded bg-slate-100 h-2 md:w-48 w-36 mb-5"></div>
                                    <div className=" rounded bg-slate-100 md:h-3 h-7 md:w-40 w-72 mb-3"></div>
                                    <div className=" rounded bg-slate-100 h-2 md:w-48 xl:block hidden"></div>
                                </div>
                                <div className="flex md:mt-10">
                                    <div className="mr-20">
                                        <div className=" rounded bg-slate-100 md:h-2 h-3 md:w-48 w-28 mb-3"></div>
                                        <div className=" rounded bg-slate-100 h-2 md:w-48 w-24 mb-3"></div>
                                        <div className=" rounded bg-slate-100 h-2 md:w-48 w-20 mb-3"></div>
                                        <div className=" rounded bg-slate-100 md:h-2 h-4 md:w-48 w-24"></div>
                                    </div>
                                    <div>
                                        <div className=" rounded bg-slate-100 h-2 md:w-48 w-20 mb-3"></div>
                                        <div className=" rounded bg-slate-100 h-2 md:w-48 w-20 mb-3"></div>
                                        <div className=" rounded bg-slate-100 h-2 md:w-48 w-20 mb-3"></div>
                                        <div className=" rounded bg-slate-100 h-2 md:w-48 w-20"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" container-wrapper skeleton bg-slate-200 shadow-sm rounded-lg p-5 md:h-[400px] h-[620px] max-w-[80px] mx-auto xl:block hidden">
                        <div className="animate-pulse h-full space-y-4 md:space-x-4">
                            <div className="flex justify-center">
                                <div>
                                    <div className="flex justify-center">
                                        <div className=" rounded bg-slate-100 h-3 md:w-28  mb-7 mt-3"></div>
                                    </div>
                                    <div className=" rounded bg-slate-100 h-3 md:w-28  mb-3"></div>
                                    <div className=" rounded bg-slate-100 h-2 md:w-52  mb-3"></div>
                                    <div className=" rounded bg-slate-100 h-2 md:w-52  mb-7"></div>
                                    <div className=" rounded bg-slate-100 h-3 md:w-28  mb-3"></div>
                                    <div className=" rounded bg-slate-100 h-2 md:w-52  mb-3"></div>
                                    <div className=" rounded bg-slate-100 h-2 md:w-52  mb-3"></div>
                                    <div className=" rounded bg-slate-100 h-2 md:w-52  mb-7"></div>
                                    <div className=" rounded bg-slate-100 h-3 md:w-28  mb-3"></div>
                                    <div className=" rounded bg-slate-100 h-2 md:w-52  mb-3"></div>
                                    <div className=" rounded bg-slate-100 h-2 md:w-52  mb-7"></div>
                                    <div className="flex justify-center">
                                        <div className=" rounded bg-slate-100 h-8 md:w-28 w-20"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* second Page */}
                <div className="mt-5 md:mt-10 mb-5">
                    <div className=" container-wrapper skeleton bg-slate-200 shadow-sm rounded-lg p-5 h-[380px] w-full mx-auto">
                        <div className="animate-pulse h-full space-y-4 md:space-x-4">
                            <div className="flex justify-center ">
                                <div className=" rounded bg-slate-100 h-4 md:w-56 w-36 mt-10 mb-2"></div>
                            </div>
                            <div className="flex justify-center ">
                                <div className=" rounded bg-slate-100 h-3 md:w-1/2 w-52 mb-7 "></div>                            
                            </div>
                            <div className="flex justify-center ">
                                <div className=" rounded bg-slate-100 h-10 md:w-3/4 w-72"></div>
                            </div>
                            <div className="flex justify-center ">
                                <div className=" rounded bg-slate-100 h-10 md:w-3/4 w-72"></div>
                            </div>
                            <div className="flex justify-center ">
                                <div className=" rounded bg-slate-100 h-10 md:w-3/4 w-72"></div>
                            </div>                               
                        </div>
                    </div>
                </div>
        </>
    )
}



// Car-rental car-detail skeleton 

export const CarDetailSkeleton = () => {
    return (
        <>
         {/* first page */}
            <div className="mt-5 grid md:grid-cols-4 md:pr-14">
                <div className=" container-wrapper skeleton bg-slate-200 shadow-sm rounded-lg p-5 md:h-[460px] h-[620px] max-w-[785px] mx-auto col-span-3">
                    <div className="animate-pulse h-full space-y-4 md:space-x-4">
                        <div className="flex md:flex-row flex-col gap-5 mb-5 md:mb-7">
                            <div className="md:mr-20 md:ml-20">
                                <div className=" rounded-md bg-slate-100 md:h-52 h-48  md:w-60 w-72"></div>
                            </div>
                            <div>
                                <div className=" rounded-md bg-slate-100 h-3  md:w-44 w-32 mb-3"></div>
                                <div className=" rounded-md bg-slate-100 h-2  md:w-40 w-28 mb-7"></div>
                                <div className=" rounded-md bg-slate-100 h-4  md:w-52 w-40 mb-5"></div>
                                <div className=" rounded-md bg-slate-100 h-6  md:w-44 w-28 mb-7"></div>
                                <div className=" rounded-md bg-slate-100 h-2  md:w-full w-3/4 mb-3"></div>
                                <div className=" rounded-md bg-slate-100 h-2  md:w-full w-3/5"></div>                                   
                            </div>
                        </div>
                        <div>
                            <div className=" rounded-md bg-slate-100  h-2 w-full mb-3"></div>
                            <div className=" rounded-md bg-slate-100  h-2 w-3/4 mb-5"></div>
                            <div className=" rounded-md bg-slate-100  h-5 w-24 mb-10"></div>
                            <div className=" rounded-md bg-slate-100  h-4 w-24 mb-3"></div>
                            <div className=" rounded-md bg-slate-100  h-3 w-full mb-3"></div>
                            <div className=" rounded-md bg-slate-100  h-3 w-full"></div>
                        </div>
                    </div>
                </div>
                <div className=" container-wrapper skeleton bg-slate-200 shadow-sm rounded-lg p-5 md:h-[460px] h-[620px] max-w-[80px] mx-auto xl:block hidden ">
                    <div className="animate-pulse h-full space-y-4 md:space-x-4">
                        <div>
                            <div className=" rounded-md bg-slate-100 h-3 w-32 mb-7"></div>
                            <div className=" rounded-md bg-slate-100 h-2 w-40 mb-3"></div>
                            <div className=" rounded-md bg-slate-100 h-7 w-full mb-5"></div>
                            <div className=" rounded-md bg-slate-100 h-2 w-32 mb-3"></div>
                            <div className=" rounded-md bg-slate-100 h-7 w-full mb-5"></div>
                            <div className=" rounded-md bg-slate-100 h-2 w-full mb-3"></div>
                            <div className=" rounded-md bg-slate-100 h-7 w-full mb-7"></div>
                            <div className=" rounded-md bg-slate-100 h-4 w-full mb-5"></div>
                            <div className=" rounded-md bg-slate-100 h-2 w-full mb-3"></div>
                            <div className=" rounded-md bg-slate-100 h-2 w-full mb-5"></div>
                            <div className=" rounded-md bg-slate-100 h-8 w-full mb-3"></div>
                            <div className=" rounded-md bg-slate-100 h-8 w-full "></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* second Page */}
            <div className="mt-5 md:mt-10">
                <div className=" container-wrapper skeleton bg-slate-200 shadow-sm rounded-lg p-5 h-[220px] w-full mx-auto">
                    <div className="animate-pulse h-full space-y-4 md:space-x-4">
                        <div className="flex justify-center item-center gap-10">
                            <div>
                                <div className=" rounded-md bg-slate-100  h-4 md:w-36 w-20 mb-7 mt-10"></div>
                                <div className=" rounded-md bg-slate-100  h-2 md:w-96 w-28 mb-3"></div>
                                <div className=" rounded-md bg-slate-100  h-2 md:w-96 w-28 mb-3"></div>
                                <div className=" rounded-md bg-slate-100  h-2 md:w-96 w-28"></div>
                            </div>
                            <div>
                                <div className=" rounded-md bg-slate-100  h-4 md:w-36 w-20 mb-7 mt-10"></div>
                                <div className=" rounded-md bg-slate-100  h-2 md:w-96 w-28 mb-3"></div>
                                <div className=" rounded-md bg-slate-100  h-2 md:w-96 w-28 mb-3"></div>
                                <div className=" rounded-md bg-slate-100  h-2 md:w-96 w-28"></div>
                            </div> 
                        </div>    
                    </div>
                </div>
            </div>
        </>
    )
}