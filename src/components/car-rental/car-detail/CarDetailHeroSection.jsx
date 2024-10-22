import { useState, useEffect } from "react";
import Image from 'next/image';

const CarDetailHeroSection = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imagesSlider = [
        "https://img.sixt.com/2800/a07691ea-5554-403c-a911-9fc61ef4a40e.jpg",
        "https://img.sixt.com/2800/f97d6b61-f725-438b-83c3-6d671ec61ce6.jpg",
        "https://img.sixt.com/2800/a07691ea-5554-403c-a911-9fc61ef4a40e.jpg",
        "https://img.sixt.com/2800/f97d6b61-f725-438b-83c3-6d671ec61ce6.jpg",
    ];
    // Automatically change images every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === imagesSlider.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000);

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [imagesSlider.length]);
    return (
        <>
            <div className="">
                {/* Phone */}
                <div className="slider-container xl:hidden block">
                    <div className="slider-container overflow-x-scroll snap-x snap-mandatory flex hide-scrollbar relative ">
                        {imagesSlider?.map((item, i) => (
                            <div
                                key={i}
                                className="snap-center flex-shrink-0 w-full relative"
                            >
                                <Image
                                    className="w-full h-[50vh] object-cover"
                                    src={item}
                                    alt={`img ${i + 1}`}
                                    width={200}
                                    height={100}
                                    onError={(e) => {
                                        e.target.onerror = null; // Prevent infinite loop if fallback also fails
                                        e.target.src = "/logo.png"; // Set fallback image if the original image fails to load
                                    }}
                                />
                                <div className="box-Shadow-Style-Package hidden xl:flex justify-end gap-3 absolute right-0 z-10 w-full py-3 pr-5 uppercase text-white font-bold italic bottom-0">
                                    <p className="bg-gradient-to-r from-orange-500 to-red-500 py-[2px] px-2 text-white rounded text-para font-bold  ">
                                        Nights/{" "}Days
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Medium Devices */}
                <div className="relative overflow-hidden xl:block hidden">
                    <Image
                        className=" h-[510px] object-cover w-full transition-all duration-500"
                        src={imagesSlider[currentImageIndex]}
                        alt={`img ${currentImageIndex + 1}`}
                        width={200}
                        height={100}
                        onError={(e) => {
                            e.target.onerror = null; // Prevent infinite loop if fallback also fails
                            e.target.src = "/logo.png"; // Set fallback image if the original image fails to load
                        }}
                    />
                    <div className="box-Shadow-Style-Package hidden xl:flex justify-end gap-3 absolute right-0 z-10 w-full py-3 pr-5 uppercase text-white font-bold italic bottom-0">
                        <p className="bg-gradient-to-r from-orange-500 to-red-500 py-[2px] px-2 text-white rounded text-para font-bold  ">
                            Nights/{" "}Days
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CarDetailHeroSection;



