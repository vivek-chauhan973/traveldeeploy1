// here is my custome hook
// useMyCustomHook.js
import { useAppContext } from "@/components/admin/context/Package/AddGuest";
import { useState, useEffect } from "react";

const fetchPriceHike = async (id) => {
  const response = await fetch(`/api/package/price-hike?packageId=${id}`);
  const data = await response.json();
  return data;
};
const fetchFixedDepartureData=async (itinerary)=>{
    const response = await fetch(`/api/save-data?packageId=${itinerary}`)
    return await response.json();
}
const useMyCustomHook = () => {
  // all api calling is here
  const { addPackage } = useAppContext();
  const [newPackageId, setNewPackageId] = useState();
  const [priceHike, setPriceHike] = useState({});
  const [initialDate, setInitialDate] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [priceIncrease, setPriceIncrease] = useState(0);
  const [isActiveState, setIsActiveState] = useState(false);
  const [packagePrice, setPackagePrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [fixedDepartureData,setFixedDepartureData]=useState([]);
  const startdate1 = new Date(initialDate);
  const enddate1 = new Date(lastDate);
  const dateArray = [];

  //here is the logic of price-hike calculation
  useEffect(() => {
    setInitialDate(priceHike?.startDate || "");
    setLastDate(priceHike?.endDate || "");
    setPriceIncrease(priceHike?.priceIncrease);
    setPackagePrice(addPackage?.price);
    console.log("Price hike ::: ::: :: :: :: ",addPackage?.price)
  }, [priceHike]);
  useEffect(() => {
    const incprice=(priceIncrease*packagePrice)/100;
    setTotalPrice(packagePrice + incprice);
    // setPrice1(packagePrice + incprice)
  }, [priceIncrease, packagePrice]);

  const AllDataRelatedCity = [];
  for (let i = 0; i < addPackage?.startcity?.length; i++) {
    AllDataRelatedCity.push([]);
  }

  // claculate two months logic here and addguest calculation 

  if (addPackage?.addguest === "addGuest") {
    const currentDate = new Date();

    const endDate = new Date(currentDate);
    endDate.setMonth(currentDate.getMonth() + 2);

    function formatDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1);
      const day = String(date.getDate());
      return `${year}-${month}-${day}`;
    }

    function getDayOfWeek(date) {
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      return days[date.getDay()];
    }

    while (startdate1 <= enddate1) {
      const date1 = formatDate(startdate1);
      dateArray.push(date1);
      startdate1.setDate(startdate1.getDate() + 1);
    }
    while (currentDate <= endDate) {
      const formattedDate = formatDate(currentDate);
      const dayOfWeek = getDayOfWeek(currentDate);
      if (dateArray?.includes(formattedDate)) {
        // console.log("price hike found successfully");
        AllDataRelatedCity?.[0]?.push({
          day: dayOfWeek,
          date: formattedDate,
          price: totalPrice,
        });
      } else {
        AllDataRelatedCity?.[0]?.push({
          day: dayOfWeek,
          date: formattedDate,
          price: packagePrice,
        });
      }

      currentDate.setDate(currentDate.getDate() + 1);
    }
  }
  if(addPackage?.addguest ==="fixedDeparture"){
   
    fixedDepartureData?.map(item=> AllDataRelatedCity?.[0]?.push(item))
  }
  useEffect(() => {
    setNewPackageId(addPackage?._id);
  }, [addPackage]);
  useEffect(() => {
    fetchPriceHike(newPackageId).then((res) =>
      setPriceHike(res?.response || {})
    );
    fetchFixedDepartureData(newPackageId).then(res=>setFixedDepartureData(res?.data?.datePriceArray||[]));
  }, [newPackageId]);
  
  return AllDataRelatedCity;
};

export default useMyCustomHook;
