import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useCarPopupContext } from "@/components/admin/context/CarPopupCalculation";
import Link from "next/link";
const SearchPackage = ({ setSearchPackagePopup }) => {
    const { searchedData } = useCarPopupContext();
    console.log("searchedData", searchedData);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="md:block hidden">
            <div className="fixed top-28 left-0 flex items-center justify-center z-50 -mt-4">
                <div className="bg-white rounded-b-xl shadow-xl z-50 w-[100vw] xl:h-[60vh] md:h-[65vh] lg:h-[50vh] overflow-y-scroll">
                    <div className="pr-5 pt-1 flex justify-between items-center mt-1">
                        <h2 className="text-md font-semibold lg:ml-16 ml-10 my-1">Match tour Packages</h2>
                        <FontAwesomeIcon
                            icon={faXmark}
                            className="h-5 w-5 hover:bg-gray-100 rounded-full cursor-pointer p-1 text-gray-500"
                            onClick={() => setSearchPackagePopup(false)}
                        />
                    </div>
                    <div className="w-full h-auto bg-white flex justify-start gap-10 flex-wrap lg:px-16 px-10 py-3 ">
                        {searchedData && (
                            searchedData?.slice(0, 50).map((pac, i) => {
                                return (
                                    <div key={i} className="w-48 h-52">
                                        <div className="relative w-full h-[70%]">
                                            <Link href={"/package/" + pac?.url + "-tour-package"}>
                                                <Image
                                                    className="w-full h-full object-cover rounded-md cursor-pointer"
                                                    src={pac?.uploads?.[0] || '/logo.png'}
                                                    alt={pac?.name}
                                                    width={200}
                                                    height={200}
                                                    onError={(e) => {
                                                        e.target.onerror = null;
                                                        e.target.src = "/logo.png";
                                                    }}
                                                />
                                            </Link>
                                            <div className="absolute top-2">
                                                <div className="py-1 text-xxs text-white flex gap-1 items-center rounded-r-md pl-1 pr-2 bg-black">
                                                    {pac?.days > 1 && (
                                                        <>{pac?.days - 1} Night{pac?.days - 1 > 1 ? "s" : ""} / </>
                                                    )}
                                                    {pac?.days} Day{pac?.days > 1 ? "s" : ""}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full h-[30%] px-2 py-2 flex flex-col ">
                                            <h2 className="text-para font-medium">
                                                <Link href={"/package/" + pac?.url + "-tour-package"}>
                                                    {pac?.name}
                                                </Link>
                                            </h2>
                                        </div>
                                    </div>
                                )
                            })
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchPackage;

