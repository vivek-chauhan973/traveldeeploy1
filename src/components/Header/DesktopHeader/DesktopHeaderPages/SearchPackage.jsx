import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useCarPopupContext } from "@/components/admin/context/CarPopupCalculation";

const SearchPackage = ({ setSearchPackagePopup }) => {
    const {searchedData} = useCarPopupContext();
    console.log("searchedData",searchedData);
    
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
    const pacs = [
        {
            img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
            title: "Chardham Yatra From Haridwar",
            rating: "4"
        },
        {
            img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
            title: "Chardham Yatra From Haridwar",
            rating: "4"
        },
        {
            img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
            title: "Chardham Yatra From Haridwar",
            rating: "4"
        },
        {
            img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
            title: "Chardham Yatra From Haridwar",
            rating: "4"
        },
        {
            img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
            title: "Chardham Yatra From Haridwar",
            rating: "4"
        },
        {
            img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
            title: "Chardham Yatra From Haridwar",
            rating: "4"
        },
        {
            img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
            title: "Chardham Yatra From Haridwar",
            rating: "4"
        },
        {
            img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
            title: "Chardham Yatra From Haridwar",
            rating: "4"
        },
        {
            img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
            title: "Chardham Yatra From Haridwar",
            rating: "4"
        },
        {
            img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
            title: "Chardham Yatra From Haridwar",
            rating: "4"
        },
        {
            img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
            title: "Chardham Yatra From Haridwar",
            rating: "4"
        },
        {
            img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
            title: "Chardham Yatra From Haridwar",
            rating: "4"
        },
        {
            img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
            title: "Chardham Yatra From Haridwar",
            rating: "4"
        },
        {
            img: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
            title: "Chardham Yatra From Haridwar",
            rating: "4"
        },
    ]
    return (
        <div className="md:block hidden">
            <div className="fixed  top-28 left-0 flex items-center  justify-center z-50 -mt-2.5">
                <div className="bg-white rounded-b-xl shadow-xl z-50 w-[100vw] h-[65vh] overflow-y-scroll">
                    <div className="pr-5 pt-1 flex justify-between items-center mt-1">
                        <h2 className="text-md font-semibold lg:ml-16 ml-10 my-1">Match tour Packages</h2>
                        <FontAwesomeIcon
                            icon={faXmark}
                            className="h-5 w-5 hover:bg-gray-100 rounded-full cursor-pointer p-1"
                            onClick={() =>
                                setSearchPackagePopup(false)
                            }
                        />
                    </div>
                    <div className="w-full h-auto bg-white flex justify-start gap-10 flex-wrap lg:px-16 px-10 py-3 ">
                        {searchedData && (
                            searchedData?.map((pac, i) => {
                                return (
                                    <div className="w-48 h-56 ">
                                        <div className="w-full h-[60%]">
                                            <Image
                                                className="w-full h-full object-cover rounded-md"
                                                // src={pac.img}
                                                src={pac?.uploads?.[0]}
                                                alt={pac.title}
                                                width={200}
                                                height={200}
                                            />
                                        </div>
                                        <div className="w-full h-[30%] px-4 py-1 flex flex-col justify-around items-center">
                                            <div className="flex  justify-between h-[50%] w-full">
                                                <p className="text-para flex gap-1 items-center">
                                                    <Image
                                                        width={100}
                                                        height={100}
                                                        className="w-3"
                                                        src="https://cdn.iconscout.com/icon/free/png-512/free-calendar-1439790-1214120.png?f=webp&w=256"
                                                        alt=""
                                                    />
                                                    {pac?.days} {"Days"}
                                                </p>
                                                <p className="text-para font-medium flex items-center gap-1.5 font-sans">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="-mt-0.5 h-4 w-4 md:h-5 md:w-5 text-yellow-700"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                            clipRule="evenodd"
                                                        ></path>
                                                    </svg>
                                                    {pac?.packageRating}
                                                </p>
                                            </div>
                                            <h2 className="text-para font-medium h-[50%] w-full">{pac.name}</h2>
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

