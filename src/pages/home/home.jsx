import Image from "next/image";
import "../../app/globals.css";
// import Card1 from "@/components/Home/Cards/Card1";
import Card2 from "@/components/Home/Cards/Card2";
import Card3 from "@/components/Home/Cards/Card3";
import HeroSection from "@/components/Home/HeroSection";
import HorizontalCard from "@/components/Home/Cards/HorizontalCard";
import Card4 from "@/components/Home/Cards/Card4";
import ReviewsCard from "@/components/ReviewsCard";
import Footer from "@/components/Footer";
import Cardwork from "@/components/Home/Cards/cardwork";
import ArrowSection from "@/components/Home/Cards/ArrowSection";
import DesktopHeader from "@/components/Header/DesktopHeader/desktopHeader";

export default function home() {
    return (
        <>
            <DesktopHeader />
            <HeroSection />
            {/* <Tostify/> */}
            {/* <AdminReview/> */}



            <div className="container-wrapper  md:py-11 py-5">
                <div className=" md:grid flex md:flex-col flex-col-reverse md:grid-cols-2 w-full md:gap-16 text-wrap md:items-center ">

                    <div className=" md:shrink-0">
                        <p className=" text-amber-600   font-semibold mt-2">Holi Celebration Packages for 2024</p>
                        <h1 className=" md:text-[25px] text-xl  font-medium">Holi Tour</h1>
                        <h1 className="md:text-[16px] text-para line-clamp-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, eligendi sed hic provident enim, rerum tempore aliquam numquam vitae, earum doloremque. Nam!
                            Indulge in the vibrant celebrations of Holi with our premier Holi Packages of 2024 near to Delhi, tailored to offer an unforgettable experience in some of India’s most iconic destinations. Whether you’re drawn to the spiritual aura of Rishikesh, the
                        </h1>
                        <button className="ml-2 mt-3 hover:bg-[#fb2056] shadow-md bg-amber-600 text-white py-2 md:px-[50px] px-5 rounded-full">Know more</button>
                    </div>


                    <div className=" md:ml-28 ">
                        <Image width={450} height={450} className="   object-cover rounded-[17px]" src="https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>

                </div>
            </div>
            {/*  image */}

            {/* relative text-center w-full  h-40 md:h-52 lg:h-44 xl:h-52  overflow-hidden rounded-2xl" */}
            <div className="container-wrapper grid md:grid grid-cols-2 gap-4 mt-2  lg:grid-cols-4">
                <div className="relative mb-2">
                    <Image width={450} height={450} className=" object-cover rounded-[17px] transition-transform duration-300 transform hover:scale-110" src="https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="absolute  inset-x-2 bottom-0 bg-opacity-50 text-white text-center py-2">
                        <p className="text-[25px] font-bold">himacahl</p>
                    </div>
                </div>
                <div className="relative mb-2">
                    <Image width={450} height={450} className=" object-cover rounded-[17px] transition-transform duration-300 transform hover:scale-110" src="https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="absolute  inset-x-2 bottom-0 bg-opacity-50 text-white text-center py-2">
                        <p className=" text-[25px]	 font-bold">Kerala</p>
                    </div>
                </div>
                <div className="relative mb-2">
                    <Image width={450} height={450} className=" object-cover rounded-[17px] transition-transform duration-300 transform hover:scale-110" src="https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="absolute  inset-x-2 bottom-0 bg-opacity-50 text-white text-center py-2">
                        <p className="text-[25px] font-bold">Uttarakhand</p>
                    </div>
                </div>
                <div className="relative mb-2">
                    <Image width={450} height={450} className="object-cover rounded-[17px] transition-transform duration-300 transform hover:scale-110" src="https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="absolute  inset-x-0 bottom-0 bg-opacity-50 text-white text-center py-2">
                        <p className="text-[25px] font-bold">  Rajastan</p>
                    </div>
                </div>

            </div>

            {/* image and text */}

            <div className="container-wrapper md:py-10 py-4">
                <div className=" md:grid flex md:flex-col flex-col-reverse md:grid-cols-2 w-full md:gap-5  text-wrap md:items-center ">

                    <div className="">
                        <p className=" text-amber-600  font-semibold mt-2">Indiafe</p>
                        <h1 className="md:text-[25px] text-xl font-medium">HEAVENLY HIMALAYS</h1>
                        <h1 className="md:text-[16px] text-para line-clamp-3 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, eligendi sed hic provident enim, rerum tempore aliquam numquam vitae, earum doloremque. Nam!
                            Indulge in the vibrant celebrations of Holi with our premier Holi Packages of 2024 near to Delhi, tailored to offer an unforgettable experience in some of India’s most iconic destinations. Whether you’re drawn to the spiritual aura of Rishikesh, the
                        </h1>

                        <div className=" mt-4 flex md:justify-between gap-3  ">
                            <button className="  hover:bg-[#fb2056] shadow-md bg-amber-600 text-white py-2 md:px-[50px] px-5   rounded-full">Ker;a</button>
                            <button className="  hover:bg-[#fb2056] shadow-md bg-amber-600 text-white py-2 md:px-[50px] px-5   rounded-full">Himalay</button>

                        </div>
                    </div>


                    <div className=" md:ml-28 ">
                        <Image width={450} height={450} className="object-cover rounded-[17px]" src="https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>

                </div>
            </div>

            {/*  */}
            <div className="container-wrapper md:pb-10  ">
                <div className=" md:grid flex md:flex-col flex-col md:grid-cols-2 w-full md:gap-5  text-wrap md:items-center ">


                    <div className="">
                        <Image width={450} height={450} className=" object-cover rounded-[17px]" src="https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>

                    <div className="">
                        <p className=" text-amber-600  font-semibold mt-2">Indiafe</p>
                        <h1 className="md:text-[25px] text-xl font-medium">HEAVENLY HIMALAYS</h1>
                        <h1 className="md:text-[16px] text-para line-clamp-3 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, eligendi sed hic provident enim, rerum tempore aliquam numquam vitae, earum doloremque. Nam!
                            Indulge in the vibrant celebrations of Holi with our premier Holi Packages of 2024 near to Delhi, tailored to offer an unforgettable experience in some of India’s most iconic destinations. Whether you’re drawn to the spiritual aura of Rishikesh, the
                        </h1>

                        <div className=" mt-4  flex md:justify-between gap-3  ">
                            <button className="  hover:bg-[#fb2056] shadow-md bg-amber-600 text-white py-2 md:px-[50px] px-5   rounded-full">Know more</button>
                            <button className="  hover:bg-[#fb2056] shadow-md bg-amber-600 text-white py-2 md:px-[50px] px-5   rounded-full">Know more</button>

                        </div>
                    </div>

                </div>
            </div>


            {/* image */}

            {/* <div className=" container-wrapper md:grid md:grid-cols-2  justify-around items-center mt-5 md:mb-16 md:mt-8 gap-1">
                <div className="relative mb-3">
                    <Image height={450} width={450} className=" md:ml-16 object-cover rounded-md  transition-transform duration-300 transform hover:scale-110 " src="https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                </div>
                <div className="relative ">
                    <Image height={450} width={450}  className=" object-cover rounded-md transition-transform duration-300 transform hover:scale-110" src="https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            {/* md:h-72 md:w-[550px] h-56 w-full */}
            {/* </div>

            </div>  */}

            {/* weekend package */}



            <Cardwork />

            {/* horizontal card */}
            <div className="">


                <div className="container-wrapper  md:mt-8">
                    <p className="text-center mt-1 md:font-semibold  text-xl font-medium md:text-[25px]">Plan an unforgettable trip from your city</p>
                </div>

                {/* very small horizontal card */}
                <div className="container-wrapper justify-center  flex flex-wrap">
                    {/* each small horizontal card */}
                    <HorizontalCard />
                    <HorizontalCard />
                    <HorizontalCard />
                    <HorizontalCard />
                    <HorizontalCard />
                    {/* each small horizontal card */}

                </div>

            </div>


            <div className="md:mt-9  mt-4  bg-slate-100">
                <div className="container-wrapper text-xl md:text-[22px] font-medium text-center pb-7">
                    <p>Lorem, ipsum dolor.</p>
                    <p className="md:text-md text-para font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo cupiditate nobis minus?</p>
                </div>
                <Card4 />
            </div>


            {/* Card Kuoni copy */}
            <div className="container-wrapper md:mt-10 md:pb-2 md:pt-10">

                <div className=" md:mt-4 mt-4">
                    <ArrowSection />
                </div>

            </div>



            {/* card tab section */}
            <div className="my-1 mt-6 md:mt-10 ">
                <div className="container-wrapper text-xl font-medium md:text-[25px]  text-center">
                    <p>Lorem, ipsum dolor.</p>
                    <p className="md:text-md text-para font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo cupiditate nobis minus?</p>
                </div>
                <div className="container-wrapper grid grid-cols-5 gap-3 overflow-hidden">


                    <div className="flex md:flex-col md:mt-14 gap-2 py-5">
                        <div>
                            <button className="shadow-md bg-amber-600 text-white md:text-[16px] md:py-2 md:px-[80px] py-1 px-[30px] rounded-md">Europe</button>
                        </div>
                        <div>
                            <button className="shadow-md bg-amber-600 text-white md:text-[16px] md:py-2 md:px-[80px] py-1 px-[30px]  rounded-md">Europe</button>
                        </div>
                        <div>
                            <button className="shadow-md bg-amber-600 text-white md:text-[16px] md:py-2  md:px-[80px] py-1 px-[30px]  rounded-md">Europe</button>
                        </div>
                        <div>
                            <button className="shadow-md bg-amber-600 text-white md:text-[16px] md:py-2  md:px-[80px] py-1 px-[30px]  rounded-md">Europe</button>
                        </div>
                        <div>
                            <button className="shadow-md bg-amber-600 text-white md:text-[16px] text-para md:py-2 md:px-[80px] py-1 px-[30px]  rounded-md">Europe</button>
                        </div>

                    </div>

                    <div className="relative col-span-4 w-full overflow-auto">
                        <div className="flex gap-4 ">
                            {/*
                    <!-- card 1 --> */}
                            <Card3 />

                        </div>
                        <div className=" bg-gradient-to-l from-white opacity-100 w-10 h-full right-0 absolute z-30  top-0"></div>
                    </div>

                </div>
            </div>

            <div>

            </div>

            <div className="pb-5 -mt-1  md:pb-6">

                {/* rounded card */}
                <div className="container-wrapper md:text-[25px] text-xl font-medium text-center pb-2 md:pb-7">
                    <p>Lorem, ipsum dolor.</p>
                    <p className="md:text-md text-para font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo cupiditate nobis minus?</p>
                </div>
                <div className="container-wrapper  grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
                    {/* card multiple */}
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <Card2 />
                </div>
            </div>



            <div className="md:pb-6 pb-5">
                <ReviewsCard />
            </div>
            {/* 

            <div className="py-14  bg-slate-200 mb:6 md:mb-10">
                <div className="container-wrapper md:text-[25px] text-xl font-medium text-center pb-10">
                    <p>Lorem, ipsum dolor.</p>
                    <p className="md:text-md  text-para font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo cupiditate nobis minus?</p>
                </div>
                <div className="grid grid-cols-3 container-wrapper gap-x-3 gap-y-10 "> */}
            {/* multiple card */}
            {/* <div className="flex gap-2  ">
                        <div className=" overflow-hidden ">
                            <Image className=" object-cover w-14 h-14 rounded-full"
                                src="https://images.unsplash.com/photo-1496644256288-2bb0a65f32f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" />
                        </div>
                        <div>
                            <p className="text-md font-semibold pb-1">Accom</p>
                            <p className="text-para font-light">Lorem ipsum dolor sit amet </p>
                        </div>
                    </div> */}
            {/* multiple card */}
            {/* <div className="flex gap-2  ">
                        <div className=" overflow-hidden h-6 w-6">
                            <Image className=" object-cover w-5 h-5 rounded-full"
                                src="https://images.unsplash.com/photo-1496644256288-2bb0a65f32f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" />
                        </div>
                        <div>
                            <p className="text-md font-semibold pb-1">Accom</p>
                            <p className="text-para font-light">Lorem ipsum dolor sit amet .</p>
                        </div>
                    </div> */}
            {/* multiple card */}
            {/* <div className="flex gap-2  ">
                        <div className=" overflow-hidden ">
                            <Image className=" object-cover w-14 h-14 rounded-full"
                                src="https://images.unsplash.com/photo-1496644256288-2bb0a65f32f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" />
                        </div>
                        <div>
                            <p className="text-md font-semibold pb-1">abc</p>
                            <p className="text-para font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div> */}
            {/* multiple card */}
            {/* <div className="flex gap-2  ">
                        <div className=" overflow-hidden ">
                            <Image className=" object-cover w-14 h-14 rounded-full"
                                src="https://images.unsplash.com/photo-1496644256288-2bb0a65f32f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" />
                        </div>
                        <div>
                            <p className="text-md font-semibold pb-1">Accomondation</p>
                            <p className="text-para font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div> */}
            {/* multiple card */}
            {/* <div className="flex gap-2  ">
                        <div className=" overflow-hidden ">
                            <Image className=" object-cover w-14 h-14 rounded-full"
                                src="https://images.unsplash.com/photo-1496644256288-2bb0a65f32f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" />
                        </div>
                        <div>
                            <p className="text-md font-semibold pb-1">abc</p>
                            <p className="text-para font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div> */}
            {/* multiple card */}
            {/* <div className="flex gap-2  ">
                        <div className=" overflow-hidden ">
                            <Image className=" object-cover w-14 h-14 rounded-full"
                                src="https://images.unsplash.com/photo-1496644256288-2bb0a65f32f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" />
                        </div>
                        <div>
                            <p className="text-md font-semibold pb-1">Abc</p>
                            <p className="text-para font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div> */}


            <Footer />

        </>
    )
}