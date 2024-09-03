import { ChangeEvent, useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import Image from "next/image";
import { useAppContext } from "./admin/context/Package/AddGuest";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChild,
  faCircleMinus,
  faPerson,
  faBaby,
  faCirclePlus,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { set } from "mongoose";
const fetchCarAllCars = async () => {
  const response = await fetch("/api/cars/carapi");
  return await response.json();
};
const fetchCarById = async (id) => {
  const data = await fetch(`/api/cars/car/${id}`)
  return await data.json();
}
const Addguest = ({
  children,
  guestPrice,
  inputData,
  setInputData,
  setCloseBtn,
  addPackage,
}) => {
  const date = new Date();
  const { showAddguest, setSubmitButtonOfPricingCalculation, setGuestPrice, departureSectionData } =
    useAppContext() ?? { showAddguest: false };
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState("");
  const [selectedCarIdFetchApi, setSelectedCarIdFetchApi] = useState("");
  const infantMaxDate = date.toISOString().split("T")[0];
  const [isAC, setIsAC] = useState(true);
  const [carWithCapacity, setCarWithCapacity] = useState([]);
  const [finalPrice, setFinalPrice] = useState(0);
  const [acDisable, setAcDisable] = useState(false);
  const [transportPrice, setTransportPrice] = useState(0);
  const [final, setFinal] = useState(0);
  const [selectedDataOfCar, setSelectedDataOfCar] = useState(0);

  //here are the all states for calculation of transport
  // console.log("departureSectionData ----- >123 ",departureSectionData)

  const [days, setDays] = useState(0);
  useEffect(() => {
    setDays(addPackage?.days?.length);
  }, [])

  const infantMinDate = new Date(date.setFullYear(date.getFullYear() - 5))
    .toISOString()
    .split("T")[0];
  const childMinDate = new Date(date.setFullYear(date.getFullYear() - 6))
    .toISOString()
    .split("T")[0];

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    if (showAddguest) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
const [close1,setClose1]=useState(false);
  const handleClose = () => {
    setOpen(false);
    setClose1(!close1);

  };
// useEffect(()=>{
//   const initialData = {
//     child: 0,
//     infant: 0,
//     singleRoom: 0,
//     twinRoom: 0,
//     tripleRoom: 0,
//     quardRoom: 0,
//     childAges: {},
//     infantAges: {},
//   };
//   setInputData(initialData);
// },[close1])
  // console.log("fixed departure package::::",addPackage);

  const handleChange = (e) => {
    const value = e.target.value === "" ? "" : parseInt(e.target.value);
    setInputData({ ...inputData, [e.target.name]: value });

    if (e.target.name === "adult") {
      setCountSingleRoom(0);
      setCountTwinRoom(0);
      setCountTripleRoom(0);
      setCountQuardRoom(0);
      setInputData((prevData) => ({ ...prevData, child: 0, infant: 0 }));
    }
  };
  const handleChange1 = (e) => {
    const value = e.target.value === "" ? "" : parseInt(e.target.value);
    setInputData({ ...inputData, [e.target.name]: value });
    if (e.target.name === "adult") {
      setCountSingleRoom(0);
      setCountTwinRoom(0);
      setCountTripleRoom(0);
      setCountQuardRoom(0);
      setInputData((prevData) => ({ ...prevData, child: 0, infant: 0 }));
    }
  };
  // here fetch all cars
  useEffect(() => {
    fetchCarAllCars().then((res) => setCars(res?.data || []));
  }, []);
  // here is the logic of select car
  const handleSubmit = async (e) => {
    e.preventDefault();
    setCloseBtn(true);
    setSubmitButtonOfPricingCalculation(true);
    const childDateInputs = document.querySelectorAll('input[id^="childDate"]');
    const isAnyChildDateEmpty = Array.from(childDateInputs).some(
      (input) => input.value === ""
    );

    if (isAnyChildDateEmpty) {
      alert("Please fill in the date for each child.");
      return;
    }

    if (
      (inputData.adult > 0 || inputData.child > 0 || inputData.infant > 0) &&
      (inputData.singleRoom > 0 ||
        inputData.twinRoom > 0 ||
        inputData.tripleRoom > 0 ||
        inputData.quardRoom > 0)
    ) {
      const remainingAdults =
        inputData.adult -
        (countSingleRoom +
          countTwinRoom * 2 +
          countTripleRoom * 3 +
          countQuardRoom * 4);
      if (remainingAdults > 0) {
        alert("Please assign rooms for all adults.");
        return;
      }

      try {
        const response = await fetch(
          "http://localhost:3000/api/public/package/book-tour",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(inputData),
          }
        );

        if (response.ok) {
          const data = await response.json();
        } else {
          console.error(
            "Error posting data:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error posting data:", error.message);
      }
       setOpen(false);
    } else {
      alert("Please select at least one guest or one room.");
    }
  };

  const handleDateChange = (e, index) => {
    const selectedDate = new Date(e.target.value);
    const currentDate = new Date();
    const differenceInMonths =
      (currentDate.getFullYear() - selectedDate.getFullYear()) * 12 +
      (currentDate.getMonth() - selectedDate.getMonth());
    const years = Math.floor(differenceInMonths / 12);
    const months = differenceInMonths % 12;

    setInputData((prevState) => ({
      ...prevState,
      childAges: {
        ...prevState.childAges,
        [index]: { years, months },
      },
    }));
  };

  const handleDateChange1 = (e, index) => {
    const selectedDate = new Date(e.target.value);
    const currentDate = new Date();
    const differenceInMonths =
      (currentDate.getFullYear() - selectedDate.getFullYear()) * 12 +
      (currentDate.getMonth() - selectedDate.getMonth());
    const years = Math.floor(differenceInMonths / 12);
    const months = differenceInMonths % 12;

    setInputData((prevState) => ({
      ...prevState,
      infantAges: {
        ...prevState.infantAges,
        [index]: { years, months },
      },
    }));
  };

  const [countSingleRoom, setCountSingleRoom] = useState(0);
  const [countTwinRoom, setCountTwinRoom] = useState(0);
  const [countTripleRoom, setCountTripleRoom] = useState(0);
  const [countQuardRoom, setCountQuardRoom] = useState(0);

  const handleIncrement = (roomType) => {
    const totalGuests = inputData.adult + inputData.child + inputData.infant;
    if (totalGuests === 0) {
      alert(
        "Please select at least one adult, child, or infant before adding rooms."
      );
      return;
    }

    let remainingAdults;
    let maxRooms;

    switch (roomType) {
      case "singleRoom":
        remainingAdults =
          inputData.adult -
          (countSingleRoom +
            countTwinRoom * 2 +
            countTripleRoom * 3 +
            countQuardRoom * 4);
        maxRooms = remainingAdults;
        if (maxRooms > 0) {
          setCountSingleRoom(countSingleRoom + 1);
          setInputData({ ...inputData, singleRoom: countSingleRoom + 1 });
        }
        break;
      case "twinRoom":
        remainingAdults =
          inputData.adult -
          (countSingleRoom +
            countTwinRoom * 2 +
            countTripleRoom * 3 +
            countQuardRoom * 4);
        maxRooms = Math.floor(remainingAdults / 2);
        if (maxRooms > 0) {
          setCountTwinRoom(countTwinRoom + 1);
          setInputData({ ...inputData, twinRoom: countTwinRoom + 1 });
        }
        break;
      case "tripleRoom":
        remainingAdults =
          inputData.adult -
          (countSingleRoom +
            countTwinRoom * 2 +
            countTripleRoom * 3 +
            countQuardRoom * 4);
        maxRooms = Math.floor(remainingAdults / 3);
        if (maxRooms > 0) {
          setCountTripleRoom(countTripleRoom + 1);
          setInputData({ ...inputData, tripleRoom: countTripleRoom + 1 });
        }
        break;
      case "quardRoom":
        remainingAdults =
          inputData.adult -
          (countSingleRoom +
            countTwinRoom * 2 +
            countTripleRoom * 3 +
            countQuardRoom * 4);
        maxRooms = Math.floor(remainingAdults / 4);
        if (maxRooms > 0) {
          setCountQuardRoom(countQuardRoom + 1);
          setInputData({ ...inputData, quardRoom: countQuardRoom + 1 });
        }
        break;
      default:
        break;
    }
  };

  const handleDecrement = (roomType) => {
    let newCount;
    switch (roomType) {
      case "singleRoom":
        newCount = countSingleRoom - 1;
        if (newCount >= 0) {
          setCountSingleRoom(newCount);
          setInputData({ ...inputData, singleRoom: newCount });
        }
        break;
      case "twinRoom":
        newCount = countTwinRoom - 1;
        if (newCount >= 0) {
          setCountTwinRoom(newCount);
          setInputData({ ...inputData, twinRoom: newCount });
        }
        break;
      case "tripleRoom":
        newCount = countTripleRoom - 1;
        if (newCount >= 0) {
          setCountTripleRoom(newCount);
          setInputData({ ...inputData, tripleRoom: newCount });
        }
        break;
      case "quardRoom":
        newCount = countQuardRoom - 1;
        if (newCount >= 0) {
          setCountQuardRoom(newCount);
          setInputData({ ...inputData, quardRoom: newCount });
        }
        break;
      default:
        break;
    }
  };
  // toggle AC is here 
  //here is the calculation
  useEffect(() => {
    if (addPackage?.addguest === "addGuest") {
      if (addPackage && addPackage?.prices) {
        const {
          childOverFive,
          childUnderFive,
          misc,
          singleRoom,
          twinSharingRoom,
          tripleSharingRoom,
          quadSharingRoom,
        } = addPackage?.prices;

        const calculatedPrice =
          childOverFive * inputData?.child * (days - 1) +
          childUnderFive * inputData?.infant * (days - 1) +
          singleRoom * inputData?.singleRoom * (days - 1) +
          twinSharingRoom * inputData?.twinRoom * (days - 1) +
          tripleSharingRoom * inputData?.tripleRoom * (days - 1) +
          quadSharingRoom * inputData?.quardRoom * (days - 1) + misc * (days);

        setGuestPrice(calculatedPrice);
        setFinal(calculatedPrice);
      }
    }
  }, [inputData, addPackage]);
  useEffect(() => {
    const {
      // diskHike,
      markup,
    } = addPackage?.prices;
    const newCalculatedPrice = finalPrice + Math.floor((finalPrice * markup) / 100);
    // setGuestPrice(newCalculatedPrice)

    if (departureSectionData?.hike) {
      if (departureSectionData?.hike > 0) {
        const newCalculatedPrice1 = newCalculatedPrice + Math.floor((newCalculatedPrice * (departureSectionData?.hike)) / 100)
        // console.log("final price",Math.floor((newCalculatedPrice*(departureSectionData?.hike))/100));
        setGuestPrice(newCalculatedPrice1);
      }
      else if (departureSectionData?.hike < 0) {
        const newDiskHike = Math.abs((departureSectionData?.hike));
        //  console.log("new dishike",(newCalculatedPrice*newDiskHike)/100)
        const newCalculatedPrice1 = newCalculatedPrice - Math.floor((newCalculatedPrice * newDiskHike) / 100)
        setGuestPrice(newCalculatedPrice1);
      }
    }
    else {
      setGuestPrice(newCalculatedPrice);
    }
  }, [finalPrice])

  // console.log("final prize ",finalPrice)
  const handleToggle = (e) => {
    e.preventDefault();
    setIsAC((prevIsAC) => !prevIsAC);
  };
  useEffect(() => {
    const newarr = [];
    // console.log("cars stage1 ----> ",cars);
    const filteredData = cars?.find(item => item?.seatingCapacity >= inputData?.adult);
    setSelectedDataOfCar(filteredData?.capacity);
    newarr.push(filteredData);
    // console.log("cars stage2 ----> ",filteredData);
    const filteredData3 = cars?.filter(item => item?.vehicleType !== filteredData?.vehicleType && item?.seatingCapacity === filteredData?.seatingCapacity);
    if (filteredData3?.length !== 0) {
      filteredData3.forEach(item => {
        newarr.push(item);
        cars.pop(item);
      })
    }
    const filteredData1 = cars?.find(item => {
      return item?.seatingCapacity > filteredData?.seatingCapacity
    });
    if (filteredData1) {
      newarr.push(filteredData1);
    }
    const filteredData2 = cars?.filter(item => {
      return item?.vehicleType !== filteredData1?.vehicleType && item?.seatingCapacity === filteredData1?.seatingCapacity
    })
    if (filteredData1?.length !== 0) {
      filteredData2?.forEach(item => {
        newarr.push(item)
      })
    }
    setCarWithCapacity(newarr);
  }, [inputData?.adult])

  useEffect(() => {
    const farePrice = final + selectedCarIdFetchApi?.capacity * days;
    const data1 = selectedCarIdFetchApi?.ac * (days);
    setFinalPrice(farePrice + data1);
  }, [selectedCarIdFetchApi])
  useEffect(() => {
    const {
      markup,
    } = addPackage?.prices;
    if (departureSectionData?.hike) {
      const data1 = Math.floor(selectedCarIdFetchApi?.ac * (days) + ((selectedCarIdFetchApi?.ac * (days)) * markup) / 100);
      if (departureSectionData?.hike > 0) {
        const data2 = Math.floor(data1 + (data1 * (departureSectionData?.hike)) / 100)
        if (isAC) {
          setGuestPrice(guestPrice + data2);
        }
        else {
          setGuestPrice(guestPrice - data2);
        }
      }
      else {
        const data2 = Math.floor(data1 - (data1 * Math.abs(departureSectionData?.hike)) / 100)
        if (isAC) {
          setGuestPrice(guestPrice + data2);
        }
        else {
          setGuestPrice(guestPrice - data2);
        }
      }
    }
    else {
      const data1 = Math.floor(selectedCarIdFetchApi?.ac * (days) + ((selectedCarIdFetchApi?.ac * (days)) * markup) / 100);
      if (isAC) {
        setGuestPrice(guestPrice + data1);
      }
      else {
        setGuestPrice(guestPrice - data1);
      }
    }

  }, [isAC])
  const handleSelected = (item) => {
    setSelectedCarIdFetchApi(item)
    setSelectedDataOfCar(item?.capacity);
    setAcDisable(true);
    setIsAC(true);
  }

  useEffect(() => {
    console.log("selectedCarOf Price ", selectedDataOfCar)
  }, [selectedDataOfCar])
  return (
    <div>
      <span onClick={handleClickOpen}>{children}</span>
      {addPackage?.prices?.addguest === "addGuest" && (
        <Dialog
          className="h-[80%] my-auto px-0 z-[99999] md:mt-24 mt-20"
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <form className="w-full" action="">
            <div>
              <div className="relative">
                <div className="sticky top-0 shadow-md z-[5]">
                  <div className="flex justify-between items-center py-4  px-[2vw] bg-white z-10">
                    <p className=" capitalize md:text-md text-base px-2 md:px-0 font-semibold">
                      add guest & Choose from{ }
                    </p>
                    <div>
                      <p className="text-lg font-medium"> ₹ {guestPrice ? guestPrice : "--"}</p>
                      <p className="text-xxs">per person on twin sharing</p>
                    </div>
                  </div>

                  <div
                    className=" absolute top-3 right-3 cursor-pointer hover:scale-105"
                    onClick={handleClose}
                    size={28}
                  >
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      className="font1 cursor-pointer"
                    />
                  </div>

                  <hr />
                </div>
                <div className="overflow-y-auto md:px-12 px-2">
                  <div className="flex items-center md:gap-10 mt-5 md:w-96 w-60 justify-between">
                    <label htmlFor="Adultsdropdown" className="my-2">
                      <div className="flex gap-3 items-center">
                        <FontAwesomeIcon
                          icon={faPerson}
                          className="font1 cursor-pointer"
                        />
                        <div>
                          <p className="text-para">
                            Adults
                            <span className=" text-slate-400 font-light">
                              (Above 12 yrs)
                            </span>{" "}
                          </p>
                        </div>
                      </div>
                    </label>
                    <div className=" w-14">
                      <select
                        name="adult"
                        value={inputData?.adult}
                        id="Adultsdropdown"
                        className="border w-full py-1 rounded-md"
                        onChange={handleChange}
                      >
                        <option value="0"> 0</option>
                        <option value="1"> 1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex items-center md:gap-10 md:w-96 w-60- justify-between">
                      <label htmlFor="Childdropdown" className="my-2">
                        <div className="flex gap-3 items-center">
                          <FontAwesomeIcon
                            icon={faChild}
                            className="font1 cursor-pointer"
                          />
                          <div>
                            <p className="text-para">
                              Child
                              <span className="  text-slate-400 font-light">
                                (Age 6 - 11 yrs)
                              </span>{" "}
                            </p>
                          </div>
                        </div>
                      </label>
                      <div className="w-14">
                        <select
                          name="child"
                          value={inputData?.child}
                          id="Childdropdown"
                          className={`border w-full py-1 rounded-md ${inputData?.child === 0 &&
                            inputData?.adult === 0 &&
                            "opacity-50"
                            }`}
                          onChange={handleChange}
                          disabled={inputData?.adult === 0} // Disable if adult count is 0
                        >
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      </div>
                    </div>
                    {/* child date is here */}
                    {[...Array(inputData?.child)].map((_, index) => (
                      <div key={index} className="md:ml-5 pt-2 ">
                        <div className="md:border-l-4 border-l-2 border-red-400 md:pl-5 pl-2 flex items-center md:gap-5 gap-1 my-1">
                          <label
                            className="text-para"
                            htmlFor={`childDate${index}`}
                          >
                            Child {index + 1}
                          </label>
                          <input
                            id={`childDate${index}`}
                            className="px-2 md:w-52 py-1 border focus:border rounded-md cursor-pointer text-base"
                            type="date"
                            max={new Date().toISOString().split("T")[0]} // Set max attribute to current date
                            min={childMinDate}
                            onChange={(e) => handleDateChange(e, index)}
                          />

                          <span className="text-red-400 text-sm">
                            Select{" "}
                            {inputData?.childAges?.[index] &&
                              `${inputData?.childAges?.[index].years} yrs ${inputData?.childAges?.[index].months} months`}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Infant date is here */}
                  <div className="mt-2 ">
                    <div className="flex items-center md:gap-10 md:w-96 w-60 justify-between">
                      <label htmlFor="Childdropdown" className="my-2">
                        <div className="flex gap-3 items-center">
                          <FontAwesomeIcon
                            icon={faBaby}
                            className="font1 cursor-pointer"
                          />
                          <div>
                            <p className="text-para">
                              Infant
                              <span className="  text-slate-400 font-light">
                                (Age 0 - 5 yrs)
                              </span>{" "}
                            </p>
                          </div>
                        </div>
                      </label>

                      <div className="w-14">
                        <select
                          name="infant"
                          value={inputData?.infant}
                          id="Infantdropdown"
                          className={`border w-full py-1 rounded-md ${inputData?.infant === 0 &&
                            inputData?.adult === 0 &&
                            "opacity-50"
                            }`}
                          onChange={handleChange1}
                          disabled={inputData?.adult === 0} // Disable if adult count is 0
                        >
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      </div>
                    </div>
                    {/* child date is here */}
                    {[...Array(inputData?.infant)].map((_, index) => (
                      <div key={index} className="md:ml-5 pt-2 ">
                        <div className="md:border-l-4 border-l-2 border-red-400 md:pl-5 pl-2 flex items-center md:gap-5 gap-1 my-1">
                          <label
                            className="text-para"
                            htmlFor={`InfantDate${index}`}
                          >
                            Infant {index + 1}
                          </label>
                          <input
                            id={`InfantDate${index}`}
                            className="px-2 md:w-52 py-1 border focus:border rounded-md cursor-pointer text-base"
                            type="date"
                            max={new Date().toISOString().split("T")[0]} // Set max attribute to current date
                            min={infantMinDate}
                            onChange={(e) => handleDateChange1(e, index)}
                          />

                          <span className="text-red-400 text-sm">
                            Select{" "}
                            {inputData?.infantAges?.[index] &&
                              `${inputData?.infantAges?.[index].years} yrs ${inputData?.infantAges?.[index].months} months`}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="my-4">
                    {/* <CalendarFunc /> */}
                    {/* <DatePickerCalendar /> */}
                  </div>

                  <div>
                    <div className="flex flex-col mt-5">
                      <div className="mb-2 flex justify-between pr-5 items-center">
                        <div>
                          <p className="ml-2 text-para font-semibold cursor-pointer">
                            Single Room
                          </p>
                        </div>
                        <div className="flex gap-1 ">
                          <div
                            onClick={() => handleDecrement("singleRoom")}
                            size={18}
                            className="cursor-pointer text-navyblack hover:text-slate-700"
                          >
                            <FontAwesomeIcon
                              icon={faCircleMinus}
                              className="font1 cursor-pointer"
                            />
                          </div>

                          <p
                            className="text-para w-3 mr-1 text-center"
                            onChange={(e) => handleChange}
                          >
                            {countSingleRoom}
                          </p>
                          <div
                            onClick={() => handleIncrement("singleRoom")}
                            size={19}
                            className="cursor-pointer text-navyblack hover:text-slate-700"
                          >
                            <FontAwesomeIcon
                              icon={faCirclePlus}
                              className="font1 cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                      <hr className="my-2" />
                      <div className="mb-2 flex justify-between pr-5 items-center">
                        <div>
                          <p className="ml-2 text-para font-semibold cursor-pointer">
                            Twin Sharing Room
                          </p>
                        </div>
                        <div className="flex gap-1">
                          <div
                            onClick={() => handleDecrement("twinRoom")}
                            className="cursor-pointer text-navyblack hover:text-slate-700"
                          >
                            <FontAwesomeIcon
                              icon={faCircleMinus}
                              className="font1 cursor-pointer"
                            />
                          </div>
                          <p
                            onChange={(e) => handleChange}
                            className="text-para w-3 mr-1 text-center"
                          >
                            {countTwinRoom}
                          </p>
                          <div
                            onClick={() => handleIncrement("twinRoom")}
                            className="cursor-pointer text-navyblack hover:text-slate-700"
                          >
                            <FontAwesomeIcon
                              icon={faCirclePlus}
                              className="font1 cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                      <hr className="my-2" />
                      <div className="mb-2 flex justify-between pr-5 items-center">
                        <div>
                          <p className="ml-2 text-para font-semibold cursor-pointer">
                            Triple Sharing Room
                          </p>
                        </div>
                        <div className="flex gap-1">
                          <div
                            onClick={() => handleDecrement("tripleRoom")}
                            className="cursor-pointer text-navyblack hover:text-slate-700"
                          >
                            <FontAwesomeIcon
                              icon={faCircleMinus}
                              className="font1 cursor-pointer"
                            />
                          </div>

                          <p
                            onChange={(e) => handleChange}
                            className="text-para w-3 mr-1 text-center"
                          >
                            {countTripleRoom}
                          </p>
                          <div
                            onClick={() => handleIncrement("tripleRoom")}
                            className="cursor-pointer text-navyblack hover:text-slate-700"
                          >
                            <FontAwesomeIcon
                              icon={faCirclePlus}
                              className="font1 cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                      <hr className="my-2" />
                      <div className="mb-2 flex justify-between pr-5 items-center">
                        <div>
                          <p className="ml-2 text-para font-semibold cursor-pointer">
                            Quard Sharing Room
                          </p>
                        </div>
                        <div className="flex gap-1">
                          <div
                            onClick={() => handleDecrement("quardRoom")}
                            className="cursor-pointer text-navyblack hover:text-slate-700"
                          >
                            <FontAwesomeIcon
                              icon={faCircleMinus}
                              className="font1 cursor-pointer"
                            />
                          </div>

                          <p
                            onChange={(e) => handleChange}
                            className="text-para w-3 mr-1 text-center"
                          >
                            {countQuardRoom}
                          </p>
                          <div
                            onClick={() => handleIncrement("quardRoom")}
                            className="cursor-pointer text-navyblack hover:text-slate-700"
                          >
                            <FontAwesomeIcon
                              icon={faCirclePlus}
                              className="font1 cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* here is display all cars */}

                  <div className="mt-8 ">
                    <div className="w-full bg-navyblack rounded-md gap-2 text-white flex justify-between items-center mb-4 px-3 py-2 ">
                      <p className="font-semibold text-base md:text-lg">
                        Transports
                      </p>
                      <div className="flex items-center space-x-2">
                        {/* AC Option / Non AC Option toggle */}
                        <p className={`md:text-sm text-xxs transition duration-300 ${isAC ? "text-white" : "text-gray-400 blur-none"}`}>AC</p>
                        <div className=" w-10 h-5 flex justify-between items-center rounded-full bg-gray-300 border border-[#5CDE96]">
                          <div
                            className={`flex items-center justify-center  w-5 h-4 cursor-pointer rounded-full transition-all duration-300 ${isAC ? "bg-blue-500 text-white shadow-md" : "bg-gray-300 text-gray-500"
                              }`}
                            onClick={() => {
                              if (acDisable) {
                                setIsAC(true);
                              }
                            }}
                          >

                          </div>
                          <div
                            className={`flex items-center justify-center w-5 h-4 cursor-pointer rounded-full transition-all duration-300 ${!isAC ? "bg-red-500 text-white shadow-md" : "bg-gray-300 text-red-500"
                              }`}
                            onClick={() => {
                              if (acDisable) {
                                setIsAC(false);
                              }
                            }}
                          >
                          </div>
                        </div>
                        <p className={`md:text-sm text-xxs transition duration-300 ${!isAC ? "text-white" : "text-gray-400 blur-none"}`}>Non AC</p>
                      </div>

                    </div>

                  </div>

                  {/* All listed Cars is here */}

                  {inputData?.adult&&carWithCapacity?.map(item => <div key={item?._id} onClick={() => handleSelected(item)} className="flex border-b-2 border-navyblack justify-around items-center my-3">
                    <Image
                      className="w-40 h-28 object-cover rounded-md"
                      src={item?.imageDetails?.[0]?.url}
                      alt=""
                      width="160"
                      height="180"
                    />
                    <div>
                      <div className="flex flex-col items-center md:items-start ">
                        <p className="font-semibold capitalize md:text-lg text-md">
                          {item?.vehicleType}
                        </p>
                        <div className="flex items-center justify-center mt-2">
                          <p className="md:text-base text-para font-medium">Seats : {item?.seatingCapacity}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-center mt-2 md:text-base text-para font-medium">
                        {(item?.capacity - selectedDataOfCar) === 0 && <p></p>}
                        {(item?.capacity - selectedDataOfCar) > 0 && <p>+{item?.capacity - selectedDataOfCar}</p>}
                        {(item?.capacity - selectedDataOfCar) < 0 && <p>{item?.capacity - selectedDataOfCar}</p>}

                      </div>
                    </div>
                  </div>)}
                  {/* ac trail end*/}
                </div>
              </div>
              <div className=" bottom-0 sticky bg-slate-50 border-t mt-3 py-2 md:px-7 px-5 flex justify-between items-center">
                <div>
                  <div className="flex gap-4">
                    <p className="text-sm">
                      <span className="font-semibold">{inputData?.adult}</span>
                      Adults
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">{inputData?.child}</span>
                      Child
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">{inputData?.infant}</span>
                      Infant
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base">
                      {inputData?.singleRoom +
                        inputData?.twinRoom +
                        inputData?.tripleRoom +
                        inputData?.quardRoom}{" "}
                      Rooms
                    </p>
                  </div>
                  <div className="text-sm flex gap-2 md:gap-4">
                    <p className="font-semibold">{selectedCarIdFetchApi?.vehicleType}</p>
                    <div className="flex itmes-center justify-center">
                      <p className="font-semibold">{selectedCarIdFetchApi?.seatingCapacity}</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={(e) => handleSubmit(e)}
                  className="bg-navyblack  py-2 text-white rounded-md hover:bg-slate-400 px-5"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </Dialog>
      )}
    </div>
  );
};
export default Addguest;
