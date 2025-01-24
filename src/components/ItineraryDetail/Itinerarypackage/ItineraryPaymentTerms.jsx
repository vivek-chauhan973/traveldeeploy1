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
      <div id="NeedToKnowSection">
        <p className="md:text-lg text-md font-semibold text-graytext">
          Payment Terms
        </p>
        <p className="md:text-md text-para italic text-slate-600">
          Important factors to consider before your trip!
        </p>
        <p
          className="py-3 pl-4 text-para payment-margin"
          dangerouslySetInnerHTML={{
            __html: addPackage?.TourInformations?.paymentTerm?.description,
          }}
        />
      </div>

      <div>
        <div >
          <div className="flex justify-between mt-2  gap-2 border-b-2 border-navyblack">
            <div
              onClick={() => handleTabClick("tab1")}
              className={`cursor-pointer rounded-t-lg py-2 grow text-center text-[16px]   ${
                activeTab === "tab1"
                  ? "bg-navyblack text-white"
                  : "text-slate-400 border-x-[1px] border-t-[1px] border-navyblacklite  bg-slate-200"
              }`}
            >
              <p className="text-sm  ">Cancellation </p>
            </div>
            <div
              onClick={() => handleTabClick("tab2")}
              className={`cursor-pointer rounded-t-lg py-2   grow text-center text-[16px]   ${
                activeTab === "tab2"
                  ? "bg-navyblack text-white"
                  : "text-slate-400 border-x-[1px] border-t-[1px] border-navyblacklite  bg-slate-200"
              }`}
            >
              <p className="text-sm ">Need To Know </p>
            </div>
          </div>
          <div className="border rounded-b-lg  overflow-hidden">
            <div
              className={`  xs:overflow-x-auto list-disc  pl-5 pr-4 ${
                activeTab === "tab1" ? "block" : "hidden"
              }`}
            >
              <div className="py-3">
                {
                  <p
                    className="text-para marker:text-green-800 payment payment-margin"
                    dangerouslySetInnerHTML={{
                      __html:
                        addPackage?.TourInformations?.cancellation?.description,
                    }}
                  />
                }
              </div>
            </div>
            <div
              className={`py-3  pl-5 pr-4 ${
                activeTab === "tab2" ? "block" : "hidden"
              }`}
            >
              {
                <p
                  className="text-para marker:text-red-800 payment payment-margin"
                  dangerouslySetInnerHTML={{
                    __html:
                      addPackage?.TourInformations?.needToKnow?.description,
                  }}
                />
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ItineraryPaymentTerms;
