import React, { useEffect, useState } from "react";
import "../../../app/globals.css";
import DesktopHeader from "@/components/Header/DesktopHeader/desktopHeader";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";
import BlogSuggestedCardPackages from "@/components/Blog/BlogSuggestedCardPackages";
import Navigation from "@/components/Blog/BlogNavigation";
import BlogBredcrumb from "@/components/Blog/BlogBredcrumb";
import { useCarPopupContext } from "@/components/admin/context/CarPopupCalculation";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import Head from "next/head";
const fetchPost = async (id) => {
  const data = await fetch(`/api/blog/posttitle?title=${id}`, {
    method: "GET",
  });
  return await data.json();
};

const fetchNavLinkPackages = async (type, location, id) => {
  const data = await fetch(
    `/api/blog/navlink-travel-guide?blogType=${type}&location=${location}&id=${id}`
  );
  return await data.json();
};
const Detail = (pageprops) => {
  const { setServerSideProps } = useCarPopupContext();
  useEffect(() => {
    if (pageprops) {
      setServerSideProps(pageprops || {});
    }
  }, [pageprops]);
  const router = useRouter();
  const [detailData, setDetailData] = useState({});
  const { post, detail } = router.query;
  const [navLinkData, setNavLinkData] = useState([]);

  useEffect(() => {
    if (detail) {
      fetchPost(detail).then((res) => {
        // console.log("res====> ",res)
        setDetailData(res?.data || {});
      });
    }
  }, [detail]);

  useEffect(() => {
    if (detailData) {
      fetchNavLinkPackages(
        detailData?.blogType,
        detailData?.location,
        detailData?._id
      ).then((res) => {
        // console.log("nav link packages is here ----> ",res?.data)
        setNavLinkData(res?.data || []);
      });
    }
  }, [detailData?.location]);
  // console.log("travel-guide packages",detail)

  // useEffect(()=>{
  //   if(navLinkData?.length>0){
  //     const data=navLinkData?.filter(item=>item?._id!==detailData?._id);
  //     if(detailData){
  //       data.unshift(detailData);
  //       setNavLinkData(data);
  //     }
  //   }
  // },[navLinkData,detailData])
  // console.log("blogpost response is here -----> ", detailData);

  // Event Schema JSON-LD
  const articleSchema = 
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://www.bizarexpedition.com/travel/${detailData?.blogType}/${detailData?.title}`
    },
    "headline": detailData?.title || detailData?.blogSeo?.title,
    "description": "i",
    "image": `https://www.bizarexpedition.com/${detailData?.filename}`,
    "author": {
    "@type": "Organization",
    "name": "BizareXpedition",
    "url": `https://www.bizarexpedition.com/travel/${detailData?.blogType}/${detailData?.title}`
    },
    "publisher": {
    "@type": "Organization",
    "name": "Bizarexpedition",
    "logo": {
    "@type": "ImageObject",
    "url": "https://www.bizarexpedition.com/bx/images/logo/15903060991.png"
    }
    },
    "datePublished": detailData?.writer?.createdAt,
    "dateModified": detailData?.writer?.updatedAt
   }

  return (
    <>
      {/* Head Section with Organization Schema */}
      <Head>
        <title>{detailData?.title || detailData?.blogSeo?.title } | BizareXpedition™️</title>
        <meta name="description"
          content={ detailData?.blogSeo?.description || "Your go-to source for travel inspiration, expert guides, and the latest travel news. Join BizareXpedition™️ to explore unforgettable destinations and stay updated on travel trends."}
        />
        <meta
          name="keywords"
          content={ detailData?.blogSeo?.keywords || "travel blog, travel guide, travel news, destination tips, travel insights, BizareXpedition, adventure travel, cultural exploration, travel excellence"}
        />
        {/* Author and Robots */}
        <meta name="author" content="BizareXpedition" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph for Social Media */}
        <meta property="og:title" content={detailData?.title || detailData?.blogSeo?.title} />
        <meta property="og:description" content={detailData?.blogSeo?.description || "Your go-to source for travel inspiration, expert guides, and the latest travel news. Join BizareXpedition™️ to explore unforgettable destinations and stay updated on travel trends."} />
        <meta property="og:image" content={`https://www.bizarexpedition.com/${detailData?.filename} || 'https://www.bizarexpedition.com/default-meta-image.jpg'}`} />
        <meta property="og:url" content={`https://www.bizarexpedition.com/travel/${detailData?.blogType}/${detailData?.title}`} />
        <meta property="og:type" content="website" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${detailData?.title || detailData?.blogSeo?.title} | BizareXpedition™️`} />
        <meta name="twitter:description" content={detailData?.blogSeo?.description || "Your go-to source for travel inspiration, expert guides, and the latest travel news. Join BizareXpedition™️ to explore unforgettable destinations and stay updated on travel trends."} />
        <meta name="twitter:image" content={`https://www.bizarexpedition.com/${detailData?.filename} || 'https://www.bizarexpedition.com/default-meta-image.jpg'}`} />
        {/* Organization Schema */}
        <OrganizationSchema />
        {/* Event Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </Head>
      <main>
        <div>
          <DesktopHeader />
          <BlogBredcrumb />
          {detailData?.blogType === "travel-guide" && (
            <Navigation navLinkData={navLinkData} detailData={detailData} />
          )}
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
                      <div className=" flex gap-3">
                        <div>
                          <Image
                            src={detailData?.writer?.path}
                            height={70}
                            width={70}
                            className="rounded-full w-[65px] h-[70px]"
                            alt="Writer's image"
                          />
                        </div>
                        <div>
                          <h2 className=" font-bold">
                            {detailData?.writer?.blogwriter}
                          </h2>
                          <p className="pl-4">writer</p>
                        </div>
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
                            {item?.blogSubQuestion?.questions?.map(
                              (item1, k) => (
                                <li
                                  key={i}
                                  className="hover:cursor-pointer hover:text-primary"
                                >
                                  <ScrollLink
                                    to={`${item?._id}st${k}`}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                  >
                                    <p> {item1?.title}</p>
                                  </ScrollLink>
                                </li>
                              )
                            )}
                          </ol>
                        )}
                      </ScrollLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="pl-5">
                <div id="ItinerarySubSection" className="mt-5">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: detailData?.contentsummary,
                    }}
                  ></p>
                </div>
                <div class="overflow-x-auto border rounded-t-md mt-7 ">
                  <table class="min-w-full table-auto border">
                    <thead>
                      <tr class="bg-gray-100">
                        {detailData?.table?.tableColumn?.map((item, i) => (
                          <th key={i} class="px-4 py-2 text-left">
                            {item}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {detailData?.table?.tableData?.map((item, i) => (
                        <tr key={i} class="border-b">
                          {detailData?.table?.tableColumn?.map((item1, k) => (
                            <td key={k} class="px-4 py-2">
                              {item[item1]}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {detailData?.blogQuestions?.map((item, i) => (
                  <div className="pt-7" id={`${item?._id}st`} key={i}>
                    <h3 className="text-[30px] font-medium mb-2">
                      {item?.title}
                    </h3>
                    <p className="text-base leading-relaxed">
                      <div
                        dangerouslySetInnerHTML={{ __html: item?.information }}
                        className="blog-travel-news"
                      />
                    </p>
                    {item?.blogSubQuestion?.questions?.length > 0 &&
                      item?.blogSubQuestion?.questions?.map((item1, k) => (
                        <div className="pt-7" id={`${item?._id}st${k}`} key={i}>
                          <h3 className="text-[30px] font-medium mb-2">
                            {k + 1}
                            {"."} {item1?.title}
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
          <div className="mt-5 mb-10">
            <BlogSuggestedCardPackages addPackage={detailData} />
          </div>
          {/* Blog Detail section end*/}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Detail;

