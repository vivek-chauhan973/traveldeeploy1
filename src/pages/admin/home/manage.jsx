import Layout from "@/components/admin/Layout";
import { AppProvider } from "@/components/admin/context/Package/AddGuest";
import Searchable from "@/components/admin/home/Searchable";
import Searchable1 from "@/components/admin/home/Searchable1";

export default function Manage() {


  return (
    <AppProvider>
      <Layout>
        <div className=" flex flex-col">
          <Searchable />
          <div>
          <Searchable1/>
          
          </div>
        </div>
      </Layout>
    </AppProvider >
  );
}
