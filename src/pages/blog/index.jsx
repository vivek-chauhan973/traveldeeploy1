// import "../../app/globals.css";
// import Slider from "react-slick";
// import Image from 'next/image'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// // import Arrow from "../../../public/assests/arrow.png"
// import { MdOutlineArrowBackIosNew } from "react-icons/md";
// import { MdOutlineArrowForwardIos } from "react-icons/md";
// // import { MdKeyboardArrowUp } from "react-icons/md";



// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <MdOutlineArrowForwardIos
//             className={className}
//             style={{ ...style, display: "block", color: "gray", border: "1px solid black", backgroundColor: "white", padding: "7px", borderRadius: "40px", width: "40px", height: "40px", marginRight: "15px", marginTop: "-30px", }}
//             onClick={onClick}
//         />
//     );
// }
// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <MdOutlineArrowBackIosNew
//             className={`${className}`}
//             style={{ ...style, display: "block", color: "gray", border: "1px solid black", backgroundColor: "white", padding: "7px", borderRadius: "40px", width: "40px", height: "40px", marginLeft: "15px", marginTop: "-30px", zIndex: "1" }}
//             onClick={onClick}
//         />
//     );
// }


// export default function Index() {
//     var settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 2,
//         initialSlide: 0,
//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevArrow />,
//         // gap:5,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     initialSlide: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     };
//     return (
//         <>
//             <div className="font-lora">
//                 <div className=" pb-12 pt-5">
//                     <div className="container-wrapper gap-8 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-[1.3fr,1fr,1fr]">
//                         <div className="px-2 ">
//                             <div className="line-clamp-3">
//                                 <p className="text-xl font-semibold ">Heading ipsum, dolor sit amet consectetur adipisicing elit. Temporibus ipsa nesciunt cum!</p>
//                             </div>
//                             <div className="text-para my-2 line-clamp-3">
//                                 <p>
//                                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam amet optio nemo quis, mollitia officia impedit minus eaque quidem quaerat aliquid ullam nisi consequatur, atque odio at corporis obcaecati voluptatem! Saepe, accusamus perferendis! Voluptate consequuntur voluptatem repellat autem accusantium eum minus aliquam?
//                                 </p>
//                             </div>
//                             <div>
//                                 <Image className="w-48 h-20 rounded-md"
//                                     src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                     alt=""
//                                     width={200}
//                                     height={200}
//                                 />                            </div>
//                         </div>
//                         <div className="border-l pl-5">
//                             <div className="flex flex-row-reverse gap-2 items-center my-3">
//                                 <Image className="w-48 h-20 rounded-md"
//                                     src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                     alt=""
//                                     width={200}
//                                     height={200}
//                                 />                                <div className="line-clamp-2">
//                                     <p className="font-semibold text-para">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                                 </div>
//                             </div>
//                             <hr />
//                             {/* ----------------------- */}
//                             <div className="flex flex-row-reverse gap-2 items-center my-3">
//                                 <Image className="w-48 h-20 rounded-md"
//                                     src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                     alt=""
//                                     width={200}
//                                     height={200}
//                                 />                                <div className="line-clamp-2">
//                                     <p className="font-semibold text-para">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                                 </div>
//                             </div>
//                             <hr />
//                             {/* ----------------------- */}
//                             <div className="flex flex-row-reverse gap-2 items-center my-3">
//                                 <Image className="w-48 h-20 rounded-md"
//                                     src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                     alt=""
//                                     width={200}
//                                     height={200}
//                                 />
//                                 <div className="line-clamp-2">
//                                     <p className="font-semibold text-para">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                                 </div>
//                             </div>
//                             <hr />
//                             {/* ----------------------- */}
//                             <div className="flex flex-row-reverse gap-2 items-center my-3">
//                                 <Image className="w-48 h-20 rounded-md"
//                                     src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                     alt=""
//                                     width={200}
//                                     height={200}
//                                 />
//                                 <div className="line-clamp-2">
//                                     <p className="font-semibold text-para">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                                 </div>
//                             </div>

//                             {/* ----------------------- */}
//                         </div>
//                         <div className="border-l  h-[450px] relative border overflow-auto">
//                             <div className="py-3 pl-5 w-full bg-white sticky top-0 border-b shadow-sm">
//                                 <span className="border font-semibold text-sm px-2 rounded-full">Latest</span>
//                             </div>
//                             <div className="pl-5">
//                                 <div className="line-clamp-2 py-3">
//                                     <p className="font-semibold text-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
//                                 </div>
//                                 <hr />
//                                 <div className="line-clamp-2 py-3">
//                                     <p className="font-semibold text-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
//                                 </div>
//                                 <hr />
//                                 <div className="line-clamp-2 py-3">
//                                     <p className="font-semibold text-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
//                                 </div>
//                                 <hr />
//                                 <div className="line-clamp-2 py-3">
//                                     <p className="font-semibold text-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
//                                 </div>
//                                 <hr />
//                                 <div className="line-clamp-2 py-3">
//                                     <p className="font-semibold text-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
//                                 </div>
//                                 <hr />
//                                 <div className="line-clamp-2 py-3">
//                                     <p className="font-semibold text-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
//                                 </div>
//                                 <hr />
//                                 <div className="line-clamp-2 py-3">
//                                     <p className="font-semibold text-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
//                                 </div>
//                                 <hr />
//                                 <div className="line-clamp-2 py-3">
//                                     <p className="font-semibold text-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
//                                 </div>
//                                 <hr />
//                                 <div className="line-clamp-2 py-3">
//                                     <p className="font-semibold text-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
//                                 </div>
//                                 <hr />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="container-wrapper">
//                     <hr />
//                 </div>
//                 <div className="container-wrapper py-12 ">
//                     <div className="mb-10  ">

//                         <span className="before:block before:absolute before:-inset-1 before:-skew-y-0 before:bg-pink-500 relative inline-block ">
//                             <h2 className="font-semibold text-sm  relative text-white">Recent Blog</h2>
//                         </span>
//                         <div className="flex items-center gap-5 pt-2">
//                             <p className="font-semibold text-xl">Lorem, ipsum dolor sit!</p>
//                             <hr className=" w-1/5 border-t-4  border-amber-500" />
//                         </div>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//                         {/* card repeat */}
//                         <div className="">
//                             <Image className="w-full h-60 object-cover rounded-lg shadow-md "
//                                 src="https://plus.unsplash.com/premium_photo-1679829691075-67cd09158a80?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                 alt=""
//                                 width={200}
//                                 height={200}
//                             />                            <div className=" rounded-b-lg px-2">
//                                 <div className=" line-clamp-5 mt-4">
//                                     <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
//                                     <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
//                                 </div>
//                                 <div className="flex mt-5 gap-3 mb-3">
//                                     <p className="p-1 text-sm font-semibold border rounded-full text-white px-3 bg-black">Hotel</p>
//                                     <p className="p-1 text-sm font-semibold border rounded-full text-white px-3 bg-black">Hotel</p>
//                                     <p className="p-1 text-sm font-semibold border rounded-full text-white px-3 bg-black">Hotel</p>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* card repeat */}
//                         <div className="">
//                             <Image className="w-full h-60 object-cover rounded-lg shadow-md "
//                                 src="https://plus.unsplash.com/premium_photo-1679829691075-67cd09158a80?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                 alt=""
//                                 width={200}
//                                 height={200}
//                             />                            <div className=" rounded-b-lg px-2">
//                                 <div className=" line-clamp-5 mt-4">
//                                     <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
//                                     <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
//                                 </div>
//                                 <div className="flex mt-5 gap-3 mb-3">
//                                     <p className="p-1 text-sm font-semibold border rounded-full text-white px-3 bg-black">Hotel</p>
//                                     <p className="p-1 text-sm font-semibold border rounded-full text-white px-3 bg-black">Hotel</p>
//                                     <p className="p-1 text-sm font-semibold border rounded-full text-white px-3 bg-black">Hotel</p>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* card repeat */}
//                         <div className="">
//                             <Image className="w-full h-60 object-cover rounded-lg shadow-md "
//                                 src="https://plus.unsplash.com/premium_photo-1679829691075-67cd09158a80?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                 alt=""
//                                 width={200}
//                                 height={200}
//                             />
//                             <div className=" rounded-b-lg px-2">
//                                 <div className=" line-clamp-5 mt-4">
//                                     <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
//                                     <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
//                                 </div>
//                                 <div className="flex mt-5 gap-3 mb-3">
//                                     <p className="p-1 text-sm font-semibold border rounded-full text-white px-3 bg-black">Hotel</p>
//                                     <p className="p-1 text-sm font-semibold border rounded-full text-white px-3 bg-black">Hotel</p>
//                                     <p className="p-1 text-sm font-semibold border rounded-full text-white px-3 bg-black">Hotel</p>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* card repeat */}
//                     </div>
//                 </div>
//                 <div className="container-wrapper">
//                     <hr />
//                 </div>
//                 {/* your Popular blog */}
//                 <div className="container-wrapper py-12 ">
//                     <div>
//                         <span className="text-sm bg-pink-500 text-white font-semibold px-1 py-2">Popular Blog</span>
//                         <div className="flex items-center gap-5 pb-10 pt-2">
//                             <p className="font-semibold text-xl">Lorem, ipsum dolor sit!</p>
//                             <hr className=" w-1/5 border-t-4  border-amber-500" />
//                         </div>
//                     </div>
//                     {/* <Slider {...settings} className=""></Slider> */}
//                     <Slider {...settings} className=" ">
//                         {/* card repeat */}
//                         <div className="relative  overflow-hidden ">
//                             <Image className="w-full h-52 object-cover rounded-lg "
//                                 src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                 alt=""
//                                 width={200}
//                                 height={150}
//                             />                            <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
//                             <div className=" rounded-b-lg px-2">
//                                 <div className="flex mt-3 gap-3 mb-3">
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>

//                                 </div>
//                                 <div className=" line-clamp-3 my-2">
//                                     <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
//                                     <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
//                                 </div>

//                                 <div>
//                                     <button className=" rounded-md my-2 py-1 text-blue-600 underline cursor-pointer">Read More...</button>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* card repeat */}
//                         <div className="relative   overflow-hidden">
//                             <Image className="w-full h-52 object-cover rounded-lg "
//                                 src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                 alt=""
//                                 width={200}
//                                 height={150}
//                             />                            <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
//                             <div className=" rounded-b-lg px-2">
//                                 <div className="flex mt-3 gap-3 mb-3">
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>

//                                 </div>
//                                 <div className=" line-clamp-3 my-2">
//                                     <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
//                                     <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
//                                 </div>

//                                 <div>
//                                     <button className=" rounded-md my-2 py-1 text-blue-600 underline cursor-pointer">Read More...</button>
//                                 </div>

//                             </div>
//                         </div>
//                         {/* card repeat */}
//                         <div className="relative   overflow-hidden">
//                             <Image className="w-full h-52 object-cover rounded-lg "
//                                 src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                 alt=""
//                                 width={200}
//                                 height={150}
//                             />                            <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
//                             <div className=" rounded-b-lg px-2">
//                                 <div className="flex mt-3 gap-3 mb-3">
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>

//                                 </div>
//                                 <div className=" line-clamp-3 my-2">
//                                     <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
//                                     <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
//                                 </div>

//                                 <div>
//                                     <button className=" rounded-md my-2 py-1 text-blue-600 underline cursor-pointer">Read More...</button>
//                                 </div>

//                             </div>
//                         </div>
//                         {/* card repeat */}
//                         <div className="relative   overflow-hidden">
//                             <Image className="w-full h-52 object-cover rounded-lg "
//                                 src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                 alt=""
//                                 width={200}
//                                 height={150}
//                             />                            <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
//                             <div className=" rounded-b-lg px-2">
//                                 <div className="flex mt-3 gap-3 mb-3">
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>

//                                 </div>
//                                 <div className=" line-clamp-3 my-2">
//                                     <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
//                                     <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
//                                 </div>

//                                 <div>
//                                     <button className=" rounded-md my-2 py-1 text-blue-600 underline cursor-pointer">Read More...</button>
//                                 </div>

//                             </div>
//                         </div>
//                     </Slider>
//                 </div>
//                 <div className="container-wrapper">
//                     <hr />
//                 </div>
//                 {/* your Popular blog */}
//                 <div className="container-wrapper py-12 ">
//                     <div>
//                         <span className="text-sm bg-pink-500 text-white font-semibold px-1 py-2">Popular Blog</span>
//                         <div className="flex items-center gap-5 pb-5 pt-2">
//                             <h2 className="font-semibold text-xl ">Chardham Blog</h2>
//                             <hr className=" w-1/5 border-t-4  border-amber-500" />
//                         </div>
//                     </div>
//                     <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 gap-y-10">
//                         {/* card repeat */}
//                         <div className="relative rounded-lg shadow-md overflow-hidden">
//                             <Image className="w-full h-52 object-cover rounded-lg "
//                                 src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                 alt=""
//                                 width={200}
//                                 height={150}
//                             />                            <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
//                             <div className="border rounded-b-lg px-2">
//                                 <div className="flex mt-3 gap-3 mb-3">
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>

//                                 </div>
//                                 <div className=" line-clamp-3 my-2">
//                                     <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
//                                     <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* card repeat */}
//                         <div className="relative rounded-lg shadow-md overflow-hidden">
//                             <Image className="w-full h-52 object-cover rounded-lg "
//                                 src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                 alt=""
//                                 width={200}
//                                 height={150}
//                             />                            <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
//                             <div className="border rounded-b-lg px-2">
//                                 <div className="flex mt-3 gap-3 mb-3">
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>

//                                 </div>
//                                 <div className=" line-clamp-3 my-2">
//                                     <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
//                                     <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* card repeat */}
//                         <div className="relative rounded-lg shadow-md overflow-hidden">
//                             <Image className="w-full h-52 object-cover rounded-lg "
//                                 src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                 alt=""
//                                 width={200}
//                                 height={150}
//                             />                            <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
//                             <div className="border rounded-b-lg px-2">
//                                 <div className="flex mt-3 gap-3 mb-3">
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>

//                                 </div>
//                                 <div className=" line-clamp-3 my-2">
//                                     <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
//                                     <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* card repeat */}
//                         <div className="relative rounded-lg shadow-md overflow-hidden">
//                             <Image className="w-full h-52 object-cover rounded-lg "
//                                 src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                 alt=""
//                                 width={200}
//                                 height={150}
//                             />                            <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
//                             <div className="border rounded-b-lg px-2">
//                                 <div className="flex mt-3 gap-3 mb-3">
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>

//                                 </div>
//                                 <div className=" line-clamp-3 my-2">
//                                     <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
//                                     <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* card repeat */}
//                         <div className="relative rounded-lg shadow-md overflow-hidden">
//                             <Image className="w-full h-52 object-cover rounded-lg "
//                                 src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                 alt=""
//                                 width={200}
//                                 height={150}
//                             />                            <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
//                             <div className="border rounded-b-lg px-2">
//                                 <div className="flex mt-3 gap-3 mb-3">
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>

//                                 </div>
//                                 <div className=" line-clamp-3 my-2">
//                                     <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
//                                     <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* card repeat */}
//                         <div className="relative rounded-lg shadow-md overflow-hidden">
//                             <Image className="w-full h-52 object-cover rounded-lg "
//                                 src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                 alt=""
//                                 width={200}
//                                 height={150}
//                             />                            <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
//                             <div className="border rounded-b-lg px-2">
//                                 <div className="flex mt-3 gap-3 mb-3">
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>

//                                 </div>
//                                 <div className=" line-clamp-3 my-2">
//                                     <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
//                                     <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* card repeat */}
//                         <div className="relative rounded-lg shadow-md overflow-hidden">
//                             <Image className="w-full h-52 object-cover rounded-lg "
//                                 src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                 alt=""
//                                 width={200}
//                                 height={150}
//                             />                            <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
//                             <div className="border rounded-b-lg px-2">
//                                 <div className="flex mt-3 gap-3 mb-3">
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>

//                                 </div>
//                                 <div className=" line-clamp-3 my-2">
//                                     <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
//                                     <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* card repeat */}
//                         <div className="relative rounded-lg shadow-md overflow-hidden">
//                             <Image className="w-full h-52 object-cover rounded-lg "
//                                 src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                 alt=""
//                                 width={200}
//                                 height={150}
//                             />                            <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
//                             <div className="border rounded-b-lg px-2">
//                                 <div className="flex mt-3 gap-3 mb-3">
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>
//                                     <p className="px-2 text-[11px] font-semibold border rounded-full text-white  bg-black">Hotel</p>

//                                 </div>
//                                 <div className=" line-clamp-3 my-2">
//                                     <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
//                                     <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="container-wrapper">
//                     <hr />
//                 </div>
//                 {/*  */}
//                 <div className="container-wrapper py-20">
//                     <div>
//                         <span className="text-sm bg-pink-500 text-white font-semibold px-1 py-2">Chardham Blog</span>
//                         <div className="flex items-center gap-5 pb-5 pt-2">
//                             <h2 className="font-semibold text-xl ">Chardham Blog</h2>
//                             <hr className=" w-1/5 border-t-4  border-amber-500" />
//                         </div>
//                     </div>
//                     <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
//                         <div className="relative   overflow-hidden">
//                             <Image className="w-full h-52 object-cover rounded-lg "
//                                 src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                 alt=""
//                                 width={200}
//                                 height={150}
//                             />
//                             <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
//                             <div className="px-2 hidden sm:block">
//                                 <div className=" line-clamp-2 my-2 px-1">
//                                     <p className="font-semibold text-[18px]">Lorem, ipsum dolor.  ipsum dolor.  ipsum dolor. Lorem, ipsum.</p>

//                                 </div>
//                             </div>
//                         </div>
//                         <div className="relative   overflow-hidden">
//                             <Image className="w-full h-52 object-cover rounded-lg "
//                                 src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                 alt=""
//                                 width={200}
//                                 height={150}
//                             />
//                             <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
//                             <div className="px-2 hidden sm:block">
//                                 <div className=" line-clamp-2 my-2 px-1">
//                                     <p className="font-semibold text-[18px]">Lorem, ipsum dolor.  ipsum dolor.  ipsum dolor. Lorem, ipsum.</p>

//                                 </div>
//                             </div>
//                         </div>
//                         <div className="relative   overflow-hidden">
//                             <Image className="w-full h-52 object-cover rounded-lg "
//                                 src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                 alt=""
//                                 width={200}
//                                 height={150}
//                             />
//                             <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
//                             <div className="px-2 hidden sm:block">
//                                 <div className=" line-clamp-2 my-2 px-1">
//                                     <p className="font-semibold text-[18px]">Lorem, ipsum dolor.  ipsum dolor.  ipsum dolor. Lorem, ipsum.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="relative   overflow-hidden">
//                             <Image className="w-full h-52 object-cover rounded-lg "
//                                 src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                 alt=""
//                                 width={200}
//                                 height={150}
//                             />
//                             <span className="absolute top-0 right-0 rounded-full px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
//                             <div className="px-2 hidden sm:block">
//                                 <div className=" line-clamp-2 my-2 px-1">
//                                     <p className="font-semibold text-[18px]">Lorem, ipsum dolor.  ipsum dolor.  ipsum dolor. Lorem, ipsum.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="container-wrapper">
//                     <hr />
//                 </div>
//                 {/* your bannet blog */}
//                 <div className="my-12">
//                     <Image className="w-full h-80 object-cover"
//                         src="https://images.unsplash.com/photo-1496531693211-31c5234a5ea9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                         alt=""
//                         width={200}
//                         height={200}
//                     />
//                 </div>
//                 <div className="container-wrapper">
//                     <hr />
//                 </div>
//                 {/* all sided rounded blog */}
//                 <div className="py-10">
//                     <div className="container-wrapper">
//                         <div>
//                             <span className="text-sm bg-pink-500 text-white font-semibold px-1 py-2">Popular Blog</span>
//                             <div className="flex items-center gap-5 pb-10 pt-2">
//                                 <h2 className="font-semibold text-xl ">Chardham Blog</h2>
//                                 <hr className=" w-1/5 border-t-4  border-amber-500" />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="container-wrapper grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 ">
//                         <div className="  relative rounded-2xl overflow-hidden">
//                             <Image className=" "
//                                 src="https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                 alt=""
//                                 width={200}
//                                 height={200}
//                             />                            <div className="w-full absolute bottom-0 py-2 bg-black/50 text-white px-5">
//                                 <p className="text-sm font-semibold text-amber-200">Travel</p>
//                                 <div className=" line-clamp-2 ">
//                                     <p className="text-para md:text-base  font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* multiple card rounded show */}
//                         <div className="  relative rounded-2xl overflow-hidden">
//                             <Image className=" "
//                                 src="https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                 alt=""
//                                 width={200}
//                                 height={200}
//                             />                            <div className="w-full absolute bottom-0 py-2 bg-black/50 text-white px-5">
//                                 <p className="text-sm font-semibold text-amber-200">Travel</p>
//                                 <div className=" line-clamp-2 ">
//                                     <p className="text-para md:text-base  font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* multiple card rounded show */}
//                         <div className="  relative rounded-2xl overflow-hidden">
//                             <Image className=" "
//                                 src="https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                 alt=""
//                                 width={200}
//                                 height={200}
//                             />                            <div className="w-full absolute bottom-0 py-2 bg-black/50 text-white px-5">
//                                 <p className="text-sm font-semibold text-amber-200">Travel</p>
//                                 <div className=" line-clamp-2 ">
//                                     <p className="text-para md:text-base  font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* multiple card rounded show */}
//                         <div className="  relative rounded-2xl overflow-hidden">
//                             <Image className=" "
//                                 src="https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                 alt=""
//                                 width={200}
//                                 height={200}
//                             />
//                             <div className="w-full absolute bottom-0 py-2 bg-black/50 text-white px-5">
//                                 <p className="text-sm font-semibold text-amber-200">Travel</p>
//                                 <div className=" line-clamp-2 ">
//                                     <p className="text-para md:text-base  font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* multiple card rounded show */}
//                     </div>
//                 </div>

//             </div>
//         </>
//     )
// }



import React from 'react'
import "../../app/globals.css";
import DesktopHeader from '@/components/Header/DesktopHeader/desktopHeader'
import Image from 'next/image';
import Footer from '@/components/Footer';
import SuggestedBlog from '@/components/Blog/Blog-Detail/SuggestedBlog';
import { Link as ScrollLink } from "react-scroll";
import Breadcrumbs from '@/components/Breadcrumbs';

const Index = () => {
    return (
        <div>
            <DesktopHeader />
            <Breadcrumbs/>
            {/* Blog Hero Section */}
            <div>
                <div className="relative w-full h-80 md:h-96 lg:h-[32rem] overflow-hidden">
                    <Image
                        className=" top-0 left-0 w-full h-full object-cover object-center"
                        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Favit.ac.in%2Fcontact%2F&psig=AOvVaw2a30A9-VUVeov-cz3KWFaz&ust=1729578845164000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCwxbntnokDFQAAAAAdAAAAABAE"
                        alt=""
                        width={100}
                        height={100}
                        onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                    />
                </div>
                <div className='container-wrapper py-5'>
                    <h4 className="md:text-2xl text-md font-medium mb-2 capitalize">Blog</h4>
                    <p className="text-para line-clamp-5">
                        A great About Us page comes across as human. It puts a face to a name,
                        showing your potential customers that you are a real person. Any well-written About page makes the reader feel a
                        sense of connection with the brand. It makes them feel like they know you and that you have something in common.
                        A great About Us page comes across as human. It puts a face to a name,
                        showing your potential customers that you are a real person. Any well-written About page makes the reader feel a
                        sense of connection with the brand. It makes them feel like they know you and that you have something in common.
                        A great About Us page comes across as human. It puts a face to a name,
                    </p>
                </div>
            </div>
            {/* Blog Detail section start*/}
            <div className='container-wrapper py-10'>
                <div className="  grid grid-cols-1 xl:grid-cols-[1fr,2fr]">
                    <div className="pt-5 pr-5 ">
                        <div className="sticky top-40 z-10">
                            <div className=''>
                                <ScrollLink
                                    to="1st"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >
                                    <p className="text-md font-medium mb-2 hover:cursor-pointer hover:text-primary">
                                        What is a business travel app?
                                    </p>
                                </ScrollLink>
                                <ScrollLink
                                    to="2nd"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >
                                    <p className="text-md font-medium mb-2 hover:cursor-pointer hover:text-primary">
                                        How long does it take the average person to plan a trip?
                                    </p>
                                </ScrollLink>
                                <ScrollLink
                                    to="3rd"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >
                                    <p className="text-md font-medium mb-2 hover:cursor-pointer hover:text-primary">
                                        Business travel tips: how do you plan a trip like a professional?
                                    </p>
                                </ScrollLink>
                                <ScrollLink
                                    to="4th"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >
                                    <p className="text-md font-medium mb-2 hover:cursor-pointer hover:text-primary">
                                        How can a corporate travel app simplify the planning process?
                                    </p>
                                </ScrollLink>
                                <ScrollLink
                                    to="5th"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >
                                    <h2 className='font-semibold text-lg my-4 hover:cursor-pointer hover:text-primary'>
                                        Top 8 corporate travel tools
                                    </h2>
                                </ScrollLink>
                                <ol className="text-para font-medium ml-10">
                                    <li className='hover:cursor-pointer hover:text-primary'>
                                        Hopper: Best for predicting the lowest prices
                                    </li>
                                    <li className='hover:cursor-pointer hover:text-primary'>
                                        Splitwise: Best way to manage shared expenses
                                    </li>
                                    <li className='hover:cursor-pointer hover:text-primary'>
                                        TripIt: Best for multi-destination itineraries
                                    </li>
                                    <li className='hover:cursor-pointer hover:text-primary'>
                                        Wanderlog: Best company trip planning app for road trips
                                    </li>
                                    <li className='hover:cursor-pointer hover:text-primary'>
                                        Wheely: Best for arriving in style
                                    </li>
                                    <li className='hover:cursor-pointer hover:text-primary'>
                                        Sygic: Best for bleisure travellers
                                    </li>
                                    <li className='hover:cursor-pointer hover:text-primary'>
                                        Packing Pro: Best for strict luggage requirements
                                    </li>
                                    <li className='hover:cursor-pointer hover:text-primary'>
                                        Booking.com for Business: Best for full-service business travel platform
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className='pl-5'>
                        <div id="ItinerarySubSection" className='mt-5'>
                            <p className="text-base leading-relaxed">
                                We’re all looking for productivity hacks to help us get organized and reduce stress,
                                and with an app for trip planning you can get business travel booked in no time.
                                Whether you’re after a streamlined way to track expenses, stick to a budget, pack more efficiently,
                                or plan your route, business travel apps tackle all the above.
                            </p>
                            <p className="text-base leading-relaxed">
                                With so many corporate travel apps on the market, it can be difficult to know which are worth using.
                                Never fear – we’ve rounded up the top eight apps and a few bonus business travel tips to help you get started.
                            </p>
                        </div>
                        <div className='pt-7' id="1st">
                            <h3 className="text-[30px] font-medium mb-2">
                                What is a business travel app?
                            </h3>
                            <p className="text-base leading-relaxed">
                                What do we mean by corporate travel app, exactly, and what can these business travel apps do?
                                Whether accessed via a desktop or downloaded to your smartphone or tablet, travel apps lighten the load of trip planning.
                                Use general travel apps to find and book flights, hotels, and car rentals, or plan your itinerary.
                                With business-specific apps, you can also track expenses and find meeting facilities.
                            </p>
                        </div>
                        <div className='pt-7' id="2nd">
                            <h3 className="text-[30px] font-medium mb-2">
                                How long does it take the average person to plan a trip?
                            </h3>
                            <p className="text-base leading-relaxed">
                                The study found that trip planning’s not only time-consuming, but stressful.
                                Over a fifth (22%) of adults surveyed found the planning process to be frustrating.
                                Separate research commissioned by Hotels.com confirmed this with over 25% of those surveyed stating they found trip planning to be one of life’s biggest stressors.
                                And roughly 40% stated they’d be willing to pay more to avoid the planning and research.
                                These are just a few reasons to use apps for trip planning to cut down on the stress.
                            </p>
                        </div>
                        <div className='pt-7' id="3rd">
                            <h3 className="text-[30px] font-medium mb-2">
                                Business travel tips: how do you plan a trip like a professional?
                            </h3>
                            <p className="text-base leading-relaxed">
                                The study found that trip planning’s not only time-consuming, but stressful.
                                Over a fifth (22%) of adults surveyed found the planning process to be frustrating.
                                Separate research commissioned by Hotels.com confirmed this with over 25% of those surveyed stating they found trip planning to be one of life’s biggest stressors.
                                And roughly 40% stated they’d be willing to pay more to avoid the planning and research.
                                These are just a few reasons to use apps for trip planning to cut down on the stress.
                            </p>
                        </div>
                        <div className='pt-7' id="4th">
                            <h3 className="text-[30px] font-medium mb-2">
                                How can a corporate travel app simplify the planning process?
                            </h3>
                            <p className="text-base leading-relaxed">
                                The study found that trip planning’s not only time-consuming, but stressful.
                                Over a fifth (22%) of adults surveyed found the planning process to be frustrating.
                                Separate research commissioned by Hotels.com confirmed this with over 25% of those surveyed stating they found trip planning to be one of life’s biggest stressors.
                                And roughly 40% stated they’d be willing to pay more to avoid the planning and research.
                                These are just a few reasons to use apps for trip planning to cut down on the stress.
                            </p>
                        </div>
                        <div className='pt-7' id="5th">
                            <h3 className="text-[30px] font-medium mb-2">
                                Top 8 corporate travel tools
                            </h3>
                            <p className="text-base leading-relaxed">
                                With these apps, you’ll be able to put all our business travel tips into action for fuss-free planning.
                            </p>
                            <ol className="ml-10 py-5">
                                <li className="text-2xl mb-5">
                                    <h4 className="text-2xl font-medium mb-3"> Hopper: Best for predicting the lowest prices</h4>
                                    <p className="text-base leading-relaxed font-normal">
                                        There’s nothing worse than booking a flight, only to see that it’s dropped in price a week later.
                                        With Hopper, you can time your bookings to ensure that you’re getting the best deals.
                                        The app’s algorithm analyses billions of prices daily to predict the near future of flight and accommodation costs.
                                        Then, when the lowest prices are predicted, the app notifies you that it’s time to book.
                                        An impressive 95% accuracy rate makes it a trustworthy option, too.
                                    </p>
                                </li>
                                <li className="text-2xl mb-5">
                                    <h4 className="text-2xl font-medium mb-3"> Splitwise: Best way to manage shared expenses</h4>
                                    <p className="text-base leading-relaxed font-normal">
                                        There’s nothing worse than booking a flight, only to see that it’s dropped in price a week later.
                                        With Hopper, you can time your bookings to ensure that you’re getting the best deals.
                                        The app’s algorithm analyses billions of prices daily to predict the near future of flight and accommodation costs.
                                        Then, when the lowest prices are predicted, the app notifies you that it’s time to book.
                                        An impressive 95% accuracy rate makes it a trustworthy option, too.
                                    </p>
                                </li>
                                <li className="text-2xl mb-5">
                                    <h4 className="text-2xl font-medium mb-3">TripIt: Best for multi-destination itineraries</h4>
                                    <p className="text-base leading-relaxed font-normal">
                                        There’s nothing worse than booking a flight, only to see that it’s dropped in price a week later.
                                        With Hopper, you can time your bookings to ensure that you’re getting the best deals.
                                        The app’s algorithm analyses billions of prices daily to predict the near future of flight and accommodation costs.
                                        Then, when the lowest prices are predicted, the app notifies you that it’s time to book.
                                        An impressive 95% accuracy rate makes it a trustworthy option, too.
                                    </p>
                                </li>
                                <li className="text-2xl mb-5">
                                    <h4 className="text-2xl font-medium mb-3">  Wanderlog: Best company trip planning app for road trips</h4>
                                    <p className="text-base leading-relaxed font-normal">
                                        There’s nothing worse than booking a flight, only to see that it’s dropped in price a week later.
                                        With Hopper, you can time your bookings to ensure that you’re getting the best deals.
                                        The app’s algorithm analyses billions of prices daily to predict the near future of flight and accommodation costs.
                                        Then, when the lowest prices are predicted, the app notifies you that it’s time to book.
                                        An impressive 95% accuracy rate makes it a trustworthy option, too.
                                    </p>
                                </li>
                                <li className="text-2xl mb-5">
                                    <h4 className="text-2xl font-medium mb-3">Wheely: Best for arriving in style</h4>
                                    <p className="text-base leading-relaxed font-normal">
                                        There’s nothing worse than booking a flight, only to see that it’s dropped in price a week later.
                                        With Hopper, you can time your bookings to ensure that you’re getting the best deals.
                                        The app’s algorithm analyses billions of prices daily to predict the near future of flight and accommodation costs.
                                        Then, when the lowest prices are predicted, the app notifies you that it’s time to book.
                                        An impressive 95% accuracy rate makes it a trustworthy option, too.
                                    </p>
                                </li>
                                <li className="text-2xl mb-5">
                                    <h4 className="text-2xl font-medium mb-3">Sygic: Best for bleisure travellers</h4>
                                    <p className="text-base leading-relaxed font-normal">
                                        There’s nothing worse than booking a flight, only to see that it’s dropped in price a week later.
                                        With Hopper, you can time your bookings to ensure that you’re getting the best deals.
                                        The app’s algorithm analyses billions of prices daily to predict the near future of flight and accommodation costs.
                                        Then, when the lowest prices are predicted, the app notifies you that it’s time to book.
                                        An impressive 95% accuracy rate makes it a trustworthy option, too.
                                    </p>
                                </li>
                                <li className="text-2xl mb-5">
                                    <h4 className="text-2xl font-medium mb-3"> Packing Pro: Best for strict luggage requirements</h4>
                                    <p className="text-base leading-relaxed font-normal">
                                        There’s nothing worse than booking a flight, only to see that it’s dropped in price a week later.
                                        With Hopper, you can time your bookings to ensure that you’re getting the best deals.
                                        The app’s algorithm analyses billions of prices daily to predict the near future of flight and accommodation costs.
                                        Then, when the lowest prices are predicted, the app notifies you that it’s time to book.
                                        An impressive 95% accuracy rate makes it a trustworthy option, too.
                                    </p>
                                </li>
                                <li className="text-2xl mb-5">
                                    <h4 className="text-2xl font-medium mb-3">Booking.com for Business: Best for full-service business travel platform</h4>
                                    <p className="text-base leading-relaxed font-normal">
                                        There’s nothing worse than booking a flight, only to see that it’s dropped in price a week later.
                                        With Hopper, you can time your bookings to ensure that you’re getting the best deals.
                                        The app’s algorithm analyses billions of prices daily to predict the near future of flight and accommodation costs.
                                        Then, when the lowest prices are predicted, the app notifies you that it’s time to book.
                                        An impressive 95% accuracy rate makes it a trustworthy option, too.
                                    </p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <SuggestedBlog />
            </div>
            {/* Blog Detail section end*/}
            <Footer />
        </div>
    )
}

export default Index;