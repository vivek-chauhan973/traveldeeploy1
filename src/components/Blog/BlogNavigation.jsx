import React, { useEffect, useState } from "react";
import Link from "next/link"; // Import Link from Next.js
import { useRouter } from "next/router"; // Import useRouter hook to track active link
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import DFlyoutLink from "./DropDown";
import DropDownContent from "./DropDownContent";
const Navigation = ({ navLinkData, detailData }) => {
  const router = useRouter(); 

  const [tab, setTab] = useState("");

  useEffect(() => {
    if (navLinkData?.length > 0) {
      const data = navLinkData?.filter((item) => item?._id === detailData?._id);
      setTab(
        `/travel/${router?.query?.post}/${data?.[0]?.title
          ?.split(" ")
          ?.join("-")}`
      );
    }
  }, [navLinkData, detailData, router]);

  const isActive = (path) => {
    return router.pathname === path;
  };

  return (
    <div className="bg-white px-10  py-4 ">
      <nav className="flex space-x-4  overflow-x-auto ove xl:hidden">
        <div className="flex space-x-4   text-lg mb-4 xl:mb-0">
          {navLinkData?.length > 0 &&
            navLinkData?.map((items, i) => (
              <Link
                key={i}
                href={
                  "/travel/" +
                  router?.query?.post +
                  "/" +
                  items?.title?.split(" ")?.join("-")
                }
              >
                <p
                  onClick={() =>
                    setTab(
                      `/travel/${router?.query?.post}/${items?.title
                        ?.split(" ")
                        ?.join("-")}`
                    )
                  }
                  className={`relative px-3 group text-nowrap text-gray-500 hover:text-blue-500 ${
                    isActive(
                      `/travel/${router?.query?.post}/${items?.title
                        ?.split(" ")
                        ?.join("-")}`
                    )
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : ""
                  }`}
                >
                  {items?.title}
                  <span className="absolute left-0 -bottom-2 w-full h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  {tab ===
                    `/travel/${router?.query?.post}/${items?.title
                      ?.split(" ")
                      ?.join("-")}` && (
                    <span className="absolute left-0 -bottom-2 w-full h-1 bg-blue-500 text-blue-500 "></span>
                  )}
                </p>
              </Link>
            ))}
        </div>
      </nav>
      <nav className=" space-x-4 hidden xl:flex">
        <div className="flex space-x-4   text-lg mb-4 xl:mb-0">
          {navLinkData?.length > 0 &&
            navLinkData?.slice(0, 6)?.map((items, i) => (
              <Link
                key={i}
                href={
                  "/travel/" +
                  router?.query?.post +
                  "/" +
                  items?.title?.split(" ")?.join("-")
                }
              >
                <p
                  onClick={() =>
                    setTab(
                      `/travel/${router?.query?.post}/${items?.title
                        ?.split(" ")
                        ?.join("-")}`
                    )
                  }
                  className={`relative px-3 group text-nowrap text-gray-500 hover:text-blue-500 ${
                    isActive(
                      `/travel/${router?.query?.post}/${items?.title
                        ?.split(" ")
                        ?.join("-")}`
                    )
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : ""
                  }`}
                >
                  {items?.title}
                  <span className="absolute left-0 -bottom-2 w-full h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  {tab ===
                    `/travel/${router?.query?.post}/${items?.title
                      ?.split(" ")
                      ?.join("-")}` && (
                    <span className="absolute left-0 -bottom-2 w-full h-1 bg-blue-500 text-blue-500 "></span>
                  )}
                </p>
              </Link>
            ))}
        </div>

        {navLinkData?.length > 7 && (
          <div className="hidden xl:block ">
            <DFlyoutLink
              FlyoutContent={(props) => (
                <DropDownContent
                  {...props}
                  navLinkData={navLinkData}
                />
              )}
            >
              <div className="flex gap-3 items-center">
                <span>More</span>
                <FontAwesomeIcon className="mt-2" icon={faChevronDown} />
              </div>
            </DFlyoutLink>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
