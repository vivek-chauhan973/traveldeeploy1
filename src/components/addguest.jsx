import { ChangeEvent, useState } from "react";
import Dialog from "@mui/material/Dialog";
import Image from "next/image";
import { useAppContext } from "./admin/context/Package/AddGuest";



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChild, faCircleMinus, faPerson, faBaby, faCirclePlus, faCircleXmark } from '@fortawesome/free-solid-svg-icons';


const Addguest = ({
  children,
  guestPrice,
  inputData,
  setInputData,
  setCloseBtn,
  addPackage
}) => {
  const date = new Date();
  const { showAddguest } = useAppContext() ?? { showAddguest: false };

  const infantMaxDate = date.toISOString().split("T")[0];
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

  const handleClose = () => {
    setOpen(false);
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCloseBtn(true);
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
      handleClose();
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

  // AC/NonAC
  const [isAC, setIsAC] = useState(true);

  const handleToggle = (e) => {
    e.preventDefault()
    setIsAC(prevIsAC => !prevIsAC);
  };

  // ==================================Changes========================================================
  return (
    <div>
      <span onClick={handleClickOpen}>{children}</span>
      {addPackage?.prices?.addguest === "addGuest" && <Dialog
        className="h-full my-auto px-0 z-[99999]"
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form className="w-full" action="">
          <div>
            <div className="relative">
              <div className="sticky top-0 shadow-md z-[5]">
                <div className="flex justify-between items-center py-4  px-[2vw] bg-white z-10">
                  <p className=" capitalize text-md font-semibold">
                    add guest & Choose from{ }
                  </p>
                  <div>
                    {/* <p className="text-lg font-medium"> ₹ {guestPrice}</p>
                    <p className="text-xxs">per person on twin sharing</p> */}
                  </div>
                </div>

                <div className=" absolute top-3 right-3 cursor-pointer hover:scale-105"
                  onClick={handleClose}
                  size={28}>
                <FontAwesomeIcon icon={faCircleXmark} className='font1 cursor-pointer' />
                </div>
             
                <hr />
              </div>
              <div className="overflow-y-auto md:px-12 px-2">
                <div className="flex items-center gap-10 mt-5 md:w-72 w-64 justify-between">
                  <label htmlFor="Adultsdropdown" className="my-2">
                    <div className="flex gap-3 items-center">
                      <FontAwesomeIcon icon={faPerson} className='font1 cursor-pointer' />
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
                  <div className="flex items-center gap-10 md:w-72 w-64 justify-between">
                    <label htmlFor="Childdropdown" className="my-2">
                      <div className="flex gap-3 items-center">

                        <FontAwesomeIcon icon={faChild} className='font1 cursor-pointer' />
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
                    <div key={index} className="ml-5 pt-2 ">
                      <div className="border-l-4 border-red-400 pl-5 flex items-center gap-2">
                        <label
                          className="text-para"
                          htmlFor={`childDate${index}`}
                        >
                          Child {index + 1}
                        </label>
                        <input
                          id={`childDate${index}`}
                          className="px-2 border focus:border rounded-md cursor-pointer text-base"
                          type="date"
                          max={new Date().toISOString().split("T")[0]} // Set max attribute to current date
                          min={childMinDate}
                          onChange={(e) => handleDateChange(e, index)}
                        />

                        <span className="text-red-400 text-sm">
                          Select{" "}
                          {inputData?.childAges[index] &&
                            `${inputData?.childAges[index].years} yrs ${inputData?.childAges[index].months} months`}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Infant date is here */}
                <div className="mt-2">
                  <div className="flex items-center gap-10 md:w-72 w-64 justify-between">
                    <label htmlFor="Childdropdown" className="my-2">
                      <div className="flex gap-3 items-center">
                        <FontAwesomeIcon icon={faBaby} className='font1 cursor-pointer' />
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
                    <div key={index} className="ml-5 pt-2 ">
                      <div className="border-l-4 border-red-400 pl-5 flex items-center gap-2">
                        <label
                          className="text-para"
                          htmlFor={`InfantDate${index}`}
                        >
                          Infant {index + 1}
                        </label>
                        <input
                          id={`InfantDate${index}`}
                          className="px-2 border focus:border rounded-md cursor-pointer text-base"
                          type="date"
                          max={new Date().toISOString().split("T")[0]} // Set max attribute to current date
                          min={infantMinDate}
                          onChange={(e) => handleDateChange1(e, index)}
                        />

                        <span className="text-red-400 text-sm">
                          Select{" "}
                          {inputData?.infantAges[index] &&
                            `${inputData?.infantAges[index].years} yrs ${inputData?.infantAges[index].months} months`}
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
                          <FontAwesomeIcon icon={faCircleMinus} className='font1 cursor-pointer' />
                        </div>

                        <p
                          className="text-para w-3 mr-1 text-center"
                          onChange={(e) => handleChange}
                        >
                          {countSingleRoom}
                        </p>
                        <div onClick={() => handleIncrement("singleRoom")}
                          size={19}
                          className="cursor-pointer text-navyblack hover:text-slate-700">
                          <FontAwesomeIcon icon={faCirclePlus} className='font1 cursor-pointer' />
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
                        <div onClick={() => handleDecrement("twinRoom")}
                          className="cursor-pointer text-navyblack hover:text-slate-700">
                          <FontAwesomeIcon icon={faCircleMinus} className='font1 cursor-pointer' />
                        </div>
                        <p
                          onChange={(e) => handleChange}
                          className="text-para w-3 mr-1 text-center"
                        >
                          {countTwinRoom}
                        </p>
                        <div onClick={() => handleIncrement("twinRoom")} className="cursor-pointer text-navyblack hover:text-slate-700">
                          <FontAwesomeIcon icon={faCirclePlus} className='font1 cursor-pointer' />
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
                        <div onClick={() => handleDecrement("tripleRoom")}
                          className="cursor-pointer text-navyblack hover:text-slate-700">
                        <FontAwesomeIcon icon={faCircleMinus} className='font1 cursor-pointer' />
                        </div>
                     
                        <p
                          onChange={(e) => handleChange}
                          className="text-para w-3 mr-1 text-center"
                        >
                          {countTripleRoom}
                        </p>
                        <div onClick={() => handleIncrement("tripleRoom")}
                          className="cursor-pointer text-navyblack hover:text-slate-700">
                        <FontAwesomeIcon icon={faCirclePlus} className='font1 cursor-pointer' />
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
                        <div   onClick={() => handleDecrement("quardRoom")}
                          className="cursor-pointer text-navyblack hover:text-slate-700">
                        <FontAwesomeIcon icon={faCircleMinus} className='font1 cursor-pointer' />
                        </div>
                     
                        <p
                          onChange={(e) => handleChange}
                          className="text-para w-3 mr-1 text-center"
                        >
                          {countQuardRoom}
                        </p>
                        <div   onClick={() => handleIncrement("quardRoom")}
                          className="cursor-pointer text-navyblack hover:text-slate-700">
                        <FontAwesomeIcon icon={faCirclePlus} className='font1 cursor-pointer' />
                        </div>
                    
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="pl-3 w-full bg-navyblack rounded-md text-white flex justify-between items-center">
                    <p>Transports</p>
                    <button
                      onClick={handleToggle}
                      className={`px-4 py-2 rounded-r-md ${isAC ? 'bg-primary' : 'bg-red-500'}`}
                    >
                      {isAC ? 'AC' : 'NonAC'}
                    </button>
                  </div>
                  <div className="flex-col flex items-center justify-between md:border-b md:flex-row mb-2">
                    <Image
                      className=" w-32 h-24 object-cover"
                      src="https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80"
                      alt=""
                      width="125"
                      height="150"
                    />
                    <div className="items-center flex flex-col md:block">
                      <p className="font-semibold">Sedan{" "}</p>
                      <div className="flex itmes-center justify-center">
                        <p className="text-para">6</p>
                      </div>
                    </div>
                    <div className="items-center flex flex-col">
                      <button className="border border-navyblack  text-navyblack text-para px-5 py-2 rounded-md hover:bg-navyblack hover:text-white">
                        Select
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className=" bottom-0 sticky bg-slate-50 border-t py-2 md:px-7 px-5 flex justify-between items-center">
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
                  <p className="font-semibold">Sedan</p>
                  <div className="flex itmes-center justify-center">

                    <p className="font-semibold">6</p>
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
      </Dialog>}

    </div>
  );
};
export default Addguest;
