import { AppProvider } from "@/components/admin/context/Package/AddGuest";
import Layout from "@/components/admin/Layout";
import Image from 'next/image';

export default function IconManagement() {

  return (
    <AppProvider>
      <Layout>
        <p className="md:text-[28px] text-xl font-semibold">Icon Managementt</p>
        <div className="md:my-10 my-7 bg-white px-5 py-4 rounded-md">
          <p className="md:text-[20px] text-base font-semibold">Bizare Expenditure Main Website</p>
          <div>
            <div className="flex md:flex-row flex-col md:gap-10 gap-5 md:my-10 my-5 items-center xl:pl-5">
              <input type="file" className="mb-4" />
              <div>
                <Image className="md:w-32 w-auto h-auto shadow-md mb-4" src="" alt="" width={25} height={25} />
                <div>
                  <p>Title</p>
                  <input
                    className="border px-2 py-0.5 mb-2 w-full md:w-auto rounded"
                    type="text"
                    value=""
                  />
                </div>
                <div>
                  <p>Alt</p>
                  <input
                    className="border px-2 py-0.5 w-full md:w-auto rounded"
                    type="text"
                    value=""
                  />
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col md:gap-5 gap-3">
              <button className="bg-[#0d6efd] text-white px-3 py-2 w-full md:w-auto rounded-sm" >
                Upload Icon
              </button>
              <button className="bg-red-600 text-white px-3 py-2 w-full md:w-auto rounded-sm" >
                Remove
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </AppProvider>
  );
}
