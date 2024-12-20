import { AppProvider } from "@/components/admin/context/Package/AddGuest";
import Layout from "@/components/admin/Layout";
import StaticPage from "@/components/admin/StaticPage";
import React from "react";

const pagecreate = () => {
  return (
    <AppProvider>
      <Layout>
        <StaticPage/>
      </Layout>
    </AppProvider>
  );
};

export default pagecreate;
