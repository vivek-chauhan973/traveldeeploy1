import React from 'react'
import "../../app/globals.css";
import DesktopHeader from '@/components/Header/DesktopHeader/desktopHeader'
import Image from 'next/image';

const Contact = () => {
  return (
    <div>
      <DesktopHeader />
      <div>
        <div className="relative w-full h-80 md:h-96 lg:h-[32rem] overflow-hidden">
          <Image
            className=" top-0 left-0 w-full h-full object-cover object-center"
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Favit.ac.in%2Fcontact%2F&psig=AOvVaw2a30A9-VUVeov-cz3KWFaz&ust=1729578845164000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCwxbntnokDFQAAAAAdAAAAABAE"
            alt=""
            width={100}
            height={100}
            onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          />
        </div>
        <div className='container-wrapper pt-5'>
          <h4 className="md:text-2xl text-md font-medium mb-2 capitalize">Contact US</h4>
          <p className="text-para line-clamp-5">ContactUs Communications is a U.S. based contact center services organization 
            supporting global brands across a variety of industries. Our highly experienced management team delivers 
            outsourced customer care, inbound and outbound sales, customer retention and win-back programs, 
            as well as technical support.ContactUs Communications is a U.S. based contact center services organization 
            supporting global brands across a variety of industries. Our highly experienced management team delivers 
            outsourced customer care, inbound and outbound sales, customer retention and win-back programs, 
            as well as technical support.ContactUs Communications is a U.S. based contact center services organization 
            supporting global brands across a variety of industries. Our highly experienced management team delivers 
            outsourced customer care, inbound and outbound sales, customer retention and win-back programs, 
            as well as technical support.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact;