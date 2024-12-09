
import Holiday from "./CustomizedHoliday";
import SliderCircle from "./SliderCircle";
import Speciality from "./Speciality";



const Data = [({ setOpenClose }) => <SliderCircle setOpenClose={setOpenClose} />, ({ setOpenClose }) => <Speciality setOpenClose={setOpenClose} />, ({ setOpenClose }) => <Holiday setOpenClose={setOpenClose} />];


export default Data;
