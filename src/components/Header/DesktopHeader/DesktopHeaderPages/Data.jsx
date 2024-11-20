import Holiday from "./Holiday"
import Show from "./Show"
import SpacialityTour from "./SpacialityTour";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass ,  faCake,faCar,faDiamond} from '@fortawesome/free-solid-svg-icons';
import Travel from "./Travel";
// const data1=[{
//   state:"Himachal Pradesh",
//   cities:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
//   state1:"Himachal Pradesh",
//   cities1:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
//   state2:"Himachal Pradesh",
//   cities2:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
//   state3:"Himachal Pradesh",
//   cities3:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
//   state4:"Himachal Pradesh",
//   cities4:['Chandratal','Dalhouse','Kaza','Manali','shimla']

// },{
//   state:"South india",
//   cities:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
//   state1:"South india",
//   cities1:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
//   state2:"South india",
//   cities2:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
//   state3:"South india",
//   cities3:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
//   state4:"South india",
//   cities4:['Chandratal','Dalhouse','Kaza','Manali','shimla']
// },{
//   state:"East and North East India",
//   cities:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
//   state1:"East and North East India",
//   cities1:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
//   state2:"East and North East India",
//   cities2:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
//   state3:"East and North East India",
//   cities3:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
//   state4:"East and North East India",
//   cities4:['Chandratal','Dalhouse','Kaza','Manali','shimla']
// },{
//   state:"Rajasthan ,West & Central India",
//   cities:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
//   state1:"Rajasthan ,West & Central India",
//   cities1:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
//   state2:"Rajasthan ,West & Central India",
//   cities2:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
//   state3:"Rajasthan ,West & Central India",
//   cities3:['Chandratal','Dalhouse','Kaza','Manali','shimla'],
//   state4:"Rajasthan ,West & Central India",
//   cities4:['Chandratal','Dalhouse','Kaza','Manali','shimla']
// }]
// const stateData=['Himachal Pradesh','South india','East and North East India','Rajasthan ,West & Central India']

const header=[
  {
  name:"Destination",
  element:Show,
  icon:  <FontAwesomeIcon icon={faCompass}  className='font'  />
},{
  name:"Holiday",
  element:Holiday,
  icon:<FontAwesomeIcon icon={faCake}  className='font'  />
},
{
  name:"Spaciality Tour",
  element:SpacialityTour,
   icon:<FontAwesomeIcon icon={faDiamond}  className='font'  />
},
{
  name:"Car Hire",
  element:SpacialityTour,
   icon:<FontAwesomeIcon icon={faCar}  className='font'  />
},
{
  name:"Travel",
  element:Travel,
   icon:<FontAwesomeIcon icon={faCar}  className='font'  />
},
]

// console.log(header)
export {header}