import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
 const ItineraryFaq =({promoData})=> {
  return (
    <div className="w-full md:w-3/4 m-auto ">
      <div className="text-center mb-10">
        <p className=" md:text-[22px] mb-2">HighLight & Inclusion</p>

        <p className="text-para  md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
     {/* {promoData?.faq?.map((item,i)=><Accordion key={i} className="my-2 shadow-none border-y-[1px] bg-[#F1F5F9] outline-0 ">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-white" />}
          aria-controls="panel1-content"
          id="panel1-header"
          className=" bg-navyblack text-white "
          sx={{ borderRadius: 1 }}
        > */}
          {/* itenaray heading is here */}
          {/* <Itineraryfaqheading/>  */}
          {/* <p className="md:text-[15px] text-para">{item.title}</p>
        </AccordionSummary>
        <AccordionDetails className="border-0"> */}
          {/* itenery data is here */}
          {/* <ItineraryFaq/> */}
          {/* <p>{item?.information}</p>
        </AccordionDetails>
      </Accordion>)} */}

      {/* Temporary Accordion*/}

      <Accordion className="my-2 shadow-none border-y-[1px] bg-[#F1F5F9] outline-0 ">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-white" />}
          aria-controls="panel1-content"
          id="panel1-header"
          className=" bg-navyblack text-white "
          sx={{ borderRadius: 1 }}
        >
          {/* itenaray heading is here */}
          {/* <Itineraryfaqheading/>  */}
          <p className="md:text-[15px] text-para">Hello</p>
        </AccordionSummary>
        <AccordionDetails className="border-0">
          {/* itenery data is here */}
          {/* <ItineraryFaq/> */}
          <p>Lorem corrupti ratione cum magnam provident! Eligendi maiores nulla delectus vel, 
            quisquam blanditiis sequi neque iste ullam. 
          </p>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
export default  ItineraryFaq

