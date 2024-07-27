import { useState } from "react";
import "../../../app/globals.css";
import { useAppContext } from "@/components/admin/context/Package/AddGuest";
import "../../../app/globals.css";

const ItineraryPaymentTerms = () => {
    const { addPackage } = useAppContext();
    const [activeTab, setActiveTab] = useState("tab1");
    const handleTabClick = (tour_details) => {
        setActiveTab(tour_details);
        // console.log(tour_details)
    };
    return (
        <>
            <div className="my-[10px] mb-[10px]">
                <p className="md:text-lg text-md font-semibold text-graytext">
                    Payment Terms
                </p>
                <p className="md:text-md text-para italic text-slate-600">
                    Things to consider before the trip!
                </p>
            </div>
            {/* <div className="lg:block hidden">
                <div className="border-b border-slate-600">
                    <div className="lg:flex max-[600px]:block">
                        <div className="bg-navyblack flex flex-wrap  items-center p-3 rounded-tl-lg">
                            <p className="text-sm text-white    text-center w-[180px]">
                           
                                Cancellation received no. of days prior  to
                                departure

                            </p>
                        </div>
                        <div
                            className="bg-slate- lg:flex justify-between text-xs p-2 items-center w-full rounded-tr-lg border-t border-r border-navyblack max-[600px]:block">
                            <div
                                className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center w-[70px] ">
                                <p>D</p>
                                <p>0 to 5</p>
                            </div>
                            <div
                                className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center lg:w-[70px]">
                                <p>D</p>
                                <p>6 to 15</p>
                            </div>
                            <div
                                className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center lg:w-[70px]">
                                <p>D</p>
                                <p>16 to 30</p>
                            </div>
                            <div
                                className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center lg:w-[70px]">
                                <p>D</p>
                                <p>31 to 45</p>
                            </div>
                            <div
                                className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center lg:w-[70px]">
                                <p>D</p>
                                <p>46 to 60</p>
                            </div>
                            <div
                                className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center lg:w-[70px]">
                                <p>D</p>
                                <p>61 to 90</p>
                            </div>
                            <div
                                className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center lg:w-[70px]">
                                <p>D</p>
                                <p>91 to 120</p>
                            </div>
                            <div
                                className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center lg:w-[70px]">
                                <p>D</p>
                                <p>121 to 900</p>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div>
                    <div className="flex">
                        <div className="bg-navyblack flex items-center  text-center justify-center flex-wrap p-3 rounded-bl-lg">
                            <p className="text-sm text-white text-center w-[180px]">
                                Cancellation received no. of days prior      to
                                departure
                            </p>
                        </div>
                        <div
                            className="bg-white flex justify-between w-full text-sm p-2 items-center rounded-br-lg border-b border-r border-slate-600">
                            <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                                <p>100%</p>
                            </div>
                            <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                                <p>85%</p>
                            </div>
                            <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                                <p>75%</p>
                            </div>
                            <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                                <p>50%</p>
                            </div>
                            <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                                <p>30%</p>
                            </div>
                            <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                                <p>20%</p>
                            </div>
                            <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                                <p>15%</p>
                            </div>
                            <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                                <p>10%</p>
                            </div>
                        </div>
                    </div>
                </div>
           
            </div>
           
            <div className='lg:hidden'>
                <div className='flex  border-b rounded-md'>
                    <div className='grow'>
                        <div className='bg-navyblack p-3 text-white'>
                            <p className='text-sm'>Cancellation received no. of days prior to departure</p>
                        </div>
                        <div>
                            <table className='w-full border-r text-sm'>
                                <tbody>

                                    <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                        <td className='py-2'>Right-0 to 5</td>
                                    </tr>
                                    <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                        <td className='py-2'>D-0 to 5</td>
                                    </tr>
                                    <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                        <td className='py-2'>D-0 to 5</td>
                                    </tr>
                                    <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                        <td className='py-2'>D-0 to 5</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>


                    </div>
                   
                    <div className='grow'>
                        <div className='bg-navyblack p-3 text-white'>
                            <p className='text-sm'>Cancellation received no. of days prior to departure</p>
                        </div>
                        <div>
                            <table className='w-full text-sm'>
                                <tbody>

                                    <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                        <td className='py-2'>New-0 to 5</td>
                                    </tr>
                                    <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                        <td className='py-2'>D-0 to 5</td>
                                    </tr>
                                    <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                        <td className='py-2'>D-0 to 5</td>
                                    </tr>
                                    <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                        <td className='py-2'>D-0 to 5</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>


                    </div>


                </div>
            </div> */}
            {/* {<p> {addPackage?.TourInformations?.paymentTerm?.description}</p>} */}
            <p className="py-4 px-6 " dangerouslySetInnerHTML={{ __html:addPackage?.TourInformations?.paymentTerm?.description }} />

            <div>
                {/* <div className="mt-8">
                    <div className="my-[10px]">
                        <p className="text-md md:text-lg  font-semibold text-graytext">Payment Terms</p>
                        <p className=" md:text-para text-sm mt-1 leading-relaxed">Guest can pay by Cheque/ Demand Draft/ Debit card / Credit card/
                            NEFT/ RTGS/ IMPS. For Debit / Credit card payment additional 1.8 % convenience charge
                            will be applicable Cheque / Demand draft should be in favour of "Veena Patil Hospitality
                            Pvt ltd"</p>
                    </div>
                    <p className="text-[17px] md:text-lg  font-semibold leading-9 text-graytext">Remark</p>
                    <div className="list-disc flex flex-col pb-5 gap-[10px]">
                        <p className="md:text-para text-sm leading-relaxed">All meals will be provided by Veena World in case the
                            flight reaches the stipulated destination early morning or leaves destination late in
                            the evening.</p>
                        <p className="text-para leading-relaxed">In Case if any sightseeing is not done due to weekly
                            closure, an alternative sightseeing will be done for the same.</p>
                        <p className="text-para leading-relaxed">All meals will be provided by Veena World in case the
                            flight reaches the stipulated destination early morning or leaves destination late in
                            the evening.</p>
                        <p className="text-para leading-relaxed">In Case if any sightseeing is not done due to weekly
                            closure, an alternative sightseeing will be done for the same.</p>
                    </div>

                </div> */}
                <div id="TourDetailsSection">
                    <div className="flex justify-between mt-5  gap-2 border-b-2 border-navyblack">
                        <div
                            onClick={() => handleTabClick("tab1")}
                            className={`cursor-pointer rounded-t-lg py-2 grow text-center text-[16px]   ${activeTab === "tab1"
                                ? "bg-navyblack text-white"
                                : "text-slate-400 border-x-[1px] border-t-[1px] border-navyblacklite  bg-slate-200"
                                }`}
                        >
                            <p className="text-sm  ">Cancellation </p>
                        </div>
                        <div
                            onClick={() => handleTabClick("tab2")}
                            className={`cursor-pointer rounded-t-lg py-2   grow text-center text-[16px]   ${activeTab === "tab2"
                                ? "bg-navyblack text-white"
                                : "text-slate-400 border-x-[1px] border-t-[1px] border-navyblacklite  bg-slate-200"
                                }`}
                        >
                            <p className="text-sm ">Need To Know </p>
                        </div>
                    </div>
                    <div className="border rounded-b-lg  overflow-hidden ">
                        <div
                            className={`  xs:overflow-x-auto list-disc  ${activeTab === "tab1" ? "block" : "hidden"
                                }`}
                        >
                            <div className="py-4 px-6 ">

                                {
                                    <p className=" marker:text-blue-800" dangerouslySetInnerHTML={{ __html: addPackage?.TourInformations?.cancellation?.description }} />
                                }
                            </div>
                        </div>
                        <div
                            className={` py-4 px-6   ${activeTab === "tab2" ? "block" : "hidden"}`}
                        >
                            {

                                <p className="  marker:text-red-800" dangerouslySetInnerHTML={{ __html: addPackage?.TourInformations?.needToKnow?.description }} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ItineraryPaymentTerms