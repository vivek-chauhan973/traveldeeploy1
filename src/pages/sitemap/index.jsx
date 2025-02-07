import React, { useEffect, useState } from 'react'
import "../../app/globals.css";
import DesktopHeader from '@/components/Header/DesktopHeader/desktopHeader'
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useCarPopupContext } from '@/components/admin/context/CarPopupCalculation';
import Link from "next/link";

const fetchItineraryData = async () => {
  const response = await fetch(`/api/cars/package/get-packages`);
  const data = await response.json();
  return data;
};
const fetchCatagories = async () => {
  const categoriesList = await fetch('/api/package-setting/category/get-categories');
  const data = await categoriesList.json();
  return data;
}

const Sitemap = (pageprops) => {
  const { setServerSideProps,searchedData} = useCarPopupContext();       
  useEffect(() => {
    if(pageprops){
      setServerSideProps(pageprops || {});
    }
    
  }, [pageprops]);
// India our package
  const tours = searchedData?.map(item => item.name) || [];

  const groupedTours = tours.sort().reduce((acc, tour) => {
    const firstLetter = tour[0].toUpperCase();
    if (!acc[firstLetter]) acc[firstLetter] = [];
    acc[firstLetter].push(tour);
    return acc;
  }, {});

  const [carPackage, setCarPackage] = useState([]);
  const [categories, setCatagories] = useState([]);

  useEffect(() => {

    fetchItineraryData().then(res => {
      // console.log("res... of car package ===> ",res?.packages);
      setCarPackage(res?.packages || [])
    });
    fetchCatagories().then(res => {
      // console.log("res... of  ===> Catagories",res?.data);
      setCatagories(res?.data || []);
    });

  }, []);
  // console.log("carPackage ======> sitemap", carPackage);
  // console.log("categories ======> sitemap", categories);

  // Car Package
  const toursWithCity = carPackage?.map(item => (
    {
      name: item.name || "Unknown Tour",
      city: item.location?.name || "Unknown City",
    }
  )) || [];

  toursWithCity.sort((a, b) => a.name.localeCompare(b.name));

  const groupedTours2 = toursWithCity.reduce((acc, tour) => {
    const firstLetter = tour.name[0].charAt(0).toUpperCase();
    if (!acc[firstLetter]) acc[firstLetter] = [];
    acc[firstLetter].push({ name: tour.name, city: tour.city });
    return acc;
  }, {});

  // Speciality tour (category)
  const tours3 = categories?.map(item => item.category) || [];

  const groupedTours3 = tours3.sort().reduce((acc, tour) => {
    const firstLetter = tour[0].toUpperCase();
    if (!acc[firstLetter]) acc[firstLetter] = [];
    acc[firstLetter].push(tour);
    return acc;
  }, {});

  return (
    <div>
      <DesktopHeader />
      <Breadcrumbs />
      <div className='container-wrapper py-2'>
        <h1 className="md:text-2xl text-xl font-medium text-gray-800 mb-6">Sitemap</h1>
        <div className="bg-white shadow-lg rounded-lg px-8 py-5">
          <h1 className="md:text-xl text-lg text-blue-800 mb-4">India Tour Package</h1>
          <div className="grid md:grid-cols-4 grid-cols-1 md:gap-10 gap-5">
            {Object.keys(groupedTours).map((letter) => (
              <div key={letter} className=''>
                <h4 className="md:text-[30px] text-xl text-gray-400 border-b mb-3 pb-3">{letter}</h4>
                <div className="grid grid-cols-1">
                  {groupedTours[letter].map((tour, index) => (
                    <Link
                      href={"/package/" + tour.toLowerCase().replace(/\s+/g, "-") + "-tour-package"}
                      key={index} className='md:text-para text-sm mb-2 text-blue-800 capitalize'
                    >
                      {tour}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg px-8 py-5 my-5">
          <h1 className="md:text-xl text-lg  text-blue-800 mb-4">Car Tour Package</h1>
          <div className="grid md:grid-cols-4 grid-cols-1 md:gap-10 gap-5">
            {Object.keys(groupedTours2).map((letter) => (
              <div key={letter} className=''>
                <h4 className="md:text-[30px] text-xl text-gray-400 border-b mb-3 pb-3">{letter}</h4>
                <div className="grid grid-cols-1">
                  {groupedTours2[letter].map((tour, index) => (
                    <Link
                      href={"/car-rental/" + tour.city.toLowerCase().replace(/\s+/g, "-") + "/" + tour.name.toLowerCase().replace(/\s+/g, "-") + "-tour-package"}
                      key={index} className='md:text-para text-sm mb-2 text-blue-800 capitalize'
                    >
                      {tour.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg px-8 py-5">
          <h1 className="md:text-xl text-lg text-blue-800 mb-4">Speciality Tours</h1>
          <div className="grid md:grid-cols-4 grid-cols-1 md:gap-10 gap-5">
            {Object.keys(groupedTours3).map((letter) => (
              <div key={letter} className=''>
                <h4 className="md:text-[30px] text-xl text-gray-400 border-b mb-3 pb-3">{letter}</h4>
                <div className="grid grid-cols-1">
                  {groupedTours3[letter].map((tour, index) => (
                    <Link
                      href={"/speciality-tours/" + tour + "-tour-packages"}
                      key={index} className='md:text-para text-sm mb-2 text-blue-800 capitalize'
                    >
                      {tour}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <Footer />
      </div>
    </div>
  )
}

export default Sitemap;
