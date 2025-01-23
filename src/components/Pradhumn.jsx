import { ChangeEvent, useEffect, useState } from "react";
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
const fetchCarAllCars = async () => {
  const response = await fetch("/api/cars/carapi");
  return await response.json();
};
const fetchCarById = async (id) => {
  const data = await fetch(`/api/cars/car/${id}`);
  return await data.json();
};
const Pradhumn = ({
  guestPrice,
  inputData,
  setInputData,
  setCloseBtn,
  addPackage,
  setShowPopup1,
}) => {
  const date = new Date();
  const date2 = new Date();
  const date3 = new Date(date2);
  const {
    showAddguest,
    setSubmitButtonOfPricingCalculation,
    initialData,
    setGuestPrice,
    departureSectionData,
  } = useAppContext() ?? { showAddguest: false };
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
  const [days, setDays] = useState(0);
  const [open, setOpen] = useState(false);
  const [close1, setClose1] = useState(false);
  const [countSingleRoom, setCountSingleRoom] = useState(0);
  const [countTwinRoom, setCountTwinRoom] = useState(0);
  const [countTripleRoom, setCountTripleRoom] = useState(0);
  const [countQuardRoom, setCountQuardRoom] = useState(0);
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");
  const [selectedCarBool, setSelectedCarBool] = useState(false);
  const [firstSelectedCar, setFirstSelectedCar] = useState(null);
  const [firstSelectedCarPrice, setFirstSelectedCarPrice] = useState(0);
  const [roomError, setRoomError] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // console.log("input data is as ", inputData);
  useEffect(() => {
    setDays(addPackage?.days?.length);
  }, []);
  const infantMinDate = new Date(date.setFullYear(date.getFullYear() - 5))
    .toISOString()
    .split("T")[0];

  const handleClickOpen = () => {
    if (showAddguest) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setClose1(!close1);
  };
  useEffect(() => {
    if (!open) {
      setInputData(initialData);
    }
  }, [open]);

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

  useEffect(() => {
    fetchCarAllCars().then((res) => setCars(res?.data || []));
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowPopup1(false);
    setSubmitButtonOfPricingCalculation(true);
    const childDateInputs = document.querySelectorAll('input[id^="childDate"]');
    if (inputData.adult === "") {
      return alert("Please choose adult first");
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
      setCloseBtn(true);
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
          quadSharingRoom * inputData?.quardRoom * (days - 1) +
          misc * days;

        if (
          inputData?.singleRoom > 0 ||
          inputData?.twinRoom > 0 ||
          inputData?.tripleRoom > 0 ||
          inputData?.quardRoom > 0
        ) {
          setGuestPrice(calculatedPrice);
          setFinal(calculatedPrice);
        }
      }
    }
  }, [inputData, addPackage]);

  useEffect(() => {
    const { markup } = addPackage?.prices;
    const newCalculatedPrice =
      finalPrice + Math.floor((finalPrice * markup) / 100);
    if (departureSectionData?.hike) {
      if (departureSectionData?.hike > 0) {
        const newCalculatedPrice1 =
          newCalculatedPrice +
          Math.floor((newCalculatedPrice * departureSectionData?.hike) / 100);
        setGuestPrice(newCalculatedPrice1);
      } else if (departureSectionData?.hike < 0) {
        const newDiskHike = Math.abs(departureSectionData?.hike);
        const newCalculatedPrice1 =
          newCalculatedPrice -
          Math.floor((newCalculatedPrice * newDiskHike) / 100);
        setGuestPrice(newCalculatedPrice1);
      }
    } else {
      setGuestPrice(newCalculatedPrice);
    }
  }, [finalPrice]);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsAC((prevIsAC) => !prevIsAC);
  };
  useEffect(() => {
    const newarr = [];
    const filteredData = cars?.find(
      (item) => item?.seatingCapacity >= inputData?.adult
    );
    setSelectedDataOfCar(filteredData?.capacity);
    setFirstSelectedCar(filteredData);
    newarr.push(filteredData);
    const filteredData3 = cars?.filter(
      (item) =>
        item?.vehicleType !== filteredData?.vehicleType &&
        item?.seatingCapacity === filteredData?.seatingCapacity
    );
    if (filteredData3?.length !== 0) {
      filteredData3.forEach((item) => {
        newarr.push(item);
        cars.pop(item);
      });
    }
    const filteredData1 = cars?.find((item) => {
      return item?.seatingCapacity > filteredData?.seatingCapacity;
    });
    if (filteredData1) {
      newarr.push(filteredData1);
    }
    const filteredData2 = cars?.filter((item) => {
      return (
        item?.vehicleType !== filteredData1?.vehicleType &&
        item?.seatingCapacity === filteredData1?.seatingCapacity
      );
    });
    if (filteredData1?.length !== 0) {
      filteredData2?.forEach((item) => {
        newarr.push(item);
      });
    }
    setCarWithCapacity(newarr);
  }, [inputData?.adult]);

  useEffect(() => {
    const { markup } = addPackage?.prices;
    const farePrice = firstSelectedCar?.capacity * days;
    const data1 = firstSelectedCar?.ac * days;
    let price = farePrice + data1;

    if (departureSectionData?.hike) {
      const data1 = Math.floor(
        firstSelectedCar?.ac * days +
        (firstSelectedCar?.ac * days * markup) / 100
      );
      if (departureSectionData?.hike > 0) {
        const data2 = Math.floor(
          data1 + (data1 * departureSectionData?.hike) / 100
        );
        // console.log("price is of non selecting default car is as ",data2);
        price = (price + data2);
      } else {
        const data2 = Math.floor(
          data1 - (data1 * Math.abs(departureSectionData?.hike)) / 100
        );
        // console.log("price is of non selecting default car is as ",data2);

        price = (price + data2);
      }
    } else {
      const data1 = Math.floor(
        firstSelectedCar?.ac * days +
        (firstSelectedCar?.ac * days * markup) / 100
      );
      price = (price + data1);
    }
    setFirstSelectedCarPrice(price);
  }, [firstSelectedCar, final]);

  useEffect(() => {
    const farePrice = final + selectedCarIdFetchApi?.capacity * days;
    const data1 = selectedCarIdFetchApi?.ac * days;
    setFinalPrice(farePrice + data1);
  }, [selectedCarIdFetchApi]);
  // useEffect(() => {
  //   const { markup } = addPackage?.prices;
  //   if (departureSectionData?.hike) {
  //     const data1 = Math.floor(
  //       selectedCarIdFetchApi?.ac * days +
  //       (selectedCarIdFetchApi?.ac * days * markup) / 100
  //     );
  //     if (departureSectionData?.hike > 0) {
  //       const data2 = Math.floor(
  //         data1 + (data1 * departureSectionData?.hike) / 100
  //       );
  //       if (isAC) {
  //         // console.log("calculated price -1 ",data2)
  //         setGuestPrice(guestPrice + data2);
  //       } else {
  //         // console.log("calculated price -1 ",data2)
  //         setGuestPrice(guestPrice - data2);
  //       }
  //     } else {
  //       const data2 = Math.floor(
  //         data1 - (data1 * Math.abs(departureSectionData?.hike)) / 100
  //       );
  //       if (isAC) {
  //         console.log("calculated price -1 ",data2)
  //         setGuestPrice(guestPrice + data2);
  //       } else {
  //         // console.log("calculated price -1 ",data2)

  //         setGuestPrice(guestPrice - data2);
  //       }
  //     }
  //   } else {
  //     const data1 = Math.floor(
  //       selectedCarIdFetchApi?.ac * days +
  //       (selectedCarIdFetchApi?.ac * days * markup) / 100
  //     );
  //     if (isAC) {
  //       // console.log("calculated price -1 ",data1)

  //       setGuestPrice(guestPrice + data1);
  //     } else {
  //       // console.log("calculated price -1 ",data1)

  //       setGuestPrice(guestPrice - data1);
  //     }
  //   }
  // }, [isAC]);
  const handleSelected = (item) => {
    const parsedItem = JSON.parse(item);
    setSelectedCarIdFetchApi(parsedItem);
    setSelectedDataOfCar(parsedItem?.capacity);
    setAcDisable(true);
    setSelectedCarBool(true);
    setIsAC(true);
    // console.log("item",parsedItem);
  };
// console.log("selected Car Price---> ",selectedDataOfCar)
  useEffect(() => {
    // console.log("selected Car Of Price ", selectedDataOfCar);
  }, [selectedDataOfCar]);

  useEffect(() => {
    const date1 = new Date();

    // Calculate max date (1 year from current date)
    const max = new Date(date1);
    max.setFullYear(date1.getFullYear());
    const maxFormatted = max.toISOString().split("T")[0];
    setMaxDate(maxFormatted);

    // Calculate min date (5 years before current date)
    const min = new Date(date1);
    min.setFullYear(date1.getFullYear() - 2);
    const minFormatted = min.toISOString().split("T")[0];
    setMinDate(minFormatted);
  }, [minDate, maxDate]);

  // console.log("CarWithCapacity",carWithCapacity?.vehicleType);

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 ">
      <div className="bg-white rounded-lg">
        {addPackage?.prices?.addguest === "addGuest" && (
          <form className="w-full" action="">
            <div className="relative">
              <div className="sticky top-0 shadow-md z-[5]">
                <div
                  className="absolute md:top-3 top-1 md:right-3 right-2 cursor-pointer hover:scale-105"
                  size={28}
                >
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="font1 cursor-pointer"
                    onClick={() => setShowPopup1(false)}
                  />
                </div>
                <div className="flex justify-between items-center py-4  md:pl-5 md:pr-10 pl-2 pr-5 rounded-t-lg z-10 pt-5">
                  <p className=" capitalize md:text-md text-base px-2 md:px-0 font-semibold">
                    add guest & Choose from{ }
                  </p>
                  <div>
                    <p className="text-xl font-semibold">
                      {guestPrice
                        ? guestPrice.toLocaleString("en-IN", {
                          style: "currency",
                          currency: "INR",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })
                        : "₹ --"}
                    </p>
                    {/* <p className="text-xxs">per person on twin sharing</p> */}
                  </div>
                </div>
                <hr />
              </div>
              <div className="md:px-12 px-2 overflow-y-scroll max-h-[500px]">
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
                {/* Child 5-11 here */}
                <div className="mt-2">
                  <div className="flex items-center md:gap-10 md:w-96 w-60 justify-between">
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
                              (Age 5 - 11 yrs)
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
                  {/* child 5-11 date is here */}
                  {[...Array(inputData?.child)].map((_, index) => (
                    <div key={index} className="md:ml-5 pt-2 ">
                      <div className="md:border-l-4 border-l-2 border-red-400 md:pl-5 pl-2 flex flex-col md:flex-row md:items-center md:gap-3 gap-1 my-1">
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
                          max={
                            new Date(date.setFullYear(date.getFullYear()))
                              .toISOString()
                              .split("T")[0]
                          } // Set max attribute to current date
                          min={
                            new Date(date.setFullYear(date.getFullYear() - 6))
                              .toISOString()
                              .split("T")[0]
                          }
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

                {/* Child 3-5  is here */}
                <div className="mt-2 ">
                  <div className="flex items-center md:gap-10 md:w-96 w-60 justify-between">
                    <label htmlFor="Childdropdown2" className="my-2">
                      <div className="flex gap-3 items-center">
                        <FontAwesomeIcon
                          icon={faChild}
                          className="font1 cursor-pointer"
                        />
                        <div>
                          <p className="text-para">
                            Child
                            <span className="  text-slate-400 font-light">
                              (Age 3 - 5 yrs)
                            </span>{" "}
                          </p>
                        </div>
                      </div>
                    </label>

                    <div className="w-14">
                      <select
                        name="infant"
                        value={inputData?.infant}
                        id="Childdropdown2"
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
                  {/* child 3-5 date is here */}
                  {[...Array(inputData?.infant)].map((_, index) => (
                    <div key={index} className="md:ml-5 pt-2 ">
                      <div className="md:border-l-4 border-l-2 border-red-400 md:pl-5 pl-2 flex flex-col md:flex-row mditems-center md:gap-3 gap-1 my-1">
                        <label
                          className="text-para"
                          htmlFor={`Childdropdown2${index}`}
                        >
                          Child {index + 1}
                        </label>
                        <input
                          id={`Childdropdown2${index}`}
                          className="px-2 md:w-52 py-1 border focus:border rounded-md cursor-pointer text-base"
                          type="date"
                          // max={new Date().toISOString().split("T")[0]}
                          max={maxDate}
                          min={minDate}
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
                {/* Infant  is here */}
                <div className="mt-2 ">
                  <div className="flex items-center md:gap-10 md:w-96 w-60 justify-between">
                    <label htmlFor="infantdropdown" className="my-2">
                      <div className="flex gap-3 items-center">
                        <FontAwesomeIcon
                          icon={faBaby}
                          className="font1 cursor-pointer"
                        />
                        <div>
                          <p className="text-para">
                            Infant
                            <span className="  text-slate-400 font-light">
                              (Age 0 - 3 yrs)
                            </span>{" "}
                          </p>
                        </div>
                      </div>
                    </label>

                    <div className="w-14">
                      <select
                        name="infant1"
                        value={inputData?.infant1}
                        id="infantdropdown"
                        className={`border w-full py-1 rounded-md ${inputData?.infant1 === 0 &&
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
                  {/* Infant date is here */}
                  {[...Array(inputData?.infant1)].map((_, index) => (
                    <div key={index} className="md:ml-5 pt-2 ">
                      <div className="md:border-l-4 border-l-2 border-red-400 md:pl-5 pl-2 flex flex-col md:flex-row mditems-center md:gap-3 gap-1 my-1">
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
                          min={
                            new Date(date3.setFullYear(date2.getFullYear() - 6))
                              .toISOString()
                              .split("T")[0]
                          }
                          onChange={(e) => handleDateChange1(e, index)}
                        />
                        <span className="text-red-400 text-xs font-medium">
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
                          Double Room
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
                          Double Room + 1 Extra Bed
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
                          Double Room + 2 Extra Bed
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
                  <div className="w-full gap-2 border-t-2 border-gray-600 flex justify-between items-center p-2">
                    <p className="font-semibold text-base md:text-md">
                      Choose Transport Options
                    </p>
                    <div className="flex items-center space-x-2">
                      {/* AC Option / Non AC Option toggle */}
                      <p
                        className={`md:text-sm text-xxs transition duration-300 ${isAC ? "text-black" : "text-gray-400 blur-none"
                          }`}
                      >
                        AC
                      </p>
                      <div className=" w-10 h-5 flex justify-between items-center rounded-full bg-white border border-black">
                        <div
                          className={`flex items-center justify-center  w-5 h-4 cursor-pointer rounded-full transition-all duration-300 ${isAC
                            ? "bg-navyblack shadow-md"
                            : "bg-white text-gray-500"
                            }`}
                          onClick={() => {
                            if (acDisable) {
                              setIsAC(true);
                            }
                          }}
                        ></div>
                        <div
                          className={`flex items-center justify-center w-5 h-4 cursor-pointer rounded-full transition-all duration-300 ${!isAC
                            ? "bg-navyblack  shadow-md"
                            : "bg-white text-red-500"
                            }`}
                          onClick={() => {
                            if (acDisable) {
                              setIsAC(false);
                            }
                          }}
                        ></div>
                      </div>
                      <p
                        className={`md:text-sm text-xxs transition duration-300 ${!isAC ? "text-black" : "text-gray-400 blur-none"
                          }`}
                      >
                        Non AC
                      </p>
                    </div>
                  </div>
                </div>

                {/* All listed Cars is here */}

                {inputData?.adult &&
                  carWithCapacity?.map((item) => (
                    <div
                      key={item?._id}
                      // onClick={() => handleSelected(item)}
                      className="flex-col md:flex-row flex flex-1 gap-5 border-b py-3"
                    >
                      <div className="flex flex-2 justify-center items-center w-full md:w-auto md:justify-normal">
                        <Image
                          className="w-40 h-28 object-cover rounded-md"
                          src={item?.imageDetails?.[0]?.url}
                          alt=""
                          width="160"
                          height="180"
                        />
                      </div>
                      <div className=" flex flex-1 mb-3">
                        <div className="flex flex-col flex-1 justify-start md:justify-center md:pl-0 pl-4">
                          <p className="font-bold capitalize text-md ">
                            {item?.vehicleType}
                          </p>
                          <p className="text-[10px] font-medium text-gray-500 capitalize">
                            {item?.seatingCapacity} passenger seating capacity
                          </p>
                          <div className="cursor-pointer flex justify-start items-center mt-1">
                            <input
                              type="radio"
                              value={JSON.stringify(item)}
                              name="choice"
                              className="accent-navyblack h-4 w-4 cursor-pointer mr-1"
                              onClick={(e) => {
                                if (
                                  !(
                                    inputData?.singleRoom > 0 ||
                                    inputData?.twinRoom > 0 ||
                                    inputData?.tripleRoom > 0 ||
                                    inputData?.quardRoom > 0
                                  )
                                ) {
                                  e.preventDefault(); // Prevent default behavior of the radio button
                                  setRoomError("Please select a room first.");
                                } else {
                                  setRoomError(""); // Clear the error if the condition is met
                                  handleSelected(e.target.value)
                                }
                              }}
                            />
                            <label className="text-para text-gray-800 font-medium">
                              Select Vehicle
                            </label>
                          </div>
                          {roomError && (
                            <p className="text-red-500 text-xxs ml-5">{roomError}</p>
                          )}
                        </div>
                        <div className="flex flex-2 justify-center items-center w-20 md:w-24  md:text-lg text-md font-bold">
                          {item?.capacity - selectedDataOfCar === 0 && <p></p>}
                          {item?.capacity - selectedDataOfCar > 0 && (
                            <p>
                              +
                              {(
                                item?.capacity - selectedDataOfCar
                              ).toLocaleString("en-IN", {
                                style: "currency",
                                currency: "INR",
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                              })}
                            </p>
                          )}
                          {item?.capacity - selectedDataOfCar < 0 && (
                            <p>
                              {(
                                item?.capacity - selectedDataOfCar
                              ).toLocaleString("en-IN", {
                                style: "currency",
                                currency: "INR",
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                              })}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className=" bottom-0 sticky bg-slate-50 rounded-b-lg border-t mt-3 py-2 md:px-7 px-5 flex justify-between items-center">
                <div>
                  <div className="flex gap-4">
                    <p className="text-sm">
                      <span className="font-semibold">{inputData?.adult}</span>{" "}
                      Adults
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">{inputData?.child}</span>{" "}
                      Child
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">{inputData?.infant}</span>{" "}
                      Infant
                    </p>
                  </div>
                  <div className="flex gap-2 text-sm md:text-para font-semibold ">
                    <p>
                      {inputData?.singleRoom +
                        inputData?.twinRoom +
                        inputData?.tripleRoom +
                        inputData?.quardRoom}{" "}
                      Rooms
                    </p>
                    <div className="flex gap-1">
                      <p>{selectedCarIdFetchApi?.vehicleType}</p>
                      <p>{selectedCarIdFetchApi?.seatingCapacity ? `${selectedCarIdFetchApi?.seatingCapacity}S` : " "}</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={(e) => handleSubmit(e)}
                  className={`${selectedCarBool ? "bg-gradient-to-r from-orange-500 to-red-500" : "bg-gradient-to-r from-orange-300 to-red-300 cursor-not-allowed"}
                                     md:text-base text-sm text-white rounded-md md:px-5 md:py-2 px-4 py-1.5 hover:opacity-90`}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
export default Pradhumn;
