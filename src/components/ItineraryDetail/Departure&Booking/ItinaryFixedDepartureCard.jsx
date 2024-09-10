import React, { useEffect, useState } from "react";
import CustomiseTour from "../CustomiseTour";
import FixedDeparturePopup from "./FixedDeparturePopup";
import { useAppContext } from "@/components/admin/context/Package/AddGuest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import ExtraWeightPopup from "./ExtraWeightPopup";
const fetchLimitData = async (id) => {
  const response = await fetch(`/api/package/price/departures/${id}`);
  return await response.json();
};
const ItinaryFixedDepartureCard = ({
  addPackage,
  togglePopup,
  fixedDeparturePopupOpen,
}) => {
  const {
    departureSectionData,
    setFixedDepDate1,
    fixedDepDate,
    fixedDepCity,
    guestPrice,
    setFixedDepCity,
    setFixedDepCity1,
    setFixedDepartureButtonEnaibleAndDisable,
    fixedDepartureButtonEnaibleAndDisable,
    contactAdmin, setContactAdimn
  } = useAppContext();
  const [city, setCity] = useState(false);
  const [date, setDate] = useState(false);
  const [calculatedPrizeOfGst, setCalculatedPrizeOfGst] = useState(0);
  const [columns, setColumns] = useState([]);
  const [limitKey, setLimitKey] = useState(1);
  const [limitKey1, setLimitKey1] = useState(0);
  const [gst, setGst] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [submittedData, setSubmittedData] = useState([]);
  if (city && date) {
    setFixedDepartureButtonEnaibleAndDisable(true);
  }
  const limitData = [];
  if (departureSectionData) {
    if (addPackage?.addguest === "fixedDeparture") {
      if (addPackage?.fixedfixeddepartureweightedprice === 1) {
        limitData.push(departureSectionData?.Start_drop_down);
        limitData.push(departureSectionData?.End_drop_down);
      }
      if (addPackage?.fixedfixeddepartureweightedprice === 2) {
        limitData.push(1);
        limitData.push(departureSectionData?.Avilability);
      }
    }
  }
  useEffect(() => {
    setLimitKey(1);
  }, [parseInt(departureSectionData?.Price)]);
  const newLimitData = [];
  let i = parseInt(limitData?.[0]);
  while (i <= parseInt(limitData?.[1])) {
    let data = i.toString();
    newLimitData.push(data);
    i = i + 1;
  }
  const handleSubmit = () => {
    if (fixedDepDate && fixedDepCity) {
      setFixedDepCity1(fixedDepCity);
      setFixedDepDate1(fixedDepDate);
    }
    if (fixedDepartureButtonEnaibleAndDisable) {
      togglePopup(true);
    }
  };
  useEffect(() => {
    setSubmittedData(addPackage?.tableData || []);
    setColumns(addPackage?.tableColumn || []);
    setGst(addPackage?.fixedDeparturePrices?.gst || 0);
  }, [addPackage]);
  useEffect(() => {
    if (departureSectionData?.GST === "All Inclusice") {
      setCalculatedPrizeOfGst(0);
    } else {
      setCalculatedPrizeOfGst(
        (guestPrice * parseInt(departureSectionData?.GST)) / 100
      );
    }
  }, [guestPrice]);
  useEffect(() => {
    setGrandTotal((guestPrice + calculatedPrizeOfGst) * limitKey);
  }, [calculatedPrizeOfGst, limitKey, guestPrice]);
  // convert limit key into keys array , here is the logic of keys to convert array
  const [input, setInput] = useState("");
  const [lenkey, setLenKey] = useState(0);
  const [totalWeight, setTotalWeight] = useState(0);
  const keys = Array.from({ length: limitKey1 }, (_, index) => index + 1);
  // here is data of all persons' weight and data is already stored in state
  const [totalv, setTotalv] = useState(0);
  const [inputData1, setInputData1] = useState([]);
  const [inputValues, setInputValues] = useState({});
  const handleInputChange = (e, i) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [i]: Number(value),
    }));
    setInputData1((prevState) =>
      prevState.map((item) =>
        item.hasOwnProperty(name) ? { ...item, [name]: Number(value) } : item
      )
    );
  };
  useEffect(() => {
    setInputData1(keys.map((item) => ({ [`input${item}`]: "" })));
  }, [limitKey1]);
  const totalSum = Object.values(inputValues).reduce(
    (acc, curr) => acc + curr,
    0
  );
  useEffect(() => {
    if (totalSum > departureSectionData?.Weight * limitKey) {
      setContactAdimn(true);
    }
  }, [totalSum]);
  const WeightPropertyPresentedOrNot =
    departureSectionData?.hasOwnProperty("Weight");
  return (
    <>
      <div className="flex flex-col gap-4 border rounded-md md:p-5 p-3 relative bg-white h-[490px] overflow-scroll">
        <div className=" overflow-y-auto">
          <div className="xl:block hidden">
            <div className="flex justify-between mb-2 pr-3">
              <h5 className="text-md font-semibold text-graytext">
                Booking Summary
              </h5>
              <div>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className="font1 cursor-pointer"
                />
              </div>
            </div>
            <hr />
          </div>
          <div className="">
            <div className="flex mb-2.5 mt-3 text-sm">
              <p className=" w-20">Dept. City : </p>
              <p className="font-semibold text-graytext">Mumbai</p>
            </div>
            <div className="flex mb-2.5 text-sm">
              <p className=" w-20">Dept. Date :</p>
              <p className=" font-bold text-graytext">
                10 Mar 2024 - 17 Mar 2024
              </p>
            </div>
          </div>
          <div className="flex xl:block xl:justify-center xl:items-center flex-col md:gap-3">
            <div>
              <div className="flex gap-4 justify-between items-center md:pr-5 pr-1">
                <label
                  className="text-sm font-semibold cursor-pointer capitalize"
                  htmlFor="city"
                >
                  Number Of Person :{" "}
                </label>
                <select
                  name="city"
                  id="city"
                  className="border rounded w-1/2 pl-3 cursor-pointer"
                  onChange={(e) => {
                    setFixedDepCity(e.target.value);
                    setLimitKey(e.target.value);
                    setLimitKey1(e.target.value);
                    setCity(true);
                  }}
                >
                  <option value="" className="cursor-pointer">
                    {limitKey === 1 && "Select Person"}
                  </option>
                  {newLimitData?.map((item, i) => (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              {fixedDepCity ? null : (
                <p className="md:text-xxs text-[10px] text-red-600 xl:text-end md:text-center text-end xl:pr-10 md:pl-28">
                  Please Select Person First
                </p>
              )}
            </div>

            {WeightPropertyPresentedOrNot && (
              <div>
                <div className="flex flex-col mt-2 ">
                  <p className="text-sm font-semibold cursor-pointer capitalize">
                    {limitKey1 ? "weights of person :" : ""}
                  </p>
                  {keys.map((item, i) => (
                    <div
                      key={i}
                      className="flex md:gap-5 gap-3 md:border-l-4 border-l-2 border-red-400 justify-center items-center my-2"
                    >
                      {/* <p>Person{i + 1}</p> */}
                      <label className="text-para" htmlFor={`person${i + 1}`}>
                        Person{i + 1}
                      </label>
                      <input
                        type="number"
                        id={`person${i + 1}`}
                        name={`input${i + 1}`}
                        required
                        className="mt-2 md:w-2/3 w-1/2 py-1.5 px-3 text-para border border-[#999999] rounded text-center cursor-pointer"
                        onChange={(e) => {
                          handleInputChange(e, i);
                          setDate(true);
                        }}
                        disabled={contactAdmin}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {contactAdmin && <ExtraWeightPopup />}

          <div className="grid grid-cols-2 gap-1">
            <p className="text-sm font-semibold">Price BreakUp</p>
            <p className="text-md font-medium text-graytext">₹ {guestPrice?.toLocaleString()}</p>
          </div>
          <hr className="border-dashed my-2 " />
          <div className="text-para  grid-cols-2 my-3 grid pr-1">
            <div></div>
            <div className="grid grid-cols-2">
              <p>Total Cost</p>
              <p className="">₹ {(guestPrice * limitKey)?.toLocaleString()}</p>
            </div>
          </div>
          <div className="text-para grid-cols-2 -mt-2 grid pr-1">
            <div></div>
            <div className="grid grid-cols-2">
              <p>
                GST{" "}
                {fixedDepartureButtonEnaibleAndDisable
                  ? departureSectionData?.GST
                  : null}{" "}
              </p>
              <p className="">
                ₹ {(calculatedPrizeOfGst * limitKey)?.toLocaleString()}
              </p>
            </div>
          </div>
          <hr className="border-dashed my-2" />
          {/* inject your code for mobile device */}
          {/* <div className=' xl:hidden '>
            <p>Table Data is here</p>
            <div className="overflow-x-scroll">
              <table className="w-full mt-3 border-collapse border border-gray-300 text-center text-para">
                <thead>
                  <tr className="border-b bg-black text-white">
                    {columns.map((col, index) => (
                      <th key={index} className="border border-gray-300 font-normal px-3 py-1 text-xs uppercase tracking-wider">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-gray-100">
                  {submittedData.map((row, rowIndex) => (
                    <tr key={rowIndex} >
                      {columns.map((col, colIndex) => (
                        <td key={colIndex} className="   border-t border-l  border-r px-2 py-2   capitalize overflow-hidden border-gray-300  text-wrap">
                          {row[col]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div> */}
          {/* <hr /> */}
          {/* <div className="xl:hidden my-5">
            <div className="ml-2">
              <p className="font-semibold text-lg mb-2 mt-1 text-graytext">
                About us
              </p>

              <p
                className="text-para px-3"
                dangerouslySetInnerHTML={{
                  __html: addPackage?.about,
                }}
              ></p>
            </div>

            <div>
              <h5 className="text-lg ml-2 font-semibold my-2 text-graytext">
                Highlights
              </h5>
              <div>
                {addPackage?.highlights?.map((highlight) => (
                  <ol key={highlight._id} className="list-disc   ">
                    <li className="px-3 text-para">{highlight.text}</li>
                  </ol>
                ))}
              </div>
            </div>
          </div> */}
          <div className="text-para  grid-cols-2 grid pr-1">
            <div></div>
            <div className="grid grid-cols-2 gap-1">
              <p className="font-semibold">Grand Total</p>
              <p className="font-semibold text-graytext">
                ₹ {grandTotal?.toLocaleString()}
              </p>
            </div>
          </div>
          <div className=" justify-center gap-10 my-3 flex">
            <label className=" inline-flex items-center">
              <input
                type="radio"
                className=" form-radio text-primary"
                name="radio-group"
              />
              <p className="ml-2 font-semibold text-graytext">Pay 25% Now</p>
            </label>

            <label className=" inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-primary  "
                name="radio-group"
              />
              <p className="ml-2 font-semibold text-graytext ">
                Pay Full Online
              </p>
            </label>
          </div>
          <div className="xl:block hidden">
            <div className=" grid grid-cols-2 gap-3 my-3">
              <CustomiseTour>
                <button className=" border-primary w-full border text-primary flex-flow  flex justify-center px-5 py-2 text-para rounded-md">
                  Customise
                </button>
              </CustomiseTour>

              {fixedDeparturePopupOpen && (
                <FixedDeparturePopup
                  togglePopup={togglePopup}
                  addPackage={addPackage}
                />
              )}
              {
                <button
                  onClick={fixedDepartureButtonEnaibleAndDisable ? handleSubmit:null}
                  className={`border px-5 py-2 rounded-md ${fixedDepartureButtonEnaibleAndDisable
                      ? "bg-primary"
                      : "bg-orange-200"
                    } text-center text-para`}
                >
                  Book now
                </button>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItinaryFixedDepartureCard;
