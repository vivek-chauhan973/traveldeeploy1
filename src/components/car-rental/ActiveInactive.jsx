import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useCarPopupContext } from "@/components/admin/context/CarPopupCalculation";
import Link from "next/link";

const ActiveInactive = () => {
    const { setActiveInactivePopup } = useCarPopupContext();
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="fixed inset-0 flex items-center h-[100vh] justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="bg-white rounded-xl shadow-lg z-50 w-[460px] h-[270px] max-h-[300px]">
                <div className="pr-2 pt-1 flex justify-end items-center mt-1">
                    <FontAwesomeIcon
                        icon={faXmark}
                        className="h-4 w-4 hover:bg-gray-100 rounded-full cursor-pointer p-1"
                        onClick={() =>
                            setActiveInactivePopup(false)
                        }
                    />
                </div>
                <div className="px-7">
                    <div className="flex flex-col justify-center items-center my-5">
                        <h2 className="text-2xl font-bold text-primary">Apologies for the inconvenience,</h2>
                        <h2 className="text-2xl font-bold text-primary">Thank you for your patience.</h2>
                    </div>
                    <div className="flex flex-col justify-center items-center my-5">
                        <p className="text-para">We are working to resolve the issue as soon as possible,</p>
                        <p className="text-para">Please try again later.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center my-5">
                        <Link href="/car-rental">
                            <button
                                className="w-full bg-navyblack text-para text-white px-5 py-2 rounded-full"
                            >
                                Check Other Options
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActiveInactive;
