import Image from "next/image";
import "../app/globals.css";
import HeroSection from "@/components/Home/HeroSection";
import HorizontalCard from "@/components/Home/Cards/HorizontalCard";
import Card4 from "@/components/Home/Cards/Card4";
import ReviewsCard from "@/components/ReviewsCard";
import Footer from "@/components/Footer";
import Cardwork from "@/components/Home/Cards/cardwork";
import ArrowSection from "@/components/Home/Cards/ArrowSection";
import DesktopHeader from "@/components/Header/DesktopHeader/desktopHeader";
import State from "@/components/Home/Cards/State";
import { useEffect, useState } from "react";
import CarArrowSection from "@/components/Home/Cards/CarArrowSection";
import StateCard from "@/components/Home/Cards/StateCard";
import Link from "next/link";
import CarPackageCarousel from "@/components/car-rental/CarPackageCarouel";
import TravelGuideCarousel from "@/components/TravelGuideCarousel";
import BlogsCarousel from "@/components/BlogsCarousel";
import { useCarPopupContext } from "@/components/admin/context/CarPopupCalculation";
import Head from "next/head";
import OrganizationSchema from "@/components/seo/OrganizationSchema";

export default function Home(props) {
  // console.log("initialCity----> is here ", props);
  const [states, setStates] = useState([]);
  const [homePackages, SetHomePackages] = useState(props?.multipost || []);
  const [homeSinglePackages, setSingleHomePackages] = useState(props?.post || []);
  const [packages, setPackages] = useState([]);
  const [cityPackages, setCityPackages] = useState([]);
  const [category1, setCategory1] = useState([]);
  const [category2, setCategory2] = useState([]);
  const [category3, setCategory3] = useState([]);
  const [carPackages, setCarPackages] = useState([]);
  const [carCityPromos, setCarCityPromo] = useState([]);
  const [travelGuidePackage, setTravelGuidePackage] = useState([]);
  const [blogsPackages, setBlogsPackages] = useState([]);
  const boxShadowStyle = {
    boxShadow: "inset 0px -50px 20px  rgba(0, 0, 0, 0.8)",
  };

  const { setServerSideProps } = useCarPopupContext();

  useEffect(() => {
    if (props) {
      setServerSideProps(props || {});
      setSingleHomePackages(props?.post || [])
      SetHomePackages(props?.multipost || [])
    }

  }, [props]);
  useEffect(() => {
    const data = homePackages?.filter((item) => item?.category === "category1");
    setStates(data?.[0]?.options || []);
    const data1 = homePackages?.filter(
      (item) => item?.category === "category5"
    );
    setPackages(data1?.[0]?.options || []);
    const data2 = homePackages?.filter(
      (item) => item?.category === "category2"
    );
    const data4 = homePackages?.filter(
      (item) => item?.category === "category4"
    );
    const data5 = homePackages?.filter(
      (item) => item?.category === "category6"
    );
    const data6 = homePackages?.filter(
      (item) => item?.category === "category8"
    );
    const data7 = homePackages?.filter(
      (item) => item?.category === "category9"
    );

    setCarPackages(data4?.[0]?.options || []);
    setCityPackages(data2?.[0]?.options || []);
    setCarCityPromo(data5?.[0]?.options || []);
    setTravelGuidePackage(data6?.[0]?.options || []);
    setBlogsPackages(data7?.[0]?.options || []);
  }, [homePackages]);
  useEffect(() => {
    const data = homeSinglePackages?.filter(
      (item) => item?.category === "category1"
    );
    setCategory1(data);
    const data1 = homeSinglePackages?.filter(
      (item) => item?.category === "category5"
    );
    setCategory2(data1);
    const data2 = homeSinglePackages?.filter(
      (item) => item?.category === "category2"
    );
    setCategory3(data2);
  }, [homeSinglePackages]);
  // useEffect(()=>{
  //   getStetes().then(res=>console.log("satets site map ",res))
  // },[])

  return (
    <>
      <Head>
        <title>BizareXpedition™️ - A Signature of Excellence</title>
        <meta name="description" content="Plan your perfect trip with BizareXpedition™️." />
         {/* Organization Schema */}
         <OrganizationSchema/>
      </Head>
      <main>
        <DesktopHeader multipost={props?.multipost} />
        <HeroSection />
        {/* First image and text */}
        <div className="container-wrapper  md:py-11 py-5">
          <div className=" md:grid flex md:flex-col flex-col-reverse md:grid-cols-2 w-full lg:gap-16 text-wrap md:items-center ">
            <div className=" md:shrink-0 md:mt-0 mt-5 lg:ml-0 ml-2">
              <p className=" text-amber-600   font-semibold mb-0.5">
                {category1?.[0]?.subtitle}
              </p>
              <h1 className=" md:text-[25px] text-xl  font-medium ">
                {category1?.[0]?.title}
              </h1>
              <h1 className="md:text-[16px] text-para line-clamp-3 mt-2.5 mb-5">
                {category1?.[0]?.description}
              </h1>
              <Link
                href={
                  `/speciality-tours/` +
                  category1?.[0]?.options?.[0]?.selectedItem +
                  "-tour-packages"
                }
              >
                <button className="shadow-md bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 md:px-[50px] px-5 rounded-full">
                  Know more
                </button>
              </Link>
            </div>
            <div className=" md:ml-28">
              <Link
                href={
                  `/speciality-tours/` +
                  category1?.[0]?.options?.[0]?.selectedItem +
                  "-tour-packages"
                }
              >
                <Image
                  width={400}
                  height={200}
                  className="object-cover rounded-[17px] w-[600px] h-[265px] md:w-[500px] md:h-[265px]"
                  src={
                    "public/" + category1?.[0]?.options?.[0]?.posterPath
                      ? category1?.[0]?.options?.[0]?.posterPath
                      : "https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt="erew"
                />
              </Link>
            </div>
          </div>
        </div>
        {/* carousel all state card*/}
        <div>
          <StateCard states={states} />
        </div>
        {/* Second image and text */}
        <div className="container-wrapper  md:py-11 py-5">
          <div className=" md:grid flex md:flex-col flex-col-reverse md:grid-cols-2 w-full lg:gap-16 text-wrap md:items-center ">
            <div className=" md:shrink-0 md:my-0 my-5 lg:ml-0 ml-2">
              <p className=" text-amber-600 font-semibold mb-0.5">
                {category3?.[0]?.subtitle}
              </p>
              <h1 className=" md:text-[25px] text-xl  font-medium">
                {category3?.[0]?.title}
              </h1>
              <h1 className="md:text-[16px] text-para line-clamp-3 mt-2.5 mb-5">
                {category3?.[0]?.description}
              </h1>
              <Link
                href={
                  `/speciality-tours/` +
                  category3?.[0]?.options?.[0]?.selectedItem +
                  "-tour-packages"
                }
              >
                <button className="shadow-md bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 md:px-[50px] px-5 rounded-full">
                  Know more
                </button>
              </Link>
            </div>
            <div className="md:ml-28 ">
              <Link
                href={
                  `/speciality-tours/` +
                  category3?.[0]?.options?.[0]?.selectedItem +
                  "-tour-packages"
                }
              >
                <Image
                  className="object-cover rounded-[17px] w-[600px] h-[265px] md:w-[500px] md:h-[265px]"
                  width={400}
                  height={200}
                  src={
                    category3?.[0]?.options?.[0]?.posterPath
                      ? category3?.[0]?.options?.[0]?.posterPath
                      : "https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt="gfdg"
                />
              </Link>
            </div>
          </div>
        </div>
        {/* Third first image and text */}
        <div className="container-wrapper md:pb-10 pb-5">
          <div className=" md:grid flex md:flex-col flex-col md:grid-cols-2 w-full md:gap-5  text-wrap md:items-center ">
            <div className="">
              <Link href={"/package/" + category2?.[0]?.options?.[0]?.pageUrl}>
                <Image
                  className=" object-cover rounded-[17px] w-[600px] h-[265px] md:w-[420px] md:h-[265px]"
                  width={450}
                  height={450}
                  src={category2?.[0]?.options?.[0]?.uploads?.[0]}
                  alt="fdg"
                />
              </Link>
            </div>
            <div className="md:my-0 my-5 lg:ml-0 ml-2">
              <p className=" text-amber-600  font-semibold mb-0.5">
                {category2?.[0]?.subtitle}
              </p>
              <h1 className="md:text-[25px] text-xl font-medium">
                {category2?.[0]?.title}
              </h1>
              <h1 className="md:text-[16px] text-para line-clamp-3 mt-2.5 mb-5">
                {category2?.[0]?.description}
              </h1>
              <div className="flex md:justify-between gap-3">
                <Link href={"/package/" + category2?.[0]?.options?.[0]?.pageUrl}>
                  <button className="shadow-md bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 md:px-[50px] px-5 rounded-full">
                    Know more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel Banner Images */}
        <div className="md:pb-10 pb-5 xl:mx-16 md:mx-3">
          <Cardwork />
        </div>
        {/* horizontal card */}
        <div className="">
          {cityPackages?.length > 0 && (
            <div className="container-wrapper text-center pb-2">
              <p className="md:text-[25px] text-xl font-medium mb-1">
                Your Next Remarkable Adventure Awaits
              </p>
            </div>
          )}
          <div className="container-wrapper justify-center  flex flex-wrap">
            {cityPackages?.length>0&&cityPackages?.map((item, i) => (
              <HorizontalCard key={i} item={item} />
            ))}
          </div>
        </div>
        <div>
          <Card4 packages={packages} />
        </div>
        {/* Card Kuoni copy */}

        <div className="container-wrapper md:mt-10 md:pb-2 md:pt-10">
          <div className=" md:mt-4 mt-4">
            <ArrowSection />
          </div>
        </div>
        {/* state code start  */}
        <div>
          <State />
        </div>
        {/* Our Promise */}
        <div>{/* <Promises /> */}</div>
        {/* Country card  */}
        <div>{/* <Card2 /> */}</div>
        <div className="container-wrapper md:mt-10 md:pb-2 md:pt-10">
          <div className=" md:mt-4 mt-4">
            <CarArrowSection carCityPromos={carCityPromos} />
          </div>
        </div>
        <div>
          <CarPackageCarousel carPackageData={carPackages} />
        </div>
        <div>
          <TravelGuideCarousel carPackageData={travelGuidePackage} />
        </div>
        <div>
          <BlogsCarousel carPackageData={blogsPackages} />
        </div>
        <div>
          <ReviewsCard />
        </div>
        <Footer />
      </main>
    </>
  );
}

// import Image from "next/image";
// import "../app/globals.css";
// import dynamic from "next/dynamic";
// import { useEffect, useState, Suspense } from "react";
// import { useCarPopupContext } from "@/components/admin/context/CarPopupCalculation";
// import Head from "next/head";
// import Link from "next/link";
// import OrganizationSchema from "@/components/seo/OrganizationSchema";

// // Dynamically import components with lazy loading
// const HeroSection = dynamic(() => import("@/components/Home/HeroSection"), {
//   loading: () => (
//     <div className="loading-placeholder h-[400px] bg-gray-200 animate-pulse"></div>
//   ),
//   ssr: true,
// });

// const HorizontalCard = dynamic(
//   () => import("@/components/Home/Cards/HorizontalCard"),
//   {
//     ssr: true,
//   }
// );

// const Card4 = dynamic(() => import("@/components/Home/Cards/Card4"), {
//   loading: () => (
//     <div className="loading-placeholder h-[300px] bg-gray-200 animate-pulse"></div>
//   ),
//   ssr: true,
// });

// const ReviewsCard = dynamic(() => import("@/components/ReviewsCard"), {
//   loading: () => (
//     <div className="loading-placeholder h-[200px] bg-gray-200 animate-pulse"></div>
//   ),
//   ssr: false,
// });

// const Footer = dynamic(() => import("@/components/Footer"), {
//   ssr: true,
// });

// const Cardwork = dynamic(() => import("@/components/Home/Cards/cardwork"), {
//   loading: () => (
//     <div className="loading-placeholder h-[200px] bg-gray-200 animate-pulse"></div>
//   ),
//   ssr: false,
// });

// const ArrowSection = dynamic(
//   () => import("@/components/Home/Cards/ArrowSection"),
//   {
//     ssr: false,
//   }
// );

// const DesktopHeader = dynamic(
//   () => import("@/components/Header/DesktopHeader/desktopHeader"),
//   {
//     ssr: true,
//   }
// );

// const State = dynamic(() => import("@/components/Home/Cards/State"), {
//   loading: () => (
//     <div className="loading-placeholder h-[200px] bg-gray-200 animate-pulse"></div>
//   ),
//   ssr: false,
// });

// const CarArrowSection = dynamic(
//   () => import("@/components/Home/Cards/CarArrowSection"),
//   {
//     ssr: false,
//   }
// );

// const StateCard = dynamic(() => import("@/components/Home/Cards/StateCard"), {
//   loading: () => (
//     <div className="loading-placeholder h-[200px] bg-gray-200 animate-pulse"></div>
//   ),
//   ssr: false,
// });

// const CarPackageCarousel = dynamic(
//   () => import("@/components/car-rental/CarPackageCarouel"),
//   {
//     loading: () => (
//       <div className="loading-placeholder h-[300px] bg-gray-200 animate-pulse"></div>
//     ),
//     ssr: false,
//   }
// );

// const TravelGuideCarousel = dynamic(
//   () => import("@/components/TravelGuideCarousel"),
//   {
//     loading: () => (
//       <div className="loading-placeholder h-[300px] bg-gray-200 animate-pulse"></div>
//     ),
//     ssr: false,
//   }
// );

// const BlogsCarousel = dynamic(() => import("@/components/BlogsCarousel"), {
//   loading: () => (
//     <div className="loading-placeholder h-[300px] bg-gray-200 animate-pulse"></div>
//   ),
//   ssr: false,
// });

// // Create a lazy-loaded Image component
// const LazyImage = ({
//   src,
//   alt,
//   width,
//   height,
//   className,
//   priority = false,
// }) => {
//   return (
//     <div className="relative">
//       <Image
//         src={
//           src ||
//           "https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         }
//         alt={alt || "BizareXpedition image"}
//         width={width || 400}
//         height={height || 200}
//         className={className || ""}
//         loading={priority ? "eager" : "lazy"}
//         placeholder="blur"
//         blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTVlN2ViIi8+PC9zdmc+"
//       />
//     </div>
//   );
// };

// export default function Home(props) {
//   const [states, setStates] = useState([]);
//   const [homePackages, SetHomePackages] = useState(props?.multipost || []);
//   const [homeSinglePackages, setSingleHomePackages] = useState(
//     props?.post || []
//   );
//   const [packages, setPackages] = useState([]);
//   const [cityPackages, setCityPackages] = useState([]);
//   const [category1, setCategory1] = useState([]);
//   const [category2, setCategory2] = useState([]);
//   const [category3, setCategory3] = useState([]);
//   const [carPackages, setCarPackages] = useState([]);
//   const [carCityPromos, setCarCityPromo] = useState([]);
//   const [travelGuidePackage, setTravelGuidePackage] = useState([]);
//   const [blogsPackages, setBlogsPackages] = useState([]);
//   const [isLoaded, setIsLoaded] = useState(false);

//   const { setServerSideProps } = useCarPopupContext();

//   useEffect(() => {
//     if (props) {
//       setServerSideProps(props || {});
//       setSingleHomePackages(props?.post || []);
//       SetHomePackages(props?.multipost || []);
//     }
//   }, [props, setServerSideProps]);

//   useEffect(() => {
//     // Implement Intersection Observer for lazy loading
//     const handleLazyLoad = () => {
//       if ("IntersectionObserver" in window) {
//         const lazyImages = document.querySelectorAll('img[loading="lazy"]');

//         const imageObserver = new IntersectionObserver((entries, observer) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               const img = entry.target;
//               img.src = img.dataset.src;
//               img.classList.remove("lazy");
//               imageObserver.unobserve(img);
//             }
//           });
//         });

//         lazyImages.forEach((img) => {
//           imageObserver.observe(img);
//         });
//       } else {
//         // Fallback for browsers that don't support IntersectionObserver
//         const lazyImages = document.querySelectorAll('img[loading="lazy"]');
//         lazyImages.forEach((img) => {
//           img.src = img.dataset.src;
//         });
//       }
//     };

//     // Initialize after component has mounted
//     setIsLoaded(true);
//     handleLazyLoad();

//     return () => {
//       setIsLoaded(false);
//     };
//   }, [isLoaded]);

//   useEffect(() => {
//     const data = homePackages?.filter((item) => item?.category === "category1");
//     setStates(data?.[0]?.options || []);
//     const data1 = homePackages?.filter(
//       (item) => item?.category === "category5"
//     );
//     setPackages(data1?.[0]?.options || []);
//     const data2 = homePackages?.filter(
//       (item) => item?.category === "category2"
//     );
//     const data4 = homePackages?.filter(
//       (item) => item?.category === "category4"
//     );
//     const data5 = homePackages?.filter(
//       (item) => item?.category === "category6"
//     );
//     const data6 = homePackages?.filter(
//       (item) => item?.category === "category8"
//     );
//     const data7 = homePackages?.filter(
//       (item) => item?.category === "category9"
//     );

//     setCarPackages(data4?.[0]?.options || []);
//     setCityPackages(data2?.[0]?.options || []);
//     setCarCityPromo(data5?.[0]?.options || []);
//     setTravelGuidePackage(data6?.[0]?.options || []);
//     setBlogsPackages(data7?.[0]?.options || []);
//   }, [homePackages]);

//   useEffect(() => {
//     const data = homeSinglePackages?.filter(
//       (item) => item?.category === "category1"
//     );
//     setCategory1(data);
//     const data1 = homeSinglePackages?.filter(
//       (item) => item?.category === "category5"
//     );
//     setCategory2(data1);
//     const data2 = homeSinglePackages?.filter(
//       (item) => item?.category === "category2"
//     );
//     setCategory3(data2);
//   }, [homeSinglePackages]);

//   return (
//     <>
//       <Head>
//         <title>BizareXpedition™️ - A Signature of Excellence</title>
//         <meta
//           name="description"
//           content="Plan your perfect trip with BizareXpedition™️."
//         />
//         <OrganizationSchema />
//       </Head>
//       <main>
//         <DesktopHeader multipost={props?.multipost} />
//         <Suspense
//           fallback={
//             <div className="loading-placeholder h-[400px] bg-gray-200 animate-pulse"></div>
//           }
//         >
//           <HeroSection />
//         </Suspense>
//         <div className="container-wrapper md:py-11 py-5">
//           <div className="md:grid flex md:flex-col flex-col-reverse md:grid-cols-2 w-full lg:gap-16 text-wrap md:items-center">
//             <div className="md:shrink-0 md:mt-0 mt-5 lg:ml-0 ml-2">
//               <p className="text-amber-600 font-semibold mb-0.5">
//                 {category1?.[0]?.subtitle}
//               </p>
//               <h1 className="md:text-[25px] text-xl font-medium">
//                 {category1?.[0]?.title}
//               </h1>
//               <h1 className="md:text-[16px] text-para line-clamp-3 mt-2.5 mb-5">
//                 {category1?.[0]?.description}
//               </h1>
//               <Link
//                 href={
//                   `/speciality-tours/` +
//                   category1?.[0]?.options?.[0]?.selectedItem +
//                   "-tour-packages"
//                 }
//               >
//                 <button className="shadow-md bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 md:px-[50px] px-5 rounded-full">
//                   Know more
//                 </button>
//               </Link>
//             </div>
//             <div className="md:ml-28">
//               <Link
//                 href={
//                   `/speciality-tours/` +
//                   category1?.[0]?.options?.[0]?.selectedItem +
//                   "-tour-packages"
//                 }
//               >
//                 <LazyImage
//                   className="object-cover rounded-[17px] w-[600px] h-[265px] md:w-[500px] md:h-[265px]"
//                   width={600}
//                   height={265}
//                   src={category1?.[0]?.options?.[0]?.posterPath || ""}
//                   alt="Featured tour"
//                   priority={true}
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div>
//           <Suspense
//             fallback={
//               <div className="loading-placeholder h-[200px] bg-gray-200 animate-pulse"></div>
//             }
//           >
//             <StateCard states={states} />
//           </Suspense>
//         </div>

//         <div className="container-wrapper md:py-11 py-5">
//           <div className="md:grid flex md:flex-col flex-col-reverse md:grid-cols-2 w-full lg:gap-16 text-wrap md:items-center">
//             <div className="md:shrink-0 md:my-0 my-5 lg:ml-0 ml-2">
//               <p className="text-amber-600 font-semibold mb-0.5">
//                 {category3?.[0]?.subtitle}
//               </p>
//               <h1 className="md:text-[25px] text-xl font-medium">
//                 {category3?.[0]?.title}
//               </h1>
//               <h1 className="md:text-[16px] text-para line-clamp-3 mt-2.5 mb-5">
//                 {category3?.[0]?.description}
//               </h1>
//               <Link
//                 href={
//                   `/speciality-tours/` +
//                   category3?.[0]?.options?.[0]?.selectedItem +
//                   "-tour-packages"
//                 }
//               >
//                 <button className="shadow-md bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 md:px-[50px] px-5 rounded-full">
//                   Know more
//                 </button>
//               </Link>
//             </div>
//             <div className="md:ml-28">
//               <Link
//                 href={
//                   `/speciality-tours/` +
//                   category3?.[0]?.options?.[0]?.selectedItem +
//                   "-tour-packages"
//                 }
//               >
//                 <LazyImage
//                   className="object-cover rounded-[17px] w-[600px] h-[265px] md:w-[500px] md:h-[265px]"
//                   width={600}
//                   height={265}
//                   src={category3?.[0]?.options?.[0]?.posterPath || ""}
//                   alt="Featured speciality tour"
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="container-wrapper md:pb-10 pb-5">
//           <div className="md:grid flex md:flex-col flex-col md:grid-cols-2 w-full md:gap-5 text-wrap md:items-center">
//             <div className="">
//               <Link href={"/package/" + category2?.[0]?.options?.[0]?.pageUrl}>
//                 <LazyImage
//                   className="object-cover rounded-[17px] w-[600px] h-[265px] md:w-[420px] md:h-[265px]"
//                   width={450}
//                   height={450}
//                   src={category2?.[0]?.options?.[0]?.uploads?.[0] || ""}
//                   alt="Package thumbnail"
//                 />
//               </Link>
//             </div>
//             <div className="md:my-0 my-5 lg:ml-0 ml-2">
//               <p className="text-amber-600 font-semibold mb-0.5">
//                 {category2?.[0]?.subtitle}
//               </p>
//               <h1 className="md:text-[25px] text-xl font-medium">
//                 {category2?.[0]?.title}
//               </h1>
//               <h1 className="md:text-[16px] text-para line-clamp-3 mt-2.5 mb-5">
//                 {category2?.[0]?.description}
//               </h1>
//               <div className="flex md:justify-between gap-3">
//                 <Link
//                   href={"/package/" + category2?.[0]?.options?.[0]?.pageUrl}
//                 >
//                   <button className="shadow-md bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 md:px-[50px] px-5 rounded-full">
//                     Know more
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="md:pb-10 pb-5 xl:mx-16 md:mx-3">
//           <Suspense
//             fallback={
//               <div className="loading-placeholder h-[200px] bg-gray-200 animate-pulse"></div>
//             }
//           >
//             <Cardwork />
//           </Suspense>
//         </div>

//         <div className="">
//           {cityPackages?.length > 0 && (
//             <div className="container-wrapper text-center pb-2">
//               <p className="md:text-[25px] text-xl font-medium mb-1">
//                 Your Next Remarkable Adventure Awaits
//               </p>
//             </div>
//           )}
//           <div className="container-wrapper justify-center flex flex-wrap">
//             {cityPackages?.length > 0 &&
//               cityPackages?.map((item, i) => (
//                 <Suspense
//                   key={i}
//                   fallback={
//                     <div className="loading-placeholder h-[200px] w-[300px] bg-gray-200 animate-pulse m-2"></div>
//                   }
//                 >
//                   <HorizontalCard key={i} item={item} />
//                 </Suspense>
//               ))}
//           </div>
//         </div>

//         <Suspense
//           fallback={
//             <div className="loading-placeholder h-[300px] bg-gray-200 animate-pulse"></div>
//           }
//         >
//           <Card4 packages={packages} />
//         </Suspense>

//         <div className="container-wrapper md:mt-10 md:pb-2 md:pt-10">
//           <div className="md:mt-4 mt-4">
//             <Suspense
//               fallback={
//                 <div className="loading-placeholder h-[200px] bg-gray-200 animate-pulse"></div>
//               }
//             >
//               <ArrowSection />
//             </Suspense>
//           </div>
//         </div>
// {/* error component */}
//         <Suspense
//           fallback={
//             <div className="loading-placeholder h-[200px] bg-gray-200 animate-pulse"></div>
//           }
//         >
//           <State />
//         </Suspense>

//         <div className="container-wrapper md:mt-10 md:pb-2 md:pt-10">
//           <div className="md:mt-4 mt-4">
//             <Suspense
//               fallback={
//                 <div className="loading-placeholder h-[200px] bg-gray-200 animate-pulse"></div>
//               }
//             >
//               <CarArrowSection carCityPromos={carCityPromos} />
//             </Suspense>
//           </div>
//         </div>

//         <Suspense
//           fallback={
//             <div className="loading-placeholder h-[300px] bg-gray-200 animate-pulse"></div>
//           }
//         >
//           <CarPackageCarousel carPackageData={carPackages} />
//         </Suspense>

//         <Suspense
//           fallback={
//             <div className="loading-placeholder h-[300px] bg-gray-200 animate-pulse"></div>
//           }
//         >
//           <TravelGuideCarousel carPackageData={travelGuidePackage} />
//         </Suspense>

//         <Suspense
//           fallback={
//             <div className="loading-placeholder h-[300px] bg-gray-200 animate-pulse"></div>
//           }
//         >
//           <BlogsCarousel carPackageData={blogsPackages} />
//         </Suspense>

//         <Suspense
//           fallback={
//             <div className="loading-placeholder h-[200px] bg-gray-200 animate-pulse"></div>
//           }
//         >
//           <ReviewsCard />
//         </Suspense>

//         <Footer />
//       </main>
//     </>
//   );
// }
