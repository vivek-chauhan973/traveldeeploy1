import Layout from "@/components/admin/Layout";
import Searchable from "@/components/admin/home/Searchable";
import Searchable1 from "@/components/admin/home/Searchable1";

export default function Manage() {


  return (
 
      <Layout>
        <div className=" flex flex-col">
          <Searchable />
          <Searchable1/>
        </div>
      </Layout>
 
  );
}
