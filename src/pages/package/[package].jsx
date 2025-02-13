import { useCarPopupContext } from "@/components/admin/context/CarPopupCalculation";
import "../../app/globals.css";
import { AppProvider } from "@/components/admin/context/Package/AddGuest";
import TimeOf from "@/components/car-rental/TimeOf";
import Package1 from "@/components/ItineraryDetail/Departure&Booking/package1";
import { useEffect } from "react";
// import FAQSchema from "@/components/seo/FAQSchema";
// import Head from "next/head";
// export async function getServerSideProps(context) {
//   const packageUrl = context.params.package;
//   const newPackageUrl = packageUrl.replace("-tour-package", " ");
//    const res = await fetch(
//     `http://89.116.34.248:3000/api/public/package/${newPackageUrl}`
//   );
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// }
export default function TourPackage(pageprops) {
     const { setServerSideProps } = useCarPopupContext();
      
        useEffect(() => {
          if(pageprops){
            setServerSideProps(pageprops || {});
          }
          
        }, [pageprops]);
  return (
    <>
        <Package1 />
     
    </>
  );
}
