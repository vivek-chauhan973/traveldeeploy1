import Layout from "@/components/admin/Layout";
import { AppProvider } from "@/components/admin/context/Package/AddGuest";
import Searchable from "@/components/admin/home/Searchable";

export default function Manage() {
  return (
    <AppProvider>
      <Layout>
        <div>
          <Searchable />
        </div>
      </Layout>
    </AppProvider >
  );
}
