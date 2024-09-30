import Layout from "@/components/admin/Layout";
import { AppProvider } from "@/components/admin/context/Package/AddGuest";
import Searchable from "@/components/admin/home/Searchable";

export default function Manage() {
  return (
    <AppProvider>
      <Layout>
          <div className="grid grid-cols-2 justify-between ">
            <Searchable/>
            <div className="grid"></div>
          </div> 
      </Layout>
    </AppProvider>
  );
}
