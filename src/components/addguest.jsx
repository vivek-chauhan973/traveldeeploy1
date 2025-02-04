import { ChangeEvent, useEffect, useRef, useState } from "react";
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
const Addguest = ({
  guestPrice,
  inputData,
  setInputData,
  setCloseBtn,
  addPackage,
  setShowPopup1,
}) => {
  const prevAdultRef = useRef();
  const carpricingRef = useRef(0);
  const acpriceRef = useRef(0);
  const radioGroupRef = useRef(null);
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
  const [selectedCarIdFetchApi, setSelectedCarIdFetchApi] = useState("");
  // const infantMaxDate = date.toISOString().split("T")[0];
  const [isAC, setIsAC] = useState(true);
  const [carWithCapacity, setCarWithCapacity] = useState([]);
  const [acDisable, setAcDisable] = useState(false);
  const [days, setDays] = useState(0);
  const [open, setOpen] = useState(false);
  const [countSingleRoom, setCountSingleRoom] = useState(0);
  const [countTwinRoom, setCountTwinRoom] = useState(0);
  const [countTripleRoom, setCountTripleRoom] = useState(0);
  const [countQuardRoom, setCountQuardRoom] = useState(0);
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");
  const [selectedCarBool, setSelectedCarBool] = useState(false);
  const [isSelectedCar, setIsSelectedCar] = useState(false);

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


  // <---------calculation of addguest and packages according to availabilty of room sharing--------->

  useEffect(() => {
    // Ensure prices are reset when adult count is z
    const currentAdult = inputData?.adult;
    // Access the previous value of inputData.adult
    const previousAdult = prevAdultRef.current;
    // Update the ref with the current value for the next render
    prevAdultRef.current = currentAdult;
    if (currentAdult !== previousAdult) {
      carpricingRef.current = 0;
      acpriceRef.current = 0;
      setSelectedCarIdFetchApi(null)
      if (currentAdult) {
        setInputData({
          ...inputData,
          singleRoom: 0,
          twinRoom: 0,
          quardRoom: 0,
          tripleRoom: 0,
        });
      }
    }
    if (addPackage?.addguest === "addGuest" && addPackage?.prices) {
      const {
        childOverFive,
        childUnderFive,
        misc,
        markup,
        singleRoom,
        twinSharingRoom,
        tripleSharingRoom,
        quadSharingRoom,
      } = addPackage?.prices;

      const hike = departureSectionData?.hike;

      let calculatedPrice = 0; // Reset calculatedPrice at the start

      const calculateRoomPrice = (roomPrice, count) => {
        let basePrice = roomPrice * count * (days - 1);
        let totalPrice = basePrice + (basePrice * markup) / 100;

        if (hike > 0) {
          totalPrice += (totalPrice * hike) / 100;
        } else {
          totalPrice -= (totalPrice * Math.abs(hike)) / 100;
        }
        return totalPrice;
      };
      // Calculate price for each category
      calculatedPrice += calculateRoomPrice(childOverFive, inputData?.child || 0);
      // console.log("markup data is 1", calculateRoomPrice(childOverFive, inputData?.child || 0, inputData?.adult))

      calculatedPrice += calculateRoomPrice(childUnderFive, inputData?.infant || 0);
      // console.log("markup data is 2 ", calculateRoomPrice(childUnderFive, inputData?.infant || 0, inputData?.adult))

      calculatedPrice += calculateRoomPrice(singleRoom, inputData?.singleRoom || 0);
      // console.log("markup data is 3", calculateRoomPrice(singleRoom, inputData?.singleRoom || 0, inputData?.adult))

      calculatedPrice += calculateRoomPrice(twinSharingRoom, inputData?.twinRoom || 0);
      // console.log("markup data is 4 ", calculateRoomPrice(twinSharingRoom, inputData?.twinRoom || 0, inputData?.adult))

      calculatedPrice += calculateRoomPrice(tripleSharingRoom, inputData?.tripleRoom || 0);
      // console.log("markup data is 5 ", calculateRoomPrice(tripleSharingRoom, inputData?.tripleRoom || 0, inputData?.adult))

      calculatedPrice += calculateRoomPrice(quadSharingRoom, inputData?.quardRoom || 0);
      // console.log("markup data is 6 ", calculateRoomPrice(quadSharingRoom, inputData?.quardRoom || 0, inputData?.adult))

      // Miscellaneous price
      let miscBasePrice = misc * days;
      let miscTotalPrice = miscBasePrice + (miscBasePrice * markup) / 100;
      if (hike > 0) {
        miscTotalPrice += (miscTotalPrice * hike) / 100;
      } else {
        miscTotalPrice -= (miscTotalPrice * Math.abs(hike)) / 100;
      }
      calculatedPrice += miscTotalPrice;
      // setGuestPrice(calculatedPrice);
      if (
        (inputData?.singleRoom > 0 ||
          inputData?.twinRoom > 0 ||
          inputData?.tripleRoom > 0 ||
          inputData?.quardRoom > 0)
      ) {
        setGuestPrice(calculatedPrice);
      }
      else {
        setSelectedCarIdFetchApi(null)
        setGuestPrice(0);
      }

    }
  }, [inputData, addPackage, departureSectionData, days]);

  // <-------reset calculation here------->

  useEffect(() => {
    if (inputData?.adult === 0) {
      carpricingRef.current = 0;
      acpriceRef.current = 0;
      setSelectedCarIdFetchApi(null)
      setInputData(initialData);
    }
  }, [inputData?.adult === 0])

  // <-------Handle Car filter according to choosing adults--------> 

  useEffect(() => {
    const newarr = [];
    const filteredData = cars?.find(
      (item) => item?.seatingCapacity >= inputData?.adult
    );
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

  //<-----handle selection of car here---->

  const handleSelected = (item) => {
    const parsedItem = JSON.parse(item);
    // setGuestPrice(guestPrice+acpriceRef.current)
    console.log("ref current ------> ", carpricingRef.current)
    console.log("ref current 123456 ------> ", guestPrice)
    const {
      markup,
    } = addPackage?.prices;
    const { hike } = departureSectionData;
    if (parsedItem === null || parsedItem === undefined) {
      return
    }
    let carcost = 0;
    const { capacity, ac } = parsedItem;
    let acprice = 0;
    carcost = capacity + ac;
    carcost = carcost + carcost * markup / 100;
    acprice = ac + ac * markup / 100;
    if (hike >= 0) {
      acprice = acprice + acprice * hike / 100;
      carcost = carcost + carcost * hike / 100;
    }
    else {
      acprice = acprice - acprice * hike / 100;
      carcost = carcost - carcost * hike / 100;
    }
    setGuestPrice(guestPrice + carcost * days - carpricingRef.current);
    carpricingRef.current = carcost * days;
    acpriceRef.current = acprice * days;
    setSelectedCarIdFetchApi(parsedItem);
    setAcDisable(true);
    setSelectedCarBool(true);
    setIsAC(true);
    setIsSelectedCar(true);
  };
  useEffect(() => {
    setCarWithCapacity(carWithCapacity)
  }, [inputData?.singleRoom, inputData?.twinRoom, inputData?.tripleRoom, inputData?.quardRoom])
  useEffect(() => {
    if (!isAC) {
      setGuestPrice(guestPrice - acpriceRef.current)
    }
    else {
      setGuestPrice(guestPrice + acpriceRef.current)
    }
  }, [isAC]);

  // console.log("Guest Price ------> ", guestPrice)
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





  // <------Reset All the data logic here clicking on Reset Button ----->

  const handleReset = (e) => {
    e.preventDefault()
    setInputData(initialData);
    setIsSelectedCar(false)
    setSelectedCarBool(false)
    setCountSingleRoom(0); setCountTwinRoom(0); setCountTripleRoom(0); setCountQuardRoom(0);
  }

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
                      disabled={isSelectedCar}
                      value={inputData?.adult}
                      id="Adultsdropdown"
                      ref={prevAdultRef}
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
                        disabled={inputData?.adult === 0 || isSelectedCar} // Disable if adult count is 0
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
                        disabled={inputData?.adult === 0 || isSelectedCar} // Disable if adult count is 0
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
                        disabled={inputData?.adult === 0 || isSelectedCar} // Disable if adult count is 0
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
                        <button
                          disabled={isSelectedCar}
                          onClick={(e) => {
                            e.preventDefault()
                            handleDecrement("singleRoom")
                          }}
                          size={18}
                          className="cursor-pointer text-navyblack hover:text-slate-700"
                        >
                          <FontAwesomeIcon
                            icon={faCircleMinus}
                            className="font1 cursor-pointer"
                          />
                        </button>
                        <p
                          className="text-para w-3 mr-1 text-center"
                          onChange={(e) => handleChange}
                        >
                          {countSingleRoom}
                        </p>
                        <button
                          disabled={isSelectedCar}
                          onClick={(e) => { e.preventDefault(); handleIncrement("singleRoom") }}
                          size={19}
                          className="cursor-pointer text-navyblack hover:text-slate-700"
                        >
                          <FontAwesomeIcon
                            icon={faCirclePlus}
                            className="font1 cursor-pointer"
                          />
                        </button>
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
                        <button
                          disabled={isSelectedCar}
                          onClick={(e) => { e.preventDefault(); handleDecrement("twinRoom") }}
                          className="cursor-pointer text-navyblack hover:text-slate-700"
                        >
                          <FontAwesomeIcon
                            icon={faCircleMinus}
                            className="font1 cursor-pointer"
                          />
                        </button>
                        <p
                          onChange={(e) => handleChange}
                          className="text-para w-3 mr-1 text-center"
                        >
                          {countTwinRoom}
                        </p>
                        <button
                          disabled={isSelectedCar}
                          onClick={(e) => { e.preventDefault(); handleIncrement("twinRoom") }}
                          className="cursor-pointer text-navyblack hover:text-slate-700"
                        >
                          <FontAwesomeIcon
                            icon={faCirclePlus}
                            className="font1 cursor-pointer"
                          />
                        </button>
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
                        <button
                          disabled={isSelectedCar}
                          onClick={(e) => { e.preventDefault(); handleDecrement("tripleRoom") }}
                          className="cursor-pointer text-navyblack hover:text-slate-700"
                        >
                          <FontAwesomeIcon
                            icon={faCircleMinus}
                            className="font1 cursor-pointer"
                          />
                        </button>

                        <p
                          onChange={(e) => handleChange}
                          className="text-para w-3 mr-1 text-center"
                        >
                          {countTripleRoom}
                        </p>
                        <button
                          disabled={isSelectedCar}
                          onClick={(e) => { e.preventDefault(); handleIncrement("tripleRoom") }}
                          className="cursor-pointer text-navyblack hover:text-slate-700"
                        >
                          <FontAwesomeIcon
                            icon={faCirclePlus}
                            className="font1 cursor-pointer"
                          />
                        </button>
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
                        <button
                          disabled={isSelectedCar}
                          onClick={() => { e.preventDefault(); handleDecrement("quardRoom") }}
                          className="cursor-pointer text-navyblack hover:text-slate-700"
                        >
                          <FontAwesomeIcon
                            icon={faCircleMinus}
                            className="font1 cursor-pointer"
                          />
                        </button>
                        <p
                          onChange={(e) => handleChange}
                          className="text-para w-3 mr-1 text-center"
                        >
                          {countQuardRoom}
                        </p>
                        <button
                          disabled={isSelectedCar}
                          onClick={(e) => { e.preventDefault(); handleIncrement("quardRoom") }}
                          className="cursor-pointer text-navyblack hover:text-slate-700"
                        >
                          <FontAwesomeIcon
                            icon={faCirclePlus}
                            className="font1 cursor-pointer"
                          />
                        </button
                        >
                      </div>
                    </div>
                  </div>
                </div>
                {/* here is display all cars */}
                {(inputData?.singleRoom > 0 ||
                  inputData?.twinRoom > 0 ||
                  inputData?.tripleRoom > 0 ||
                  inputData?.quardRoom > 0) && <div>
                    <div className="mt-8 ">
                      <div className="w-full gap-2 border-t-2 border-gray-600 flex justify-between items-center p-2">
                        <p className="font-semibold text-para md:text-md">
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

                    {inputData?.adult && (inputData?.singleRoom > 0 ||
                      inputData?.twinRoom > 0 ||
                      inputData?.tripleRoom > 0 ||
                      inputData?.quardRoom > 0) &&
                      carWithCapacity?.map((item) => {

                        let calculatedAcPrice = 0;
                        const { markup } = addPackage?.prices;
                        const { hike } = departureSectionData;

                        calculatedAcPrice = (item?.capacity + item?.ac) * days;
                        calculatedAcPrice += calculatedAcPrice * markup / 100;

                        if (hike >= 0) {
                          calculatedAcPrice += calculatedAcPrice * hike / 100;
                        }
                        else {
                          calculatedAcPrice -= calculatedAcPrice * hike / 100;
                        }

                        return (
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
                                <div ref={radioGroupRef} className="cursor-pointer flex justify-start items-center mt-1">
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
                                        ;
                                      } else {
                                        // Clear the error if the condition is met
                                        handleSelected(e.target.value)
                                      }
                                    }}
                                  />
                                  <label className="text-para text-gray-800 font-medium">
                                    Select Vehicle
                                  </label>
                                </div>

                              </div>
                              {selectedCarIdFetchApi && <div className="flex flex-2 justify-center items-center w-20 md:w-24  md:text-lg text-md font-bold">
                                {(calculatedAcPrice - carpricingRef?.current) === 0 && <p></p>}
                                {(calculatedAcPrice - carpricingRef?.current) > 0 && (
                                  <p>
                                    +
                                    {(calculatedAcPrice - carpricingRef?.current).toLocaleString("en-IN", {
                                      style: "currency",
                                      currency: "INR",
                                      minimumFractionDigits: 0,
                                      maximumFractionDigits: 0,
                                    })}
                                  </p>
                                )}
                                {(calculatedAcPrice - carpricingRef?.current) < 0 && (
                                  <p>
                                    {(calculatedAcPrice - carpricingRef?.current).toLocaleString("en-IN", {
                                      style: "currency",
                                      currency: "INR",
                                      minimumFractionDigits: 0,
                                      maximumFractionDigits: 0,
                                    })}
                                  </p>
                                )}
                              </div>}
                            </div>
                          </div>
                        )
                      })}
                  </div>}
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
                <div className=" gap-3 hidden md:flex ">
                  <button
                    onClick={(e) => handleReset(e)}
                    className={`${selectedCarBool ? "bg-navyblack" : "bg-gradient-to-r from-gray-400 to-navyblack cursor-not-allowed"}
                                     md:text-base text-sm text-white rounded-md md:px-5 md:py-2 px-4 py-1.5 hover:opacity-90`}
                  >
                    Reset
                  </button>
                  <button
                    onClick={(e) => handleSubmit(e)}
                    className={`${selectedCarBool ? "bg-gradient-to-r from-orange-500 to-red-500" : "bg-gradient-to-r from-orange-300 to-red-300 cursor-not-allowed"}
                                     md:text-base text-sm text-white rounded-md md:px-5 md:py-2 px-4 py-1.5 hover:opacity-90`}
                  >
                    Submit
                  </button>

                </div>
              </div>
              <div className="flex md:hidden justify-around mb-4 ">
                <button
                  onClick={(e) => handleReset(e)}
                  className={`${selectedCarBool ? "bg-navyblack" : "bg-gradient-to-r from-gray-400 to-navyblack cursor-not-allowed"}
                                     md:text-base text-sm text-white rounded-md md:px-5 md:py-2 px-10 py-1.5 hover:opacity-90`}
                >
                  Reset
                </button>
                <button
                  onClick={(e) => handleSubmit(e)}
                  className={`${selectedCarBool ? "bg-gradient-to-r from-orange-500 to-red-500" : "bg-gradient-to-r from-orange-300 to-red-300 cursor-not-allowed"}
                                     md:text-base text-sm text-white rounded-md md:px-5 md:py-2 px-10 py-1.5 hover:opacity-90`}
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
export default Addguest;
