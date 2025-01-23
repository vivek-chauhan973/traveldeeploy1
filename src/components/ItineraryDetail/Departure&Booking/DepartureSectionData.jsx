import { useAppContext } from "@/components/admin/context/Package/AddGuest";
import { useState, useEffect, useMemo } from "react";

const fetchPriceHike = async (id) => {
  const response = await fetch(`/api/package/price-hike?packageId=${id}`);
  const data = await response.json();
  return data;
};

const fetchFixedDepartureData = async (id) => {
  const response = await fetch(`/api/package/price/departures/${id}`);
  const data = await response.json();

  return data;
};

const useMyCustomHook = () => {
  const { addPackage } = useAppContext();
  const [newPackageId, setNewPackageId] = useState();
  const [priceHike1, setPriceHike1] = useState([]);
  const [packagePrice, setPackagePrice] = useState(0);
  const [fixedDepartureData, setFixedDepartureData] = useState([]);

  useEffect(() => {
    setNewPackageId(addPackage?._id);
    setPackagePrice(addPackage?.price || 0);
  }, [addPackage]);

  useEffect(() => {
    if (newPackageId) {
      fetchPriceHike(newPackageId).then((res) => {
        setPriceHike1(res?.response?.priceHiKe || []);
      });
      fetchFixedDepartureData(newPackageId).then((res) => {
        setFixedDepartureData(res?.departureData || []);
      });
    }
  }, [newPackageId]);

  const AllDataRelatedCity = useMemo(() => {
    const result = [];

    if (addPackage?.addguest === "addGuest") {
      const currentDate = new Date();
      const endDate = new Date(currentDate);
      endDate.setMonth(currentDate.getMonth() + 2);
      const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
      };

      const getDayOfWeek = (date) => {
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
      };

      const dateArray = [];
      for (const item of priceHike1) {
        const pricerate = item?.priceIncrease;

        const startdate1 = new Date(item?.startDate || "");
        const enddate1 = new Date(item?.endDate || "");
        while (startdate1 <= enddate1) {
          const date1 = formatDate(startdate1);
          const obj = {
            date: date1,
            pricerate: pricerate,
          };
          dateArray.push(obj);
          startdate1.setDate(startdate1.getDate() + 1);
        }
      }
      const dateArray1 = [];
      for (let item of dateArray) {
        dateArray1.push(item.date);
      }
      while (currentDate <= endDate) {
        const formattedDate = formatDate(currentDate);
        const dayOfWeek = getDayOfWeek(currentDate);
        const index = dateArray1.indexOf(formattedDate);

        if (dateArray1.includes(formattedDate)) {
          if (index >= 0) {
            const incprice =
              packagePrice + (dateArray[index]?.pricerate * packagePrice) / 100;
            result.push({
              day: dayOfWeek,
              date: formattedDate,
              price: incprice,
              bool1: 1,
              hike: dateArray[index]?.pricerate,
            });
          }
        } else {
          result.push({
            day: dayOfWeek,
            date: formattedDate,
            price: packagePrice,
            bool1: 0,
            hike: 0,
          });
        }

        currentDate.setDate(currentDate.getDate() + 1);
      }
    }
    // console.log("result111", result);

    if (addPackage?.addguest === "fixedDeparture") {
      const data=fixedDepartureData?.filter(item => {
        const date = new Date(item?.Date);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' }); 
        const formattedDate = `${day}-${month}`;
       item.date1=formattedDate;
       const date1=new Date();
       if(date>=date1){
        return item;
       }
       
      })

      result.push(data)

    }
    return [result];
  }, [priceHike1, fixedDepartureData]);

  return AllDataRelatedCity;
};

export default useMyCustomHook;
