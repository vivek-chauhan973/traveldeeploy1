import "../../app/globals.css";
import Slider from "react-slick";
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Arrow from "../../../public/assests/arrow.png"
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
// import { MdKeyboardArrowUp } from "react-icons/md";



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <MdOutlineArrowForwardIos
        className={className}
        style={{ ...style, display: "block",color:"gray",border:"1px solid black",backgroundColor:"white",padding:"7px",borderRadius:"40px" ,width:"40px",height:"40px",marginRight:"15px", marginTop:"-30px", }}
        onClick={onClick}
      />
    );
  }
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <MdOutlineArrowBackIosNew
        className={`${className}`}
        style={{ ...style, display: "block",color:"gray",border:"1px solid black",backgroundColor:"white",padding:"7px",borderRadius:"40px" ,width:"40px",height:"40px",marginLeft:"15px", marginTop:"-30px",zIndex:"1" }}
        onClick={onClick}
      />
    );
  }


export default function Index () {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow />,
        // gap:5,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    };
    return (
        <> 
        
           
        <div className="font-lora">
            
            <div className=" pb-12 pt-5">
                <div className="container-wrapper gap-8 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-[1.3fr,1fr,1fr]">
                    <div className="px-2 ">
                        <div className="line-clamp-3">
                            <p className="text-xl font-semibold ">Heading ipsum, dolor sit amet consectetur adipisicing elit. Temporibus ipsa nesciunt cum!</p>

                        </div>
                        <div className="text-para my-2 line-clamp-3">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam amet optio nemo quis, mollitia officia impedit minus eaque quidem quaerat aliquid ullam nisi consequatur, atque odio at corporis obcaecati voluptatem! Saepe, accusamus perferendis! Voluptate consequuntur voluptatem repellat autem accusantium eum minus aliquam?
                            </p>
                        </div>
                        <div>
                            <Image className="w-full h-60 object-cover rounded-md" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                    </div>
                    <div className="border-l pl-5">
                        <div className="flex flex-row-reverse gap-2 items-center my-3">
                            <Image className="w-48 h-20 rounded-md" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className="line-clamp-2">
                                <p className="font-semibold text-para">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <hr />
                        {/* ----------------------- */}
                        <div className="flex flex-row-reverse gap-2 items-center my-3">
                            <Image className="w-48 h-20 rounded-md" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className="line-clamp-2">
                                <p className="font-semibold text-para">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <hr />
                        {/* ----------------------- */}
                        <div className="flex flex-row-reverse gap-2 items-center my-3">
                            <Image className="w-48 h-20 rounded-md" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className="line-clamp-2">
                                <p className="font-semibold text-para">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <hr />
                        {/* ----------------------- */}
                        <div className="flex flex-row-reverse gap-2 items-center my-3">
                            <Image className="w-48 h-20 rounded-md" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className="line-clamp-2">
                                <p className="font-semibold text-para">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        {/* ----------------------- */}
                    </div>
                    <div className="border-l  h-[450px] relative border overflow-auto">
                        <div className="py-3 pl-5 w-full bg-white sticky top-0 border-b shadow-sm">
                            <span className="border font-semibold text-sm px-2 rounded-full">Latest</span>
                        </div>
                        <div className="pl-5">
                            <div className="line-clamp-2 py-3">
                                <p className="font-semibold text-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <hr />
                            <div className="line-clamp-2 py-3">
                                <p className="font-semibold text-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <hr />
                            <div className="line-clamp-2 py-3">
                                <p className="font-semibold text-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <hr />
                            <div className="line-clamp-2 py-3">
                                <p className="font-semibold text-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <hr />
                            <div className="line-clamp-2 py-3">
                                <p className="font-semibold text-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <hr />
                            <div className="line-clamp-2 py-3">
                                <p className="font-semibold text-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <hr />
                            <div className="line-clamp-2 py-3">
                                <p className="font-semibold text-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <hr />
                            <div className="line-clamp-2 py-3">
                                <p className="font-semibold text-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <hr />
                            <div className="line-clamp-2 py-3">
                                <p className="font-semibold text-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-wrapper">
                <hr />
            </div>
            <div className="container-wrapper py-12 ">
                <div className="mb-10  ">

                    <span className="before:block before:absolute before:-inset-1 before:-skew-y-0 before:bg-pink-500 relative inline-block ">
                        <h2 className="font-semibold text-sm  relative text-white">Recent Blog</h2>
                    </span>
                    <div className="flex items-center gap-5 pt-2">
                        <p className="font-semibold text-xl">Lorem, ipsum dolor sit!</p>
                        <hr className=" w-1/5 border-t-4  border-amber-500" />
                    </div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {/* card repeat */}
                    <div className="">
                        <Image className="w-full h-60 object-cover rounded-lg shadow-md " src="https://images.unsplash.com/photo-1476297820623-03984cf5cdbb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className=" rounded-b-lg px-2">
                            <div className=" line-clamp-5 mt-4">
                                <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
                                <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
                            </div>
                            <div className="flex mt-5 gap-3 mb-3">
                                <p className="p-1 text-sm font-semibold border rounded-full text-white px-3 bg-black">Hotel</p>
                                <p className="p-1 text-sm font-semibold border rounded-full text-white px-3 bg-black">Hotel</p>
                                <p className="p-1 text-sm font-semibold border rounded-full text-white px-3 bg-black">Hotel</p>
                            </div>
                        </div>
                    </div>
                    {/* card repeat */}
                    <div className="">
                        <Image className="w-full h-60 object-cover rounded-lg shadow-md " src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className=" rounded-b-lg px-2">
                            <div className=" line-clamp-5 mt-4">
                                <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
                                <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
                            </div>
                            <div className="flex mt-5 gap-3 mb-3">
                                <p className="p-1 text-sm font-semibold border rounded-full text-white px-3 bg-black">Hotel</p>
                                <p className="p-1 text-sm font-semibold border rounded-full text-white px-3 bg-black">Hotel</p>
                                <p className="p-1 text-sm font-semibold border rounded-full text-white px-3 bg-black">Hotel</p>
                            </div>
                        </div>
                    </div>
                    {/* card repeat */}
                    <div className="">
                        <Image className="w-full h-60 object-cover rounded-lg shadow-md " src="https://plus.unsplash.com/premium_photo-1679829691075-67cd09158a80?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className=" rounded-b-lg px-2">
                            <div className=" line-clamp-5 mt-4">
                                <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
                                <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
                            </div>
                            <div className="flex mt-5 gap-3 mb-3">
                                <p className="p-1 text-sm font-semibold border rounded-full text-white px-3 bg-black">Hotel</p>
                                <p className="p-1 text-sm font-semibold border rounded-full text-white px-3 bg-black">Hotel</p>
                                <p className="p-1 text-sm font-semibold border rounded-full text-white px-3 bg-black">Hotel</p>
                            </div>
                        </div>
                    </div>
                    {/* card repeat */}

                </div>
            </div>
            <div className="container-wrapper">
                <hr />
            </div>
            {/* your Popular blog */}
            <div className="container-wrapper py-12 ">
                <div>
                    <span className="text-sm bg-pink-500 text-white font-semibold px-1 py-2">Popular Blog</span>
                    <div className="flex items-center gap-5 pb-10 pt-2">
                        <p className="font-semibold text-xl">Lorem, ipsum dolor sit!</p>
                        <hr className=" w-1/5 border-t-4  border-amber-500" />
                    </div>
                </div>
                {/* <Slider {...settings} className=""></Slider> */}
                <Slider {...settings} className=" ">
                    {/* card repeat */}
                    <div className="relative  overflow-hidden ">
                        <Image className="w-full h-52 object-cover rounded-lg" src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
                        <div className=" rounded-b-lg px-2">
                            <div className="flex mt-3 gap-3 mb-3">
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>

                            </div>
                            <div className=" line-clamp-3 my-2">
                                <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
                                <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
                            </div>

                            <div>
                                <button className=" rounded-md my-2 py-1 text-blue-600 underline cursor-pointer">Read More...</button>
                            </div>
                        </div>
                    </div>
                    {/* card repeat */}
                    <div className="relative   overflow-hidden">
                        <Image className="w-full h-52 object-cover rounded-lg " src="https://images.unsplash.com/photo-1473625247510-8ceb1760943f?q=80&w=1411&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
                        <div className=" rounded-b-lg px-2">
                            <div className="flex mt-3 gap-3 mb-3">
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>

                            </div>
                            <div className=" line-clamp-3 my-2">
                                <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
                                <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
                            </div>

                            <div>
                                <button className=" rounded-md my-2 py-1 text-blue-600 underline cursor-pointer">Read More...</button>
                            </div>

                        </div>
                    </div>
                    {/* card repeat */}
                    <div className="relative   overflow-hidden">
                        <Image className="w-full h-52 object-cover rounded-lg " src="https://images.unsplash.com/photo-1510917181191-85abe24b5300?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
                        <div className=" rounded-b-lg px-2">
                            <div className="flex mt-3 gap-3 mb-3">
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>

                            </div>
                            <div className=" line-clamp-3 my-2">
                                <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
                                <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
                            </div>

                            <div>
                                <button className=" rounded-md my-2 py-1 text-blue-600 underline cursor-pointer">Read More...</button>
                            </div>

                        </div>
                    </div>
                    {/* card repeat */}
                    <div className="relative   overflow-hidden">
                        <Image className="w-full h-52 object-cover rounded-lg " src="https://plus.unsplash.com/premium_photo-1679829691075-67cd09158a80?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
                        <div className=" rounded-b-lg px-2">
                            <div className="flex mt-3 gap-3 mb-3">
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>

                            </div>
                            <div className=" line-clamp-3 my-2">
                                <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
                                <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
                            </div>

                            <div>
                                <button className=" rounded-md my-2 py-1 text-blue-600 underline cursor-pointer">Read More...</button>
                            </div>

                        </div>
                    </div>


                </Slider>
            </div>
            <div className="container-wrapper">
                <hr />
            </div>
            {/* your Popular blog */}
            <div className="container-wrapper py-12 ">
                <div>
                    <span className="text-sm bg-pink-500 text-white font-semibold px-1 py-2">Popular Blog</span>
                    <div className="flex items-center gap-5 pb-5 pt-2">
                        <h2 className="font-semibold text-xl ">Chardham Blog</h2>
                        <hr className=" w-1/5 border-t-4  border-amber-500" />
                    </div>
                </div>
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 gap-y-10">
                    {/* card repeat */}
                    <div className="relative rounded-lg shadow-md overflow-hidden">
                        <Image className="w-full h-52 object-cover  " src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
                        <div className="border rounded-b-lg px-2">
                            <div className="flex mt-3 gap-3 mb-3">
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>

                            </div>
                            <div className=" line-clamp-3 my-2">
                                <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
                                <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
                            </div>
                        </div>
                    </div>
                    {/* card repeat */}
                    <div className="relative rounded-lg shadow-md overflow-hidden">
                        <Image className="w-full h-52 object-cover  " src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
                        <div className="border rounded-b-lg px-2">
                            <div className="flex mt-3 gap-3 mb-3">
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>

                            </div>
                            <div className=" line-clamp-3 my-2">
                                <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
                                <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
                            </div>
                        </div>
                    </div>
                    {/* card repeat */}
                    <div className="relative rounded-lg shadow-md overflow-hidden">
                        <Image className="w-full h-52 object-cover  " src="https://images.unsplash.com/photo-1502920514313-52581002a659?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
                        <div className="border rounded-b-lg px-2">
                            <div className="flex mt-3 gap-3 mb-3">
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>

                            </div>
                            <div className=" line-clamp-3 my-2">
                                <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
                                <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
                            </div>
                        </div>
                    </div>
                    {/* card repeat */}
                    <div className="relative rounded-lg shadow-md overflow-hidden">
                        <Image className="w-full h-52 object-cover  " src="https://plus.unsplash.com/premium_photo-1677419807331-072575b7f26d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
                        <div className="border rounded-b-lg px-2">
                            <div className="flex mt-3 gap-3 mb-3">
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>

                            </div>
                            <div className=" line-clamp-3 my-2">
                                <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
                                <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
                            </div>
                        </div>
                    </div>
                    {/* card repeat */}
                    <div className="relative rounded-lg shadow-md overflow-hidden">
                        <Image className="w-full h-52 object-cover  " src="https://plus.unsplash.com/premium_photo-1677419807331-072575b7f26d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
                        <div className="border rounded-b-lg px-2">
                            <div className="flex mt-3 gap-3 mb-3">
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>

                            </div>
                            <div className=" line-clamp-3 my-2">
                                <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
                                <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
                            </div>
                        </div>
                    </div>
                    {/* card repeat */}
                    <div className="relative rounded-lg shadow-md overflow-hidden">
                        <Image className="w-full h-52 object-cover  " src="https://plus.unsplash.com/premium_photo-1677419807331-072575b7f26d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
                        <div className="border rounded-b-lg px-2">
                            <div className="flex mt-3 gap-3 mb-3">
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>

                            </div>
                            <div className=" line-clamp-3 my-2">
                                <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
                                <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
                            </div>
                        </div>
                    </div>
                    {/* card repeat */}
                    <div className="relative rounded-lg shadow-md overflow-hidden">
                        <Image className="w-full h-52 object-cover  " src="https://plus.unsplash.com/premium_photo-1677419807331-072575b7f26d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
                        <div className="border rounded-b-lg px-2">
                            <div className="flex mt-3 gap-3 mb-3">
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>

                            </div>
                            <div className=" line-clamp-3 my-2">
                                <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
                                <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
                            </div>
                        </div>
                    </div>
                    {/* card repeat */}
                    <div className="relative rounded-lg shadow-md overflow-hidden">
                        <Image className="w-full h-52 object-cover  " src="https://plus.unsplash.com/premium_photo-1677419807331-072575b7f26d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
                        <div className="border rounded-b-lg px-2">
                            <div className="flex mt-3 gap-3 mb-3">
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
                                <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>

                            </div>
                            <div className=" line-clamp-3 my-2">
                                <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
                                <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className="container-wrapper">
                <hr />
            </div>
            {/*  */}
            <div className="container-wrapper py-20">
                <div>
                    <span className="text-sm bg-pink-500 text-white font-semibold px-1 py-2">Chardham Blog</span>
                    <div className="flex items-center gap-5 pb-5 pt-2">
                        <h2 className="font-semibold text-xl ">Chardham Blog</h2>
                        <hr className=" w-1/5 border-t-4  border-amber-500" />
                    </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
                    <div className="relative   overflow-hidden">
                        <Image className="w-full h-52 object-cover rounded-lg " src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
                        <div className="px-2 hidden sm:block">
                            <div className=" line-clamp-2 my-2 px-1">
                                <p className="font-semibold text-[18px]">Lorem, ipsum dolor.  ipsum dolor.  ipsum dolor. Lorem, ipsum.</p>

                            </div>
                        </div>
                    </div>
                    <div className="relative   overflow-hidden">
                        <Image className="w-full h-52 object-cover rounded-lg " src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
                        <div className="px-2 hidden sm:block">
                            <div className=" line-clamp-2 my-2 px-1">
                                <p className="font-semibold text-[18px]">Lorem, ipsum dolor.  ipsum dolor.  ipsum dolor. Lorem, ipsum.</p>

                            </div>
                        </div>
                    </div>
                    <div className="relative   overflow-hidden">
                        <Image className="w-full h-52 object-cover rounded-lg " src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
                        <div className="px-2 hidden sm:block">
                            <div className=" line-clamp-2 my-2 px-1">
                                <p className="font-semibold text-[18px]">Lorem, ipsum dolor.  ipsum dolor.  ipsum dolor. Lorem, ipsum.</p>

                            </div>
                        </div>
                    </div>
                    <div className="relative   overflow-hidden">
                        <Image className="w-full h-52 object-cover rounded-lg " src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
                        <div className="px-2 hidden sm:block">
                            <div className=" line-clamp-2 my-2 px-1">
                                <p className="font-semibold text-[18px]">Lorem, ipsum dolor.  ipsum dolor.  ipsum dolor. Lorem, ipsum.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-wrapper">
                <hr />
            </div>
            {/* your bannet blog */}
            <div className="my-12">
                <Image className="w-full h-80 object-cover" src="https://images.unsplash.com/photo-1496531693211-31c5234a5ea9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="container-wrapper">
                <hr />
            </div>
            {/* all sided rounded blog */}
            <div className="py-10">
                <div className="container-wrapper">
                    <div>
                        <span className="text-sm bg-pink-500 text-white font-semibold px-1 py-2">Popular Blog</span>
                        <div className="flex items-center gap-5 pb-10 pt-2">
                            <h2 className="font-semibold text-xl ">Chardham Blog</h2>
                            <hr className=" w-1/5 border-t-4  border-amber-500" />
                        </div>
                    </div>
                </div>
                <div className="container-wrapper grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 ">
                    <div className="  relative rounded-2xl overflow-hidden">
                        <Image className=" " src="https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className="w-full absolute bottom-0 py-2 bg-black/50 text-white px-5">
                            <p className="text-sm font-semibold text-amber-200">Travel</p>
                            <div className=" line-clamp-2 ">
                                <p className="text-para md:text-base  font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>
                    </div>


                    {/* multiple card rounded show */}
                    <div className="  relative rounded-2xl overflow-hidden">
                        <Image className=" " src="https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className="w-full absolute bottom-0 py-2 bg-black/50 text-white px-5">
                            <p className="text-sm font-semibold text-amber-200">Travel</p>
                            <div className=" line-clamp-2 ">
                                <p className="text-para md:text-base  font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>
                    </div>


                    {/* multiple card rounded show */}
                    <div className="  relative rounded-2xl overflow-hidden">
                        <Image className=" " src="https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className="w-full absolute bottom-0 py-2 bg-black/50 text-white px-5">
                            <p className="text-sm font-semibold text-amber-200">Travel</p>
                            <div className=" line-clamp-2 ">
                                <p className="text-para md:text-base  font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>
                    </div>


                    {/* multiple card rounded show */}
                    <div className="  relative rounded-2xl overflow-hidden">
                        <Image className=" " src="https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className="w-full absolute bottom-0 py-2 bg-black/50 text-white px-5">
                            <p className="text-sm font-semibold text-amber-200">Travel</p>
                            <div className=" line-clamp-2 ">
                                <p className="text-para md:text-base  font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>
                    </div>


                    {/* multiple card rounded show */}

                </div>
            </div>

        </div>
        </>
    )
}