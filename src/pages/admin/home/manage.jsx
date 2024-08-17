import Layout from "@/components/admin/Layout";
import { AppProvider } from "@/components/admin/context/Package/AddGuest";
export default function Manage() {
  return (
    <AppProvider>
      <Layout>
          <div>Manage</div>
      </Layout>
    </AppProvider>
  )
}