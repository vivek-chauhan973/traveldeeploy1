import { CarPopupProvider } from "@/components/admin/context/CarPopupCalculation";
import React from "react";
import { SessionProvider } from "next-auth/react";
export default function APP({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <CarPopupProvider>
        <Component {...pageProps} />
      </CarPopupProvider>
    </SessionProvider>
  );
}
