import Holiday from "./Holiday"
import Show from "./Show"
import CarHire from './CarHire'
import dynamic from 'next/dynamic';

const VscCompass = dynamic(() => import('react-icons/vsc').then((mod) => mod.VscCompass));
const BsCakeFill = dynamic(() => import('react-icons/bs').then((mod) => mod.BsCakeFill));
const FaCarAlt = dynamic(() => import('react-icons/fa').then((mod) => mod.FaCarAlt));
const IoDiamondOutline = dynamic(() => import('react-icons/io5').then((mod) => mod.IoDiamondOutline));
const FaHandshake = dynamic(() => import('react-icons/fa').then((mod) => mod.FaHandshake));
const IoIosContacts = dynamic(() => import('react-icons/io').then((mod) => mod.IoIosContacts));

import Contact from "./Contact";
import Deals from "./Deals";
import SpacialityTour from "./SpacialityTour";
const data1=[{
  state:"Himachal Pradesh",
  cities:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
  state1:"Himachal Pradesh",
  cities1:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
  state2:"Himachal Pradesh",
  cities2:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
  state3:"Himachal Pradesh",
  cities3:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
  state4:"Himachal Pradesh",
  cities4:['Chandratal','Dalhouse','Kaza','Manali','shimla']

},{
  state:"South india",
  cities:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
  state1:"South india",
  cities1:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
  state2:"South india",
  cities2:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
  state3:"South india",
  cities3:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
  state4:"South india",
  cities4:['Chandratal','Dalhouse','Kaza','Manali','shimla']
},{
  state:"East and North East India",
  cities:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
  state1:"East and North East India",
  cities1:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
  state2:"East and North East India",
  cities2:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
  state3:"East and North East India",
  cities3:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
  state4:"East and North East India",
  cities4:['Chandratal','Dalhouse','Kaza','Manali','shimla']
},{
  state:"Rajasthan ,West & Central India",
  cities:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
  state1:"Rajasthan ,West & Central India",
  cities1:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
  state2:"Rajasthan ,West & Central India",
  cities2:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
  state3:"Rajasthan ,West & Central India",
  cities3:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
  state4:"Rajasthan ,West & Central India",
  cities4:['Chandratal','Dalhouse','Kaza','Manali','shimla']
}]
const stateData=['Himachal Pradesh','South india','East and North East India','Rajasthan ,West & Central India']

const header=[
  {
  name:"Destination",
  element:Show,
  href:'#',
  icon:<VscCompass/>
},{
  name:"Holiday",
  element:Holiday,
  href:'#' ,
  icon:<BsCakeFill/>
},
{
  name:"Car Hire",
  element:CarHire,
  href:'#',
   icon:<FaCarAlt/>
},
{
  name:"Spaciality Tour",
  element:SpacialityTour,
  href:'#',
   icon:<IoDiamondOutline/>
},
{
  name:"Deals",
  element:Deals,
  href:'#',
   icon:<FaHandshake/>
},
{
  name:"Contact Us",
  element:Contact,
  href:'#',
   icon:<IoIosContacts/>
}]

// console.log(header)
export {data1,stateData,header}