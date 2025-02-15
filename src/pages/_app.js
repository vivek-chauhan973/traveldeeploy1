import { CarPopupProvider } from "@/components/admin/context/CarPopupCalculation";
import React, { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import App from "next/app";
import { AppProvider } from "@/components/admin/context/Package/AddGuest";

APP.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  // const res = await fetch("/api/search-api");
  // const data = await res.json();

  try {
    const [data, data1, data2, data3,data4] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home/homefooter`).then((res) => res.json()),
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/homefooter`).then((res) => res.json()),
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/package-setting/category/get-categories`).then((res) => res.json()),
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home/destinationHeader`).then((res) => res.json()),
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/search-api`).then((res) => res.json()),
    ]);

    const state = data3?.data || [];
    const firstStateId = state?.[0]?.options?.[0]?._id || "";

    // Fetch cities for the first state
    const citiesRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home/headerCity?id=${firstStateId}`);
    const citiesData = await citiesRes.json();

    return {
      ...appProps,
      pageProps: {
        ...appProps.pageProps,
        post: data?.data || [],
        multipost: data1?.data || [],
        category: data2?.data || [],
        state,
        initialCity: citiesData?.data || [],
        firstStateId,
        server_Packages : data4?.data||[]
      },
    };
  } catch (error) {
    console.error("Error fetching data in _app.js:", error);
    return { ...appProps, pageProps: { ...appProps.pageProps } };
  }
};
async function loginToZoho() {
  const res = await fetch("/api/zoho/auth");
  return res.json();
}
export default function APP({ Component, pageProps }) {
 
  useEffect(()=>{
    loginToZoho().then(res=>console.log("zoho token is here ---> ",res))
  },[])
  return (
    <SessionProvider session={pageProps.session}>
      <AppProvider>
      <CarPopupProvider>
        <Component {...pageProps} />
      </CarPopupProvider>
      </AppProvider>
    </SessionProvider>
    
  );
}
