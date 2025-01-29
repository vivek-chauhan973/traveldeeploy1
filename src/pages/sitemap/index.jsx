import React, { useState } from 'react'
import "../../app/globals.css";
import DesktopHeader from '@/components/Header/DesktopHeader/desktopHeader'
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

const Sitemap = () => {

  const tours = [
    "Beach",
    "Christmas Vacations",
    "City Walks And Day Trips",
    "Couples Only",
    "Cruising Affair",
    "Family",
    "Grandparents And Grandchildren Special",
    "Himalaya",
    "Honeymoon Special",
    "Jubilee Special",
    "Lets Go Himalayas",
    "Luxury Tours",
    "One Week One Place",
    "Post Tour Holidays",
    "Road Trips",
    "SEA Africa Australia",
    "Seniors' Special",
    "Short Trips",
    "Single Traveller Partner Guaranteed Tours",
    "Student Special",
    "Valentines Special",
  ];

  const groupedTours = tours.sort().reduce((acc, tour) => {
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
        <div className="bg-white shadow-xl rounded-xl px-8 py-5 border">
          <h1 className="md:text-xl text-lg text-blue-800 mb-4">India Tour Package</h1>
          <div className="grid md:grid-cols-4 grid-cols-1 md:gap-10 gap-5">
            {Object.keys(groupedTours).map((letter) => (
              <div key={letter} className=''>
                <h4 className="md:text-[30px] text-xl text-gray-400 border-b mb-3 pb-1">{letter}</h4>
                <div className="grid grid-cols-1">
                  {groupedTours[letter].map((tour, index) => (
                    <a
                      href=""
                      key={index} className='md:text-para text-sm mb-2 text-blue-800'
                    >
                      {tour}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white shadow-xl rounded-xl px-8 py-5 border my-5">
          <h1 className="md:text-xl text-lg  text-blue-800 mb-4">Car Tour Package</h1>
          <div className="grid md:grid-cols-4 grid-cols-1 md:gap-10 gap-5">
            {Object.keys(groupedTours).map((letter) => (
              <div key={letter} className=''>
                <h4 className="md:text-[30px] text-xl text-gray-400 border-b mb-3 pb-1">{letter}</h4>
                <div className="grid grid-cols-1">
                  {groupedTours[letter].map((tour, index) => (
                    <a
                      href=""
                      key={index} className='md:text-para text-sm mb-2 text-blue-800'
                    >
                      {tour}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white shadow-xl rounded-xl px-8 py-5 border">
          <h1 className="md:text-xl text-lg text-blue-800 mb-4">Speciality Tours</h1>
          <div className="grid md:grid-cols-4 grid-cols-1 md:gap-10 gap-5">
            {Object.keys(groupedTours).map((letter) => (
              <div key={letter} className=''>
                <h4 className="md:text-[30px] text-xl text-gray-400 border-b mb-3 pb-1">{letter}</h4>
                <div className="grid grid-cols-1">
                  {groupedTours[letter].map((tour, index) => (
                    <a
                      href=""
                      key={index} className='md:text-para text-sm mb-2 text-blue-800'
                    >
                      {tour}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white shadow-xl rounded-xl px-8 py-5 border mt-5">
          <h1 className="md:text-xl text-lg text-blue-800 mb-4">Customized Holidays</h1>
          <div className="grid md:grid-cols-4 grid-cols-1 md:gap-10 gap-5">
            {Object.keys(groupedTours).map((letter) => (
              <div key={letter} className=''>
                <h4 className="md:text-[30px] text-xl text-gray-400 border-b mb-3 pb-1">{letter}</h4>
                <div className="grid grid-cols-1">
                  {groupedTours[letter].map((tour, index) => (
                    <a
                      href=""
                      key={index} className='md:text-para text-sm mb-2 text-blue-800'
                    >
                      {tour}
                    </a>
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
