
import Holiday from "./CustomizedHoliday";
import Forex from "./Forex";


import SliderCircle from "./SliderCircle";
import Speciality from "./Speciality";
import World from "./World";



const Data=[({setOpenClose})=><SliderCircle setOpenClose= {setOpenClose}/>,({setOpenClose})=><World setOpenClose= {setOpenClose}/>,({setOpenClose})=><Speciality setOpenClose= {setOpenClose}/>,({setOpenClose})=><Holiday setOpenClose= {setOpenClose}/>,({setOpenClose})=><Forex setOpenClose= {setOpenClose}/>];


export default Data;
