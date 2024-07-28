
import Layout from "@/components/admin/Layout";
import { AppProvider } from "@/components/admin/context/Package/AddGuest";


const fetchCars = () => {
  return (
    <AppProvider>
      <Layout>
        <div>
          <div>
            <p className='font-semibold text-[28px] mb-10'>New Country Add</p>
          </div>

        </div>
      </Layout>
    </AppProvider>
  )
}

export default fetchCars