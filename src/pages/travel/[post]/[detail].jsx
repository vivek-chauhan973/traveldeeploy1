// import { ClassNames } from "@emotion/react";
// import "../../app/globals.css";
// import Image from 'next/image'
// export default function Detail () {
//     return (
//         // demo skeleton
//         <div>
//             {/* blog postskeleton start */}
//             <div className="mt-9 container-wrapper  bg-slate-200  shadow-sm rounded-lg p-5 h-full w-full mx-auto">
//                 <div className="">
//                     <div className="animate-pulse  space-y-3 md:space-x-3 ">

//                         <div className=" h-3 md:w-72  w-60  bg-slate-100 rounded col-span-3"></div>
//                         <div className="  h-2 md:w-[45%]  w-40 bg-slate-100 rounded col-span-3"></div>
//                         <div className="  h-2 md:w-[45%]    w-44    bg-slate-100 rounded col-span-3"></div>
//                         <div className="  h-2 md:w-[45%]   w-40   bg-slate-100 rounded col-span-3"></div>
//                         <div className="  h-2 md:w-[45%]   w-40   bg-slate-100 rounded col-span-3"></div>
//                     </div>
//                     <div className="md:flex  mt-5 ">
//                         <div className="bg-slate-100  md:h-96 h-56 w-full md:w-4/6 rounded-[17px] "></div>
//                         <div className=" mt-4 ">
//                             <div className=" md:ml-6 md:h-72  h-56 md:w-72 w-full bg-slate-100 rounded-[17px] col-span-2"></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="mt-6">
//                 <div className=" mt-6 container-wrapper skeleton bg-slate-200 shadow-sm rounded-lg p-5 h-full w-full mx-auto">
//                     <div className="animate-pulse h-full space-y-4 md:space-x-4">
//                         <div className=" rounded bg-slate-100 h-40 w-full "></div>
//                         <div className="flex-1 space-y-6 py-2 mb-5 ">
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="mt-6">
//                 <div className=" container-wrapper   bg-slate-200  shadow-sm rounded-lg p-5 h-full w-full mx-auto" >
//                     <div className=" grid md:grid grid-cols-1 gap-4   lg:grid-cols-4">
//                         <div className=" md:h-60 h-40  md:w-60 w-full  bg-slate-100 rounded-[17px] "></div>
//                         <div className="  md:h-60 h-40 md:w-60 w-36  bg-slate-100 rounded-[17px] "></div>
//                         <div className=" md:h-60 h-40 md:w-60 w-36   bg-slate-100 rounded-[17px] "></div>
//                         <div className=" md:h-60 h-40 md:w-60 w-36   bg-slate-100 rounded-[17px] "></div>
//                     </div>
//                 </div>
//             </div>
//             {/* blog postskeleton end  */}
//             <div className="bg-slate-100 mt-6">
//                 <div className="container-wrapper py-5 ">
//                     <div className="">
//                         <h1 className="py-3 font-semibold text-lg md:text-[28px]">Titles and Subtitles from a web newspaper</h1>
//                         <h1 className=" mb-2 md:text-lg text-para font-normal line-clamp-2">Hello everyone! the first time  a student and actually attending university lessons from home, due to the pandemic and lockdown. My teacher just gave me this job, consisting to take all the titles and subtitles from an online italian journal that include the words in a certain time lapse (from 22th to 29th of Genuary and just the 1st and the 8th of April),</h1>
//                     </div>
//                     <div className="grid mb-2 grid-cols-1 lg:grid-cols-[3fr,1fr] gap-5">
//                         <div className=" rounded bg-white">
//                             <Image className="w-full  " height={100} width={100} src="https://images.unsplash.com/photo-1476297820623-03984cf5cdbb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//                         </div>
//                         {/* sidebar content is here down */}
//                         <div className="">
//                             <div className="relative rounded-t-lg overflow-hidden">
//                                 <Image className="w-full  " height={100} width={100} src="https://images.unsplash.com/photo-1476297820623-03984cf5cdbb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//                                 <span className="absolute top-0 right-0 rounded-badge px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
//                                 <div className="border rounded-b-lg px-2 bg-white">
//                                     <div className="flex mt-3 gap-3 mb-3">
//                                         <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
//                                         <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
//                                         <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
//                                     </div>
//                                     <div className=" line-clamp-3 my-2">
//                                         <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
//                                         <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* banner */}
//                 <div className="container-wrapper">
//                     <Image className="w-full md:h-72 object-cover rounded-lg" width={100} height={100} src="https://images.unsplash.com/photo-1447746249824-4be4e1b76d66?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//                 </div>
//                 {/* suggested card is here */}
//                 <div className="container-wrapper  md:pt-10 pt-4 ">
//                     <p className="font-semibold md:text-[28px] md:mb-5 mb-2 text-lg">Related Post</p>
//                 </div>
//                 <div className="container-wrapper md:flex grid grid-rows-4 gap-2 pb-5 md:gap-5 ">
//                     <div className="relative rounded-t-lg overflow-hidden">
//                         <Image className="w-full  " width={100} height={100} src="https://images.unsplash.com/photo-1476297820623-03984cf5cdbb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//                         <span className="absolute top-0 right-0 rounded-badge px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
//                         <div className="border rounded-b-lg px-2 bg-white">
//                             <div className="flex mt-3 gap-3 mb-3">
//                                 <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
//                                 <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
//                                 <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
//                             </div>
//                             <div className=" line-clamp-3 my-2">
//                                 <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
//                                 <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
//                             </div>
//                         </div>
//                     </div>
//                     {/* repeat */}
//                     <div className="relative rounded-t-lg overflow-hidden">
//                         <Image className="w-full  " height={100} width={100} src="https://images.unsplash.com/photo-1476297820623-03984cf5cdbb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//                         <span className="absolute top-0 right-0 rounded-badge px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
//                         <div className="border rounded-b-lg px-2 bg-white">
//                             <div className="flex mt-3 gap-3 mb-3">
//                                 <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
//                                 <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
//                                 <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
//                             </div>
//                             <div className=" line-clamp-3 my-2">
//                                 <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
//                                 <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
//                             </div>
//                         </div>
//                     </div>
//                     {/* repeat */}
//                     <div className="relative rounded-t-lg overflow-hidden">
//                         <Image className="w-full  " width={100}
//                         height={100} src="https://images.unsplash.com/photo-1476297820623-03984cf5cdbb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//                         <span className="absolute top-0 right-0 rounded-badge px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
//                         <div className="border rounded-b-lg px-2 bg-white">
//                             <div className="flex mt-3 gap-3 mb-3">
//                                 <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
//                                 <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
//                                 <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
//                             </div>
//                             <div className=" line-clamp-3 my-2">
//                                 <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
//                                 <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
//                             </div>
//                         </div>
//                     </div>
//                     {/* repeat */}
//                     <div className="relative rounded-t-lg overflow-hidden">
//                         <Image className="w-full  " height={100}
//                         width={100} src="https://images.unsplash.com/photo-1476297820623-03984cf5cdbb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//                         <span className="absolute top-0 right-0 rounded-badge px-2 text-[12px] font-semibold text-white bg-primary mt-2 mr-2">Best Deal</span>
//                         <div className="border rounded-b-lg px-2 bg-white">
//                             <div className="flex mt-3 gap-3 mb-3">
//                                 <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
//                                 <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
//                                 <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
//                             </div>
//                             <div className=" line-clamp-3 my-2">
//                                 <p className="font-semibold text-[18px]">Lorem, ipsum dolor.</p>
//                                 <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab deserunt sunt dolorum natus similique hic, asperiores omnis tempore, minus dolorem, mollitia quod magni perspiciatis praesentium? Sequi mollitia non ea sint.</p>
//                             </div>
//                         </div>
//                     </div>
//                     {/* repeat */}
//                 </div>
//             </div>
//         </div>
//     )
// }

import React, { useEffect, useState } from "react";
import "../../../app/globals.css";
import DesktopHeader from "@/components/Header/DesktopHeader/desktopHeader";
import Image from "next/image";
import Footer from "@/components/Footer";
import SuggestedBlog from "@/components/Blog/Blog-Deatil/SuggestedBlog";
import { Link as ScrollLink } from "react-scroll";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useRouter } from "next/router";
import BlogSuggestedCardPackages from "@/components/Blog/BlogSuggestedCardPackages";
const fetchPost = async (id) => {
  const data = await fetch(`/api/blog/posttitle?title=${id}`, {
    method: "GET",
  });
  return await data.json();
};
const Detail = () => {
  const router = useRouter();
  // console.log("..........................................",router)
  const [detailData, setDetailData] = useState({});
  const { post, detail } = router.query;

  useEffect(() => {
    if (detail) {
      fetchPost(detail).then((res) => {
        setDetailData(res?.data || {});
      });
    }
  }, [detail]);
  console.log("blogpost response is here -----> ", detailData?.blogQuestions);
  return (
    <div>
      <DesktopHeader />
      <Breadcrumbs />
      {/* Blog Hero Section */}
      <div className="bg-slate-100 md:py-16 py-8">
        <div className="container-wrapper">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="relative w-full h-60 overflow-hidden md:hidden block mb-5">
              <img
                width={100}
                height={100}
                className="top-0 left-0 w-full h-full object-cover object-center rounded-lg"
                src={detailData?.videoPath || ""}
                alt="images"
              />
            </div>
            <div className="p-5 flex flex-col justify-between items-start w-full h-80 md:h-96 lg:h-[24rem] overflow-hidden rounded-lg shadow-lg bg-white">
              <div className="flex justify-between w-full text-xs text-gray-500">
                {post === "blog" && (
                  <div>
                    <h2 className=" font-bold">Pradhumn</h2>
                    <p className="pl-4">writer</p>
                  </div>
                )}
                {post === "travel-guide" && (
                  <h5>
                    {new Date(detailData?.updatedAt).toLocaleDateString()}
                  </h5>
                )}
                {post === "travel-guide" && <h5>{detailData?.time} min</h5>}
                {post === "news" && (
                  <h5>
                    {new Date(detailData?.updatedAt).toLocaleDateString()}
                  </h5>
                )}
                {post === "news" && <h5>{detailData?.time} min</h5>}
                {post === "blog" && (
                  <div>
                    <h5>
                      {new Date(detailData?.updatedAt).toLocaleDateString()}
                    </h5>
                    <p>{detailData?.time} min</p>
                  </div>
                )}
              </div>
              <h1 className="xl:text-[37px] text-xl leading-tight text-para font-semibold">
                {detailData?.title}
              </h1>
              <p className="md:text-para text-sm line-clamp-3">
                {detailData?.description}
              </p>
              <div className="flex xl:gap-5 gap-3 flex-wrap">
                {detailData?.category?.map((item) => (
                  <button
                    key={item?._id}
                    className=" md:px-5 px-3 py-1 rounded-full shadow-md bg-[#C8E4F8] text-blue-500 text-xs"
                  >
                    {item?.category}
                  </button>
                ))}

              </div>
            </div>
            <div className="relative w-full h-80 md:h-96 lg:h-[24rem] overflow-hidden py-10 md:block hidden">
              <Image
                className="top-0 left-0 w-full h-full object-cover object-center rounded-r-lg"
                src={
                  detailData?.videoPath ||
                  "https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="Image"
                width={100}
                height={100}
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Blog Detail section start*/}
      <div className="container-wrapper py-10">
        <div className="  grid grid-cols-1 xl:grid-cols-[1fr,2fr]">
          <div className="pt-5 pr-5 ">
            <div className="sticky top-40 z-10">
              <div className="">
                {detailData?.blogQuestions?.map((item, i) => (
                  <ScrollLink
                    to={`${item?._id}st`}
                    key={i}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <p className="text-md font-medium mb-2 hover:cursor-pointer hover:text-primary">
                      {item?.title}
                    </p>
                    {item?.blogSubQuestion?.questions?.length > 0 && (
                      <ol className="text-para font-medium ml-10">
                        {item?.blogSubQuestion?.questions?.map((item1, k) => (
                          <li className="hover:cursor-pointer hover:text-primary">
                            <ScrollLink
                              to={`${item?._id}st${k}`}
                              key={i}
                              spy={true}
                              smooth={true}
                              offset={-100}
                              duration={500}
                            >
                              <p> {item1?.title}</p>
                            </ScrollLink>
                          </li>
                        ))}
                      </ol>
                    )}
                  </ScrollLink>
                ))}

              </div>
            </div>
          </div>
          <div className="pl-5">
            <div id="ItinerarySubSection" className="mt-5">
              <div
                dangerouslySetInnerHTML={{ __html: detailData?.contentsummary }}
              />
              <p className="text-base leading-relaxed">
                With so many corporate travel apps on the market, it can be
                difficult to know which are worth using. Never fear we have
                rounded up the top eight apps and a few bonus business travel
                tips to help you get started.
              </p>
            </div>
            {detailData?.blogQuestions?.map((item, i) => (
              <div className="pt-7" id={`${item?._id}st`} key={i}>
                <h3 className="text-[30px] font-medium mb-2">{item?.title}</h3>
                <p className="text-base leading-relaxed">
                  <div
                    dangerouslySetInnerHTML={{ __html: item?.information }}
                  />
                </p>
                
                {item?.blogSubQuestion?.questions?.length > 0 &&
                  item?.blogSubQuestion?.questions?.map((item1, k) => (
                    <div className="pt-7" id={`${item?._id}st${k}`} key={i}>
                      <h3 className="text-[30px] font-medium mb-2">
                       {k+1}{"."} {" "} {item1?.title}
                      </h3>
                      <p className="text-base leading-relaxed">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item1?.information,
                          }}
                        />
                      </p>
                    </div>
                  ))}
              </div>
            ))}
           
          </div>
        </div>
      </div>
      {/*  Suggested Blog here*/}
      <div>
        <BlogSuggestedCardPackages addPackage={detailData} />
      </div>
      {/* Blog Detail section end*/}
      <Footer />
    </div>
  );
};

export default Detail;
