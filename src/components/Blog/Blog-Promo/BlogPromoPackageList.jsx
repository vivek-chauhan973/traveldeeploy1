import Link from "next/link";
import Pagination from "react-js-pagination";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const BlogPromoPackageList = ({ blogs }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const windowHeight = window.innerHeight;
    const middleOfWindow = windowHeight / 2;
    window.scrollTo({ top: middleOfWindow, behavior: "smooth" });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogs?.slice(indexOfFirstItem, indexOfLastItem);
  const totalItems = blogs?.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if(blogs?.[0]==="not found"){
    return <p className=" text-center my-10 font-semibold">No Records Founds</p>
  }

  return (
    <div>
      <div className="flex flex-wrap gap-6">
        {currentItems?.length > 0 &&
          currentItems?.map((item, i) => (
            <div
              key={i}
              className="relative pb-5 mb-5 w-full md:w-[350px] lg:w-[300px] xl:w-[250px] md:h-[400px] rounded-xl bg-white bg-clip-border text-gray-700 shadow-sm overflow-hidden"
            >
              <div className="flex items-center h-[150px] w-full">
                <Image
                  width={200}
                  height={200}
                  className="h-[220px] mx-5 md:m-0 w-full md:p-0 md:h-full rounded-t-md overflow-hidden object-cover"
                  src={item?.videoPath}
                  alt="ui/ux review check"
                  onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop if fallback also fails
                    e.target.src = "/logo.png"; // Set fallback image if the original image fails to load
                  }}
                />
              </div>
              <div className="h-[300px]">
                <div className="px-5 w-full">
                  <div className="mt-3 flex justify-between">
                    <p className="text-sm">
                      {new Date(item?.updatedAt).toLocaleDateString()}
                    </p>
                    <p className="text-sm">{item?.time} min</p>
                  </div>
                  <div className="my-4">
                    <h5 className="block font-sans text-base leading-relaxed capitalize font-semibold antialiased text-black">
                      {item?.title}
                    </h5>
                  </div>
                  <div className="mb-5">
                    <p
                      className="block text-[12px] font-normal text-gray-800 md:line-clamp-4 line-clamp-2"
                    >
                      {item?.description}
                    </p>
                  </div>
                </div>
                <div className="px-5">
                  <Link
                    href={`/travel/${router?.query?.post}/${item?.title
                      ?.split(" ")
                      ?.join("-")}`}
                    className="mt-3 block w-full select-none rounded-lg bg-gradient-to-r from-orange-500 to-red-500 py-2.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none"
                    type="button"
                  >
                    View details
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-end my-5 list-none">
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={itemsPerPage}
          totalItemsCount={blogs?.length}
          onChange={handlePageChange}
          itemClass="pagination-item"
          linkClass="pagination-link"
          prevPageText="Previous"
          nextPageText="Next"
          firstPageText="1"
          lastPageText={`...${totalPages}`}
          innerClass="pagination"
        />
      </div>
    </div>
  );
};

export default BlogPromoPackageList;
